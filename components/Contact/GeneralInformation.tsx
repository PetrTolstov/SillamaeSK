import styles from '../../styles/GeneralInformation.module.css'

function GeneralInformation(){
    return(
        <article className={styles.generalInformation}>
            <h2>Kontakt</h2>
            <h3>Aadress:</h3>
            <p>Kesk 30, Sillamäe, 40232 Ida-Viru maakond</p>
            <h3>Telefon:</h3>
            <p>+372 392 42 45</p>
            <h3>E-mail:</h3>
            <p>info@sillamaesk.ee</p>
        </article>
    )
}

export default GeneralInformation