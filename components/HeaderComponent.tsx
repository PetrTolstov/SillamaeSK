import styles from '../styles/HeaderComponent.module.css'
import Link from "next/link";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

function HeaderComponent(){
    function openNav(){
        console.log("S")
    }
    /*
    const [isEst, setLang] = useState(true);
    const handleLanguageChange = () => {
        if (isEst) {
            setLang(false);
        } else {
            setLang(true)
        }
    }
    <div onClick={handleLanguageChange} className={styles.lang}>
        {isEst ? "RU" : "EE"}
    </div>
    </div>

     */
    const router = useRouter()

    return(
        <header>
            <div className={styles.aboveNav}>
                <div className={styles.logoInformation}>
                    <a className={styles.logo}/>
                    <h1 className={styles.logoName}>SILLAMÄE SPORDIKOMPLEKS KALEV</h1>
                </div>
                <button className={styles.openbtn} onClick={openNav}>☰</button>
                <a className={styles.changeLanguage}>RU</a>
            </div>
            <nav className={styles.mainNav}>
                <Link href={`/`}>
                    <a className={router.pathname == '/' ? styles.chosenPage : ""}>Avaleht</a>
                </Link>
                <Link href={`/SportComplex`}>
                    <a className={router.pathname == '/SportComplex' ? styles.chosenPage : ""}>Spordikompleksist</a>
                </Link>
                <Link href={`/SportOpportunities`}>
                    <a className={router.pathname == '/SportOpportunities' ? styles.chosenPage : ""}>Sportimisvõimalused</a>
                </Link>
                <Link href={`/Kalender`}>
                    <a className={router.pathname == '/Kalender' ? styles.chosenPage : ""}>Kalender</a>
                </Link>
                <Link href={`/PriceList`}>
                    <a className={router.pathname == '/PriceList' ? styles.chosenPage : ""}>Hinnakiri</a>
                </Link>
                <Link href={`/Hostel`}>
                    <a className={router.pathname == '/Hostel' ? styles.chosenPage : ""}>Hostel</a>
                </Link>
                <Link href={`/Contact`}>
                    <a className={router.pathname == '/Contact' ? styles.chosenPage : ""}>Kontakt</a>
                </Link>
            </nav>
        </header>

)
}

export default HeaderComponent