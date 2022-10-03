import styles from '../../styles/GeneralInformation.module.css'
import {useGetGeneralContactsInfoQuery} from "../../graphqlGenerated/graphql";

function GeneralInformation(){
    const {data, loading, error} = useGetGeneralContactsInfoQuery()

    return(
        <article className={styles.generalInformation}>
            {loading ? <p>Loading...</p> :
                <>
                    <h2>Kontakt</h2>
                    <h3>{data?.GetGeneralContactsInfo?.addressField?.fieldTitle?.EST}</h3>
                    <p>{data?.GetGeneralContactsInfo?.addressField?.fieldInfo}</p>
                    <h3>{data?.GetGeneralContactsInfo?.phoneField?.fieldTitle?.EST}</h3>
                    <p>{data?.GetGeneralContactsInfo?.phoneField?.fieldInfo}</p>
                    <h3>{data?.GetGeneralContactsInfo?.emailField?.fieldTitle?.EST}</h3>
                    <p>{data?.GetGeneralContactsInfo?.emailField?.fieldInfo}</p>
                </>
                }
        </article>
    )
}

export default GeneralInformation