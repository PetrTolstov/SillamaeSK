import styles from './Facilities.module.css'
import {useGetGeneralContactsInfoQuery} from "../../graphqlGenerated/graphql";
import { observer } from 'mobx-react-lite';
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";
import photo  from '../../public/RoomPhoto.png'
import Link from "next/link";

function Facilities(){
    const {data, loading, error} = useGetGeneralContactsInfoQuery()

    return(
        <> <h2 className={styles.h2}>Facilities</h2>
        <article className={styles.listOfFacilities}  data-aos="fade-right" data-aos-once={'true'}>
            <button>Parking</button>
            <button>Free WiFi</button>
            <button>Non-smoking rooms</button>
            <button>Designated smoking area</button>
            <button>Bathroom</button>
            <button>English, Estonian, Russian spoken</button>
            <button>Lockers</button>
            <button>Kitchen</button>
        </article>
        </>
    )
}

export default observer(Facilities)