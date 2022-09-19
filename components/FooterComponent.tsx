import styles from '../styles/FooterComponent.module.css'

function FooterComponent(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footerInformation}>
                <div className={styles.containerInformationFooter}>
                    <h3>Võta ühendust</h3>
                    <span>+372 5487 4236</span>
                    <span>example@gmail.com</span>
                </div>
                <div className={styles.containerInformationFooter}>
                    <h3>Spordikompleks kalev</h3>
                    <span>Võta ühendust</span>
                    <span>Spordikompleks Kalev</span>
                    <span>Külasta meid</span>
                </div>
                <div className={styles.containerInformationFooter}>
                    <h3>Külasta meid</h3>
                    <div className={styles.containerScheduleFooter}>
                        <div>
                            <span>Spordikompleks:</span>
                            <span>E-R: 08.00-22.00</span>
                            <span>L-P: 09.00-21.00</span>
                        </div>
                        <div>
                            <span>Ujula:</span>
                            <span>E-R: 07.00-21.00</span>
                            <span>L-P: 09.00-17.00</span>
                        </div>
                    </div>
                </div>
            </div>
            <a>Jälgi meid sotsiaalmeedias </a>
        </footer>
    )
}

export default FooterComponent