import styles from '../styles/HeaderComponent.module.css'
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}


function HeaderComponent(){
    const [navStyles, setNavStyles] = useState([styles.mainNav, styles.hiddenMainNav])
    const [langStyle, setLangStyles] = useState([styles.changeLanguage, styles.hiddenLang])
    const [contentBut, setContentBut] = useState("☰")

    function openNav(){
        switch (navStyles.length){
            case 1:
                setNavStyles([styles.mainNav, styles.hiddenMainNav])
                setContentBut("☰")
                break
            case 2:
                setNavStyles([styles.mainNav])
                setContentBut("╳")
                break
        }

        switch (langStyle.length){
            case 1:
                setLangStyles([styles.changeLanguage, styles.hiddenLang])
                break
            case 2:
                setLangStyles([styles.changeLanguage])
                break
        }

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
    const navRef = useRef(null)
    return(
        <header>
            <div className={styles.aboveNav}>
                <div className={styles.logoInformation}>
                    <a className={styles.logo}/>
                    <h1 className={styles.logoName}>SILLAMÄE SPORDIKOMPLEKS KALEV</h1>
                </div>
                <button className={styles.openbtn} onClick={openNav}>{contentBut}</button>
                <a className={langStyle.join(" ")}>RU</a>
            </div>
            <nav className={navStyles.join(' ')}>
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