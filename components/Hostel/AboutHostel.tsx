import styles from './AboutHostel.module.css'
import {useGetGeneralContactsInfoQuery} from "../../graphqlGenerated/graphql";
import { observer } from 'mobx-react-lite';


function AboutHostel(){
    const {data, loading, error} = useGetGeneralContactsInfoQuery()

    return(
        <article className={styles.generalInformation}  data-aos="fade-right" data-aos-once={'true'}>

        </article>
    )
}

export default observer(AboutHostel)