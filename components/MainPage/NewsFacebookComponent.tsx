import styles from '../../styles/NewsFacebookComponent.module.css'
import {useState} from "react";


function NewsFacebookComponent(){
    const [latestNews, setLatestNews] = useState({message: "", created_time: (new Date).toString()})

    fetch('https://graph.facebook.com/v15.0/spordikompleksKalev/feed?access_token=EAAVrZCSeKcAIBAP6QoLv91fVHT7VfbItJIkXIwngjcFFN6n1i7WZAdPkrA4KVD6thcJIhujXtY9q4ZAexENDMZBnJMOk7hOThR3tpP9a7sDZCLFU3LE4YIJBBOMDCEAyds04O2xIHcjHPIKqgU9BZAScLPJ0Kl1IRmG91ZBUyeTtN2N7ARyzqfLfoDL434DMl0ZD')
        .then(response => response.json())
        .then(data => {
            if(data.data){
                for (let el of data.data){
                    if(el.message){
                       setLatestNews(el)
                        break
                    }
                }     }
        });
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