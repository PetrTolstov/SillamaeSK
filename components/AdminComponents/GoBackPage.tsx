import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useLoginMutation } from "../../graphqlGenerated/graphql";
import AdminStore from "../../Stores/AdminStore";
import { ButtonAdmin } from "./ButtonAdmin";

const GoBackPage = () => {
	const router = useRouter();
    const [Login, {data, loading, error}] = useLoginMutation();
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
	return (
		<div>
			<h1>Te pole sisse logitud</h1>
			<a>
				<ButtonAdmin
					border
					action={() => {
						router.push("/AdminAccess");
					}}
					label={"Mine tagasi"}
				/>
			</a>
		</div>
	);
};

export default observer(GoBackPage);