import styles from '../../styles/GeneralInformation.module.css'
import {useGetGeneralContactsInfoQuery} from "../../graphqlGenerated/graphql";
import { observer } from 'mobx-react-lite';
import LanguageStore from '../../Stores/LanguageStore';
import LanguageStoreV2 from '../../Stores/LanguageStoreV2';

function GeneralInformation(){
    const {data, loading, error} = useGetGeneralContactsInfoQuery()

    return(
        <article className={styles.generalInformation}  data-aos="fade-right" data-aos-once={'true'}>
            {loading ? <p>Loading...</p> :
                <>
                    <h2>{LanguageStoreV2.header.tabs.ContactPageTab[LanguageStoreV2.currentLanguage]}</h2>
                    <h3>{LanguageStore.currentLanguage.isEst ? data?.GetGeneralContactsInfo?.addressField?.fieldTitle?.EST : data?.GetGeneralContactsInfo?.addressField?.fieldTitle?.RUS }</h3>
                    <p>{data?.GetGeneralContactsInfo?.addressField?.fieldInfo}</p>
                    <h3>{LanguageStore.currentLanguage.isEst ? data?.GetGeneralContactsInfo?.phoneField?.fieldTitle?.EST : data?.GetGeneralContactsInfo?.phoneField?.fieldTitle?.RUS}</h3>
                    <p>{data?.GetGeneralContactsInfo?.phoneField?.fieldInfo}</p>
                    <h3>{LanguageStore.currentLanguage.isEst ? data?.GetGeneralContactsInfo?.emailField?.fieldTitle?.EST : data?.GetGeneralContactsInfo?.emailField?.fieldTitle?.RUS}</h3>
                    <p>{data?.GetGeneralContactsInfo?.emailField?.fieldInfo}</p>
                </>
                }
        </article>
    )
}

export default observer(GeneralInformation)