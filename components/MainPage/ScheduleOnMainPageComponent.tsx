import styles from '../../styles/ScheduleOnMainPageComponent.module.css'


function ScheduleOnMainPageComponent(){
    return(
        <article className={styles.kalender}>
            <div className={styles.kalenderFrame}>

                <h2>SÜNDMUSTE KALENDER </h2>
                <ul>
                    <li>
                        <h3>Jalgpallimatš</h3>
                        <p>Sillamäe vs. Narva</p>
                        <span className={styles.place}>Narva staadion</span>
                        <span className={styles.time}>16:30 - 19:00</span>
                        <button>Rohkem</button>
                    </li>
                    <li>
                        <h3>Jalgpallimatš</h3>
                        <p>Sillamäe vs. Narva</p>
                        <span className={styles.place}>Narva staadion</span>
                        <span className={styles.time}>16:30 - 19:00</span>
                        <button>Rohkem</button>
                    </li>
                    <li>
                        <h3>Jalgpallimatš</h3>
                        <p>Sillamäe vs. Narva</p>
                        <span className={styles.place}>Narva staadion</span>
                        <span className={styles.time}>16:30 - 19:00</span>
                        <button>Rohkem</button>
                    </li>
                    <li>
                        <h3>Jalgpallimatš</h3>
                        <p>Sillamäe vs. Narva</p>
                        <span className={styles.place}>Narva staadion</span>
                        <span className={styles.time}>16:30 - 19:00</span>
                        <button>Rohkem</button>
                    </li>

                </ul>
                <button className={styles.more}>Vaata rohkem ▶</button>
            </div>
        </article>
    )
}

export default ScheduleOnMainPageComponent