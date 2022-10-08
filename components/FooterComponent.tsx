import { observer } from 'mobx-react-lite'
import styles from '../styles/FooterComponent.module.css'
import LanguageStore from '../Stores/LanguageStore'
import React, { useEffect, useState } from 'react'
import { autorun } from 'mobx';
import {useGetTimeTableQuery} from "../graphqlGenerated/graphql";
import languageStore from "../Stores/LanguageStore";

function FooterComponent() {
    const {data, loading, error} = useGetTimeTableQuery()
    const lang = { 
        contactUs: LanguageStore.currentLanguage.isEst ? LanguageStore.footer.ContactUs.EST : LanguageStore.footer.ContactUs.RUS,
        sportComplex: LanguageStore.currentLanguage.isEst ? LanguageStore.footer.SportComplex.EST : LanguageStore.footer.SportComplex.RUS,
        visitUs: LanguageStore.currentLanguage.isEst ? LanguageStore.footer.VisitUs.EST : LanguageStore.footer.VisitUs.RUS, 
        folowUs: LanguageStore.currentLanguage.isEst ? LanguageStore.footer.FollowOnSocialMedia.EST : LanguageStore.footer.FollowOnSocialMedia.RUS
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
                <div className={styles.containerInformfationFooter}>
                    <h3>{lang.visitUs}</h3>
                    <div className={styles.containerScheduleFooter}>
                        { loading ? <p>Loading...</p> :
                            <>
                        <div>
                            <span>{languageStore.currentLanguage.isEst ? data!.GetTimeTable?.SportComplex?.title?.EST :  data!.GetTimeTable?.SportComplex?.title?.RUS }</span>
                            <span>{languageStore.currentLanguage.isEst ? data!.GetTimeTable?.SportComplex?.minTitle1?.EST :  data!.GetTimeTable?.SportComplex?.minTitle1?.RUS}: {data!.GetTimeTable?.SportComplex?.timeTable1}</span>
                            <span>{languageStore.currentLanguage.isEst ? data!.GetTimeTable?.SportComplex?.minTitle2?.EST :  data!.GetTimeTable?.SportComplex?.minTitle2?.RUS}: {data!.GetTimeTable?.SportComplex?.timeTable2 }</span>
                        </div>
                        <div>
                            <span>{languageStore.currentLanguage.isEst ? data!.GetTimeTable?.SwimmingPool?.title?.EST :  data!.GetTimeTable?.SwimmingPool?.title?.RUS }</span>
                            <span>{languageStore.currentLanguage.isEst ? data!.GetTimeTable?.SwimmingPool?.minTitle1?.EST :  data!.GetTimeTable?.SwimmingPool?.minTitle1?.RUS}: {data!.GetTimeTable?.SwimmingPool?.timeTable1}</span>
                            <span>{languageStore.currentLanguage.isEst ? data!.GetTimeTable?.SwimmingPool?.minTitle2?.EST :  data!.GetTimeTable?.SwimmingPool?.minTitle2?.RUS}: {data!.GetTimeTable?.SwimmingPool?.timeTable2 }</span>
                        </div>

                            </>
                        }
                    </div>
                </div>
            </div>
            <a href={"https://www.facebook.com/spordikompleksKalev"} className={styles.facebookIcon}></a>
        </footer>
    )
}

export default observer(FooterComponent)