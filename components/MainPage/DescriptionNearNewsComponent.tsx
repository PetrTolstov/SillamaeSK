import styles from '../../styles/DescriptionNearNewsComponent.module.css'
import {
    GetSportOpportunitiesDescriptionDocument,
    useGetSportOpportunitiesDescriptionQuery
} from "../../graphqlGenerated/graphql";
import { observer } from 'mobx-react-lite';
import LanguageStore from '../../Stores/LanguageStore';

function DescriptionNearNewsComponent(){
    const {data, loading, error} = useGetSportOpportunitiesDescriptionQuery(); 

    return(
        <article className={styles.textSecondBlock}>
            {loading ? <h2>Loading</h2> :
                <>
                    <h2>{ LanguageStore.currentLanguage.isEst ? data!.GetSportOpportunitiesDescription!.title!.EST : data!.GetSportOpportunitiesDescription!.title!.RUS}</h2>
                    <p>{LanguageStore.currentLanguage.isEst ? data!.GetSportOpportunitiesDescription!.text!.EST : data!.GetSportOpportunitiesDescription!.text!.RUS}</p>
                </>}
        </article>
    )
}

export default observer(DescriptionNearNewsComponent)