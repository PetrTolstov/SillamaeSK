import styles from './AboutHostel.module.css'
import {useGetGeneralContactsInfoQuery} from "../../graphqlGenerated/graphql";
import { observer } from 'mobx-react-lite';


function AboutHostel(){
    const {data, loading, error} = useGetGeneralContactsInfoQuery()

    return(
        <article className={styles.generalInformation}  data-aos="fade-right" data-aos-once={'true'}>
            <div className={styles.mainText}>
                <h2 className={styles.h2}>Hostel</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed id cras vulputate nunc eu. Tristique sollicitudin faucibus purus viverra cum. Sed etiam mauris, in sollicitudin metus orci, sed amet. Integer fringilla a enim morbi cras.
                    Vivamus commodo cursus viverra lectus et. Feugiat urna condimentum elit nec aliquet pharetra porttitor. Nulla volutpat pellentesque mauris volutpat morbi. Enim pharetra enim quis at aliquet pharetra eros. Porttitor sed morbi tortor aliquam. A arcu.
                </p>
            </div>
            <div className={styles.imageBlock}>
                <div className={styles.contactInfo}>
                    <span className={styles.contactText}>You can contact us to book here</span>
                    <span>+372 5487 4236</span>
                    <span>example@gmail.com</span>
                </div>
            </div>
        </article>
    )
}

export default observer(AboutHostel)