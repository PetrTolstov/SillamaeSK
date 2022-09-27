import styles from '../../styles/NewsFacebookComponent.module.css'
import {useState} from "react";


function NewsFacebookComponent(){
    const [latestNews, setLatestNews] = useState({message: "", created_time: (new Date).toString()})


    fetch('https://graph.facebook.com/v15.0/spordikompleksKalev/feed?access_token=EAAIpjZCKeTPABAFSjJpwhyn071jLWZCDewHZCcztOasoeZA9TJpZCWpbp5EZBJKp3i6pDxrnC0y5z0FtEmXvq1iNmwZCNgmtZBOTecV33LOo9Q7VXuKSEI7C56195iPNvxsGUvC9UmzoPtqmXZBIipiHk8BU08JdFXwAzUVNu3yuJN4xLcyAqmGmITzijKZB4DgnZAIjsv7PmSlRjUZBUeF28u0b')
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