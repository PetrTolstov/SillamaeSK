import styles from '../../styles/DescriptionNearNewsComponent.module.css'
import {
    GetSportOpportunitiesDescriptionDocument,
    useGetSportOpportunitiesDescriptionQuery
} from "../../graphqlGenerated/graphql";
import { observer } from 'mobx-react-lite';
import LanguageStore from '../../Stores/LanguageStore';
import LanguageStoreV2 from '../../Stores/LanguageStoreV2';


function DescriptionNearNewsComponent(){
    const {data, loading, error} = useGetSportOpportunitiesDescriptionQuery(); 

    return(

        <article className={styles.textSecondBlock} data-aos="fade-right" data-aos-once={'true'}>
            {loading ? <h2>Loading</h2> :
                <>
                    <h2>{data?.GetSportOpportunitiesDescription?.title![LanguageStoreV2.currentLanguage == "ENG" ? "EST" : LanguageStoreV2.currentLanguage]}</h2>

                    <p>{data?.GetSportOpportunitiesDescription?.text![LanguageStoreV2.currentLanguage == "ENG" ? "EST" : LanguageStoreV2.currentLanguage]}</p>
                </>}
        </article>

    )
}

export default observer(DescriptionNearNewsComponent)