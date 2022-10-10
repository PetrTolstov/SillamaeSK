import styles from '../../styles/GoogleMapComponent.module.css'

function GoogleMapComponent(){
    return(
        <article className={styles.googleMap}  data-aos="fade-left">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8125.964319049981!2d27.7719723!3d59.391519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe76ae0358a405ac4!2sSpordikompleks%20Kalev!5e0!3m2!1sru!2see!4v1664868027671!5m2!1sru!2see"
                width="100%" height="350" loading="lazy"
                allow="fullscreen"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </article>
    )
}

export default GoogleMapComponent


