import styles from '../../styles/ImageWithSchedule.module.css'
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {LINK} from "../../config/constants";


function ImageWithScheduleComponent({isMain=false}){
    const router = useRouter()

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
            <img src={imgFile} className={isMain ? styles.backGroundImg : styles.altBackGroundImg}/>
            <div className={isMain ? styles.schedule : styles.hidden }>
                    <div>
                        <p>
                        OLEME AVATUD
                        </p>
                    </div>
                    <div className={styles.divSchedule}>
                        <div>
                            <p>Spordikompleks</p>
                            <p>E-R: 08.00-22.00</p>
                            <p>L-P: 09.00-21.00</p>
                        </div>
                        <div>
                            <p>Ujula</p>
                            <p>E-R: 07.00-21.00</p>
                            <p>L-P: 09.00-17.00</p>
                        </div>
                    </div>

            </div>

            <div className={isMain ? styles.scheduleButtons : styles.AltScheduleButtons}>
                <button className={styles.left}>◀</button>
                <button className={styles.right}>▶</button>
            </div>

        </article>
    )
}

export default ImageWithScheduleComponent