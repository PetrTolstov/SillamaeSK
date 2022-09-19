import './mainrect.module.css'
import styles from './mainrect.module.css'

function MainRect({isEst}: {isEst: boolean}) {
    
    return ( 
        <div className={styles.mainrectContainer}>
            <div className={styles.mainrect}>
                <h1 className={styles.h1}>
                    {isEst ? "SILLAMÄE SPORDIKOMPLEKS KALEV" : "САЙТ СПОРТИВНОГО КОМПЛЕКСА"}<br/> { isEst ? "KODULEHT ON VALMIMISEL" : "КАЛЕВ В РАЗРАБОТКЕ"}!
                </h1>
                <a className={styles.link} href="https://www.facebook.com/spordikompleksKalev" target="_blank" rel="noreferrer">
                    <p className={styles.defText}>{isEst ? "Jälgi meid Facebookis" : "Следите за нами на фейсбуке"}:</p>
                    <p>@SpordikompleksKalev</p>
                </a>
                <div className={styles.contactsContainer}>
                    <div className={styles.contactsHeader}>{isEst ? "Meie kontaktid" : "Наши контакты"}: </div>
                    <div className={styles.contacts}>
                        <div>
                            <p>{isEst ? "Aadress" : "Адрес"}:</p>
                            <p>{isEst ? "Kesk 30, Sillamäe, 40232" : "Кеск 30, Силламяэ, 40232"}</p>
                        </div>
                        <div>
                            <p>{isEst ? "E-post" : "Э-почта"}:</p>
                            <p>info@sillamaesk.ee</p>
                        </div>
                        <div>
                            <p>{isEst ? "Telefonid" : "Телефоны"}:</p>
                            <p>3924245, 3974077</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default MainRect; 