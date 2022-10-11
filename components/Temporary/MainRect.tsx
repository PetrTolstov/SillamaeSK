import './mainrect.module.css'
import styles from './mainrect.module.css'
import {useGetPageNotWorkingBannerQuery} from "../../graphqlGenerated/graphql";
import LanguageStore from "../../Stores/LanguageStore";
import GeneralInformation from "../../components/Contact/GeneralInformation";

function MainRect({isEst}: {isEst: boolean}) {
    const {data, loading, error} = useGetPageNotWorkingBannerQuery();

    return ( 
        <div className={styles.mainrectContainer}>
            {loading ? <></> :
            <div className={styles.mainrect} data-aos="zoom-in" data-aos-once={'true'} style={{color: '#002B5C'}}>

                {data!.GetPageNotWorkingBanner?.title?.show ?
                    <h1 className={styles.h1}>
                    { LanguageStore.currentLanguage.isEst ? data?.GetPageNotWorkingBanner?.title?.text?.EST : data?.GetPageNotWorkingBanner?.title?.text?.RUS}
                   </h1>
                    :
                    <></>}
                {data!.GetPageNotWorkingBanner?.centeredText?.show ?
                <a className={styles.link} href={`${data?.GetPageNotWorkingBanner?.link?.show ? data?.GetPageNotWorkingBanner?.link?.body : ''}`} target="_blank" rel="noreferrer">
                    <p className={styles.defText}>{ LanguageStore.currentLanguage.isEst  ? data?.GetPageNotWorkingBanner?.centeredText?.text?.EST : data?.GetPageNotWorkingBanner?.centeredText?.text?.RUS}</p>
                </a>
                    :
                    <></>}
                {data!.GetPageNotWorkingBanner?.body?.show ?
                <p className={styles.defText}>{ LanguageStore.currentLanguage.isEst? data?.GetPageNotWorkingBanner?.body?.text?.EST : data?.GetPageNotWorkingBanner?.body?.text?.RUS}</p>
                    :
                    <></>}
                {data!.GetPageNotWorkingBanner?.showContacts?
                <div className={styles.contactsContainer}>
                   <GeneralInformation/>
                </div>
                    :
                    <></>}
            </div>
            }
        </div>
    )
}

export default MainRect; 