import { observer } from 'mobx-react-lite'
import styles from '../styles/FooterComponent.module.css'
import LanguageStore from '../Stores/LanguageStore'
import { useEffect, useState } from 'react'
import { autorun } from 'mobx';

function FooterComponent(){
    const [isEstLanguage, setIsEstLang] = useState(LanguageStore.currentLanguage.isEst); 

    const lang = { 
        contactUs: isEstLanguage ? LanguageStore.footer.ContactUs.EST : LanguageStore.footer.ContactUs.RUS,
        sportComplex: isEstLanguage ? LanguageStore.footer.SportComplex.EST : LanguageStore.footer.SportComplex.RUS,
        visitUs: isEstLanguage ? LanguageStore.footer.VisitUs.EST : LanguageStore.footer.VisitUs.RUS, 
        folowUs: isEstLanguage ? LanguageStore.footer.FollowOnSocialMedia.EST : LanguageStore.footer.FollowOnSocialMedia.RUS
    }

    return(
        <footer className={styles.footer}>
            <div className={styles.footerInformation}>
                <div className={styles.containerInformationFooter}>
                    <h3>{lang.contactUs}</h3>
                    <span>+372 392 4245</span>
                    <span>+372 397 4077</span>
                    <span>info@sillamaesk.ee</span>
                </div>
                <div className={styles.containerInformationFooter}>
                    <h3>{lang.sportComplex}</h3>
                    <span>Võta ühendust</span>
                    <span>Spordikompleks Kalev</span>
                    <span>Külasta meid</span>
                </div>
                <div className={styles.containerInformationFooter}>
                    <h3>Külasta meid</h3>
                    <div className={styles.containerScheduleFooter}>
                        <div>
                            <span>{lang.sportComplex}:</span>
                            <span>E-R: 08.00-22.00</span>
                            <span>L-P: 09.00-21.00</span>
                        </div>
                        <div>
                            <span>Ujula:</span>
                            <span>E-R: 07.00-21.00</span>
                            <span>L-P: 09.00-17.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <a href={"https://www.facebook.com/spordikompleksKalev"}>Jälgi meid sotsiaalmeedias </a>
        </footer>
    )
}

export default observer(FooterComponent)