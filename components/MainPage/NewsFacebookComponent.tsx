import styles from '../../styles/NewsFacebookComponent.module.css'
import {useState} from "react";

function NewsFacebookComponent(){
    const [latestNews, setLatestNews] = useState({message: "", created_time: (new Date).toString()})

    return(
        <article className={styles.NewsFacebook}>
            <h2>Viimased uudised</h2>
            <p>{latestNews.message}</p>
            <span>{(new Date(latestNews.created_time)).toLocaleDateString()}</span>
            <a href={"https://www.facebook.com/spordikompleksKalev"}>Vaata rohkem ▶</a>
        </article>
    )
}

export default NewsFacebookComponent