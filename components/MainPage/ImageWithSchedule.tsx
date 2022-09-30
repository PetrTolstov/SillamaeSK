import styles from '../../styles/ImageWithSchedule.module.css'
import {useRouter} from "next/router";

function ImageWithScheduleComponent(){
    const router = useRouter()
    return(
        <article className={styles.ImageWithSchedule}>
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