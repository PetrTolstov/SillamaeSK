import styles from './HostelRooms.module.css'
import {useGetGeneralContactsInfoQuery} from "../../graphqlGenerated/graphql";
import { observer } from 'mobx-react-lite';
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";
import photo  from '../../public/RoomPhoto.png'

function HostelRooms(){
    const {data, loading, error} = useGetGeneralContactsInfoQuery()

    return(
        <> <h2 className={styles.h2}>Available rooms</h2>
        <article className={styles.listOfRooms}  data-aos="fade-right" data-aos-once={'true'}>
            <ul className={styles.ul}>
                <li
                    id={'1-rooms'}
                    key={'1-rooms'}>
                    <img src={photo.src} alt={'Room photo'}/>
                    <h3>
                        Quadruple Room
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed id cras vulputate nunc eu. Tristique sollicitudin faucibus </p>

                    <button>
                        {LanguageStoreV2.mainPage.latestNews.button[LanguageStoreV2.currentLanguage]}
                    </button>
                </li>
                <li
                    id={'2-rooms'}
                    key={'2-rooms'}>
                    <img src={photo.src} alt={'Room photo'}/>
                    <h3>
                        Quadruple Room
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed id cras vulputate nunc eu. Tristique sollicitudin faucibus </p>

                    <button>
                        {LanguageStoreV2.mainPage.latestNews.button[LanguageStoreV2.currentLanguage]}
                    </button>
                </li>
                <li
                    id={'3-rooms'}
                    key={'3-rooms'}>
                    <img src={photo.src} alt={'Room photo'}/>
                    <h3>
                        Quadruple Room
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed id cras vulputate nunc eu. Tristique sollicitudin faucibus </p>

                    <button>
                        {LanguageStoreV2.mainPage.latestNews.button[LanguageStoreV2.currentLanguage]}
                    </button>
                </li>
                <li
                    id={'4-rooms'}
                    key={'4-rooms'}>
                    <img src={photo.src} alt={'Room photo'}/>
                    <h3>
                        Quadruple Room
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed id cras vulputate nunc eu. Tristique sollicitudin faucibus </p>

                    <button>
                        {LanguageStoreV2.mainPage.latestNews.button[LanguageStoreV2.currentLanguage]}
                    </button>
                </li>
                <li
                    id={'5-rooms'}
                    key={'5-rooms'}>
                    <img src={photo.src} alt={'Room photo'}/>
                    <h3>
                        Quadruple Room
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed id cras vulputate nunc eu. Tristique sollicitudin faucibus </p>

                    <button>
                        {LanguageStoreV2.mainPage.latestNews.button[LanguageStoreV2.currentLanguage]}
                    </button>
                </li>
            </ul>
        </article>
        </>
    )
}

export default observer(HostelRooms)