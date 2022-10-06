import styles from '../../styles/ImageWithSchedule.module.css'
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {LINK} from "../../config/constants";
import {useGetTimeTableQuery} from "../../graphqlGenerated/graphql";
import {observer} from "mobx-react-lite";
import languageStore from "../../Stores/LanguageStore";

function ImageWithScheduleComponent({isMain=false}){
    const {data, loading, error} = useGetTimeTableQuery()
    const page = 'Karusel'
    const [imgFile, setImgFile] = useState('');


    useEffect(() => {
        (async () => {
            const res = await axios.get(LINK + "/getPhoto", {
                headers: {
                    'optional': page
                }
            });
            // console.log(res.data)
            setImgFile(`${LINK}/public/images/${page}/${res.data[0]}`)
        })()
    }, [])

    return(
        <article className={ styles.ImageWithSchedule} style={{backgroundImage: `url(${imgFile})`}}>
            {/*<img src={imgFile} className={isMain ? styles.backGroundImg : styles.altBackGroundImg}/>*/}
            <div className={isMain ? styles.schedule : styles.hidden }>
                { loading ? <p>Loading...</p> :
                    <>
                    <div>
                        <p>
                            {languageStore.currentLanguage.isEst ? data?.GetTimeTable?.title?.EST : data?.GetTimeTable?.title?.RUS}
                        </p>
                    </div>
                    <div className={styles.divSchedule}>

                        <div>
                            <p>{languageStore.currentLanguage.isEst ? data?.GetTimeTable?.SportComplex?.title?.EST :  data?.GetTimeTable?.SportComplex?.title?.RUS }</p>
                            <p>{languageStore.currentLanguage.isEst ? data?.GetTimeTable?.SportComplex?.minTitle1?.EST :  data?.GetTimeTable?.SportComplex?.minTitle1?.RUS}: {data?.GetTimeTable?.SportComplex?.timeTable1}</p>
                            <p>{languageStore.currentLanguage.isEst ? data?.GetTimeTable?.SportComplex?.minTitle2?.EST :  data?.GetTimeTable?.SportComplex?.minTitle2?.RUS}: {data?.GetTimeTable?.SportComplex?.timeTable2 }</p>
                        </div>
                        <div>
                            <p>{languageStore.currentLanguage.isEst ? data?.GetTimeTable?.SwimmingPool?.title?.EST :  data?.GetTimeTable?.SwimmingPool?.title?.RUS }</p>
                            <p>{languageStore.currentLanguage.isEst ? data?.GetTimeTable?.SwimmingPool?.minTitle1?.EST :  data?.GetTimeTable?.SwimmingPool?.minTitle1?.RUS}: {data?.GetTimeTable?.SwimmingPool?.timeTable1}</p>
                            <p>{languageStore.currentLanguage.isEst ? data?.GetTimeTable?.SwimmingPool?.minTitle2?.EST :  data?.GetTimeTable?.SwimmingPool?.minTitle2?.RUS}: {data?.GetTimeTable?.SwimmingPool?.timeTable2 }</p>
                        </div>
                    </div>
                    </>
                }

            </div>


            <div className={isMain ? styles.scheduleButtons : styles.AltScheduleButtons}>
                <button className={styles.left}>◀</button>
                <button className={styles.right}>▶</button>
            </div>

        </article>
    )
}

export default observer(ImageWithScheduleComponent)