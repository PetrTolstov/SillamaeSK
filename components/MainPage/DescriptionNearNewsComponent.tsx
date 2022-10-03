import styles from '../../styles/DescriptionNearNewsComponent.module.css'
import {
    GetSportOpportunitiesDescriptionDocument,
    useGetSportOpportunitiesDescriptionQuery
} from "../../graphqlGenerated/graphql";

function DescriptionNearNewsComponent(){
    const {data, loading, error} = useGetSportOpportunitiesDescriptionQuery()
    return(
        <article className={styles.textSecondBlock}>
            {loading ? <h2>Loading</h2> :
                <>
                    <h2>{data!.GetSportOpportunitiesDescription!.title!.EST}</h2>
                    <p>{data!.GetSportOpportunitiesDescription!.text!.EST}</p>
                </>}
        </article>
    )
}

export default DescriptionNearNewsComponent