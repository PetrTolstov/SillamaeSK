import React, { FormEvent, ReactElement, useEffect, useRef, useState } from "react";
import styles from "../../styles/AdminHeader.module.css";
import { NextPageWithLayout } from "../_app";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import AdminStore from "../../Stores/AdminStore";
import { ButtonAdmin } from "../../components/AdminComponents/ButtonAdmin";
import { useLoginMutation } from "../../graphqlGenerated/graphql";
import frameStyles from "../../styles/FormStyles.module.css"

const AdminHome: NextPageWithLayout = () => {
    const [Login, {data, loading, error}] = useLoginMutation();
    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget); 
        const newObj = { 
            login: data.get("login")?.toString()!,
            password: data.get("password")?.toString()!,
        }
        localStorage.setItem("login", newObj.login);
        localStorage.setItem("password", newObj.password);
        Login({variables: { userData: newObj }, onCompleted(data) {
            alert(data.Login.str);
            AdminStore.setUserInfo(newObj.login, newObj.password, data.Login.isLoggedIn!);
        }})
    }

    useEffect(() => { 
        const loginFromLocalStorage = localStorage.getItem("login");
        const passwordFromLocalStorage = localStorage.getItem("password");
        Login({ variables: { 
            userData: { 
                login: loginFromLocalStorage ?? "", 
                password: passwordFromLocalStorage ?? ""
            }
        }, onCompleted(data) { 
            AdminStore.setUserInfo(loginFromLocalStorage!, passwordFromLocalStorage!, data.Login.isLoggedIn!);
        } })
    }, [])

    if (!AdminStore.userInfo.isLoggedIn) { 
        return (
            <div style={{display: "flex", justifyContent: "center", flexDirection: "column", height: "50vmin"}}>
                <h3>Logi sisse</h3>
                <form onSubmit={handleLogin} style={{display: "flex", flexDirection: "column"}}>

					<div className={frameStyles.flexCon} style={{marginBottom: "15px"}}>
                    	<input type="text" name="login" placeholder="Login"  className={frameStyles.input}/>
						<span className={frameStyles.focusBorder}></span>
					</div>
					<div className={frameStyles.flexCon} style={{marginBottom: "25px"}}>
                    	<input type={"password"} name="password" placeholder="Password" className={frameStyles.input}/>
						<span className={frameStyles.focusBorder}></span>
					</div>
                    <ButtonAdmin isSubmit filled action={()=>{}} label={"Logima"} />
                </form>
            </div>
        );
    } else { 
        return ( 
            <div>
                <h3>You are logged in</h3>
            </div>
        )
    }
    
};

AdminHome.getLayout = function getLayout(AdminHome: ReactElement) {
	return (
		<>
			<AdminLayout>{AdminHome}</AdminLayout>
		</>
	);
};

export function AdminLayout({ children }: React.PropsWithChildren) {
	return (
		<>
            <Header />
			<div style={{display: "flex", justifyContent: "center", width: "75%"}}>{children}</div>
        </>
			
	);
}

export function SidePanel() {
    const sidePanel = useRef<HTMLDivElement>(null);
	const [isShown, setIsShown] = useState(true);
    const togglePanel = () => setIsShown(!isShown);
    
    useEffect(() => {
        if (isShown) { 
            sidePanel.current?.classList.add("sidePanelShown")
            sidePanel.current?.classList.remove("sidePanelHidden")
        } else { 
            sidePanel.current?.classList.remove("sidePanelShown")
            sidePanel.current?.classList.add("sidePanelHidden")
        }
        
    }, [isShown])
    

	if (isShown) {
		return (
			<div ref={sidePanel} className={styles.sidePanel}>
				<BurgerButton togglePanel={togglePanel}/>
				<div className={styles.mainSidePanelContent}>
                    <ul>
                        <li><Link href={"/AdminAccess/Pricing"}>Pricing</Link></li>
                        <li><Link href={"/AdminAccess/FromSportComplex"}>Spordikompleksist</Link></li>
                        <li><Link href={"/AdminAccess/SportOpportunities"}>Sportimisvõimalused</Link></li>
                        <li><Link href={"/AdminAccess/MainPageAdmin"}>Avaleht</Link></li>
                        <li><Link href={"/AdminAccess/ContactInfoPage"}>Kontakt</Link></li>
                        <li><Link href={"/AdminAccess/Calendar"}>Kalendar</Link></li>
                    </ul>
                </div>
			</div>
		);
	} else {
		return <BurgerButton togglePanel={togglePanel} />;
	}
}
export function Header() {
	return (
		<>
			<div className={styles.adminHeader}>
				<div className={styles.logo}></div>
				<p>SILLAMÄE SPORDIKOMPLEKS KALEV</p>
				<p>ADMIN</p>
			</div>
            <SidePanel />
		</>
	);
}

export function BurgerButton({ togglePanel }: { togglePanel: () => void }) {

	return (
		<div
			className={[styles.container, styles.BurgerButton].join(" ")}
			onClick={(e) => {
				e.currentTarget.classList.toggle("active");
                togglePanel(); 
			}}>
			<svg className={styles.svg} xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 200 200'>
				<g strokeWidth='6.5' strokeLinecap='round'>
					<path
						className={styles.path}
						d='M72 82.286h28.75'
						fill='#009100'
						fillRule='evenodd'
						stroke='#000'
					/>
					<path
						className={styles.path}
						d='M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554'
						fill='none'
						stroke='#000'
					/>
					<path
						className={styles.path}
						d='M72 125.143h28.75'
						fill='#009100'
						fillRule='evenodd'
						stroke='#000'
					/>
					<path
						className={styles.path}
						d='M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554'
						fill='none'
						stroke='#000'
					/>
					<path
						className={styles.path}
						d='M100.75 82.286h28.75'
						fill='#009100'
						fillRule='evenodd'
						stroke='#000'
					/>
					<path
						className={styles.path}
						d='M100.75 125.143h28.75'
						fill='#009100'
						fillRule='evenodd'
						stroke='#000'
					/>
				</g>
			</svg>
		</div>
	);
}

export default observer(AdminHome);
