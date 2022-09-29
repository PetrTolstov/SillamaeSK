import styles from '../../styles/GoogleMapComponent.module.css'

function GoogleMapComponent(){
    return(
        <article className={styles.googleMap}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.5520538732217!2d27.770130379132848!3d59.391470181093666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469441e3a5d05de7%3A0x765c4a10c3eff05c!2sSillam%C3%A4e%20Spordiklubi%20Kalev!5e0!3m2!1sru!2see!4v1664410449847!5m2!1sru!2see"
                width="100%" height="350" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </article>
    )
}

export default GoogleMapComponent


