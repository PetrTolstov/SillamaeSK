import styles from '../../styles/SpecificContact.module.css'
import {PersonContactInfo} from "../../graphqlGenerated/graphql";

function SpecificContact({data} : { data: PersonContactInfo | null | undefined}){
    return(
        <article className={styles.SpecificContact}>
            <div className={styles.textContainer}>
                <p><b>{data?.role?.EST}</b></p>
                <p>{data?.name}</p>
                <p>Telefon: {data?.phone}</p>
                <p>E-mail: {data?.email}</p>
            </div>
        </article>
    )
}

export default SpecificContact