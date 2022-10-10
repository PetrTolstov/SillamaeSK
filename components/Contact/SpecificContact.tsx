import styles from '../../styles/SpecificContact.module.css'
import {PersonContactInfo} from "../../graphqlGenerated/graphql";
import { observer } from 'mobx-react-lite';
import LanguageStore from '../../Stores/LanguageStore';

function SpecificContact({data} : { data: PersonContactInfo | null | undefined}){
    return(
        <article className={styles.SpecificContact} data-aos="zoom-in-up">
            <div className={styles.textContainer}>
                <p><b>{LanguageStore.currentLanguage.isEst ? data?.role?.EST : data?.role?.RUS}</b></p>
                <p>{data?.name}</p>
                <p>Telefon: {data?.phone}</p>
                <p>E-mail: {data?.email}</p>
            </div>
        </article>
    )
}

export default observer(SpecificContact)