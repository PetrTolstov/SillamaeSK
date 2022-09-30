import styles from '../../styles/ImageWithSchedule.module.css'
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {LINK} from "../../config/constants";


function ImageWithScheduleComponent(){
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
            console.log(res.data)
            setImgFile(`${LINK}/public/images/${page}/${res.data[0]}`)
        })()
    }, [])

    return(
        <article className={styles.ImageWithSchedule} style={{backgroundImage: imgFile}}>
            <img src={imgFile} className={styles.backGroundImg}/>
            <table className={styles.schedule}>

                    <thead className={router.pathname == '/' ? '' : styles.hidden}>
                    <tr>
                        <th>OLEME AVATUD</th>
                    </tr>
                    </thead>
                    <tbody className={router.pathname == '/' ? '' : styles.hidden}>
                    <tr>
                        <td>Spordikompleks</td>
                        <td>Ujula</td>
                    </tr>
                    <tr>
                        <td>E-R: 08.00-22.00</td>
                        <td>E-R: 07.00-21.00</td>
                    </tr>
                    <tr>
                        <td>L-P: 09.00-21.00</td>
                        <td>L-P: 09.00-17.00</td>
                    </tr>
                    </tbody>

            </table>

            <div className={styles.scheduleButtons}>
                <button className={styles.left}>◀</button>
                <button className={styles.right}>▶</button>
            </div>

        </article>
    )
}

export default ImageWithScheduleComponent