import styles from '../../styles/NewsFacebookComponent.module.css'

function NewsFacebookComponent(){
    return(
        <article className={styles.NewsFacebook}>
            <h2>Viimased uudised</h2>
            <p>Neljapäeval on maraton...</p>
            <span>22.05.2022</span>
            <button>Vaata rohkem ▶</button>
        </article>
    )
}

export default NewsFacebookComponent