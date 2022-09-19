import styles from '../styles/HeaderComponent.module.css'
import Link from "next/link";
import {useState} from "react";

function HeaderComponent(){
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
    return(
        <header>
            <div className={styles.aboveNav}>
                <div className={styles.logoInformation}>
                    <a className={styles.logo}/>
                    <h1 className={styles.logoName}>SILLAMÄE SPORDIKOMPLEKS KALEV</h1>
                </div>
                <a className={styles.changeLanguage}>RU</a>
            </div>
            <nav className={styles.mainNav}>
                <Link href={`/`}>
                    <a className={styles.chosenPage}>Avaleht</a>
                </Link>
                <Link href={`/SportComplex`}>
                    <a>Spordikompleksist</a>
                </Link>
                <Link href={`/SportOpportunities`}>
                    <a>Sportimisvõimalused</a>
                </Link>
                <Link href={`/Kalender`}>
                    <a>Kalender</a>
                </Link>
                <Link href={`/PriceList`}>
                    <a>Hinnakiri</a>
                </Link>
                <Link href={`/Hostel`}>
                    <a>Hostel</a>
                </Link>
                <Link href={`/Contact`}>
                    <a>Kontakt</a>
                </Link>
            </nav>
        </header>

)
}

export default HeaderComponent