import styles from '../../styles/NewsFacebookComponent.module.css'
import {useState} from "react";


function NewsFacebookComponent(){
    const [latestNews, setLatestNews] = useState({message: "", created_time: (new Date).toString()})


    fetch('https://graph.facebook.com/v15.0/spordikompleksKalev/feed?access_token=EAAIpjZCKeTPABAMzJmSbO1SluWqc14HaGpObWDPF7BVY11ndjWoZCsDtkppWWZClKFhZCjV99Ue88D2729P3jGxEk30JXQTIbCk2O8ZChjZBG4ZAvZBYG4YWJWftvrEggxqoHZBcyGc3ncyLypMIHsvjE3Y36vB6A5gL9fw7pCQlXRluXWvK7hCYL')
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