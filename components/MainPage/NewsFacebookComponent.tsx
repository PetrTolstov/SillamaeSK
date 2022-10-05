import styles from '../../styles/NewsFacebookComponent.module.css'
import {useEffect, useState} from "react";
import {
    useGetLatestNewsQuery,
    useGetPriceListQuery,
    useRefetchLatestNewsMutation
} from "../../graphqlGenerated/graphql";

function NewsFacebookComponent(){
    const [latestNews, setLatestNews] = useState({message: "", created_time: (new Date).toString()})
    const { loading, error, data } = useGetLatestNewsQuery({onCompleted(data){
            setLatestNews({message: data.GetLatestNews.data?.message ?? '', created_time:data.GetLatestNews.data?.created_time ?? (new Date).toString()})
        }});

    const [refeatch, {}] = useRefetchLatestNewsMutation({onCompleted(data){
        // console.log(data)
        }});
    useEffect(() => {
        refeatch().then(r => console.log(r))
    }, [])

    return(
        <article className={styles.NewsFacebook}>
            <h2>VIIMASED UUDISED</h2>
            <p>{loading ? "loading..." : latestNews.message}</p>
            <span>{(new Date(latestNews.created_time)).toLocaleDateString()}</span>
            <a href={"https://www.facebook.com/spordikompleksKalev"}>Vaata rohkem ▶</a>
        </article>
    )
}

export default NewsFacebookComponent