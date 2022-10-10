import styles from '../../styles/NewsFacebookComponent.module.css'
import {useEffect, useState} from "react";
import {
    useGetLatestNewsQuery,
    useGetPriceListQuery,
    useRefetchLatestNewsMutation
} from "../../graphqlGenerated/graphql";
import languageStore from "../../Stores/LanguageStore";
import {observer} from "mobx-react-lite";

function NewsFacebookComponent(){
    const [latestNews, setLatestNews] = useState({message: "", created_time: (new Date).toString()})
    const { loading, error, data } = useGetLatestNewsQuery({onCompleted(data){
            setLatestNews({message: data.GetLatestNews.data?.message ?? '', created_time:data.GetLatestNews.data?.created_time ?? (new Date).toString()})
        }});
    const [estFacebookNews, setEstFacebookNews] = useState('Loading...')
    const [rusFacebookNews, setRusFacebookNews] = useState('Loading...')
    const [refeatch, {}] = useRefetchLatestNewsMutation({onCompleted(data){
        // console.log(data)
        }});
    useEffect(() => {
        refeatch().then(r => console.log(r))
    }, [])

    useEffect(() => {
        if(!loading){
            nativeLang(latestNews.message)
        }
    }, [loading])
    function nativeLang(str: string){
        let estStr = ''
        let ruStr = ''
        for(let i = 0; i < str.length; i++){
            if ((/^([а-яА-ЯёЁ]*)$/.test(str[i]))){
                ruStr += str.slice(i)
                break
            }
            estStr += str[i]
        }
        console.log(estStr)
        console.log(ruStr)
        console.log(languageStore.currentLanguage.isEst)

        setEstFacebookNews(estStr)
        setRusFacebookNews(ruStr)
    }

    return(
        <article className={styles.NewsFacebook} data-aos="fade-left">
            <h2>{languageStore.currentLanguage.isEst ? "VIIMASED UUDISED" : "ПОСЛЕДНИЕ НОВОСТИ"}</h2>
            <p>{languageStore.currentLanguage.isEst ? estFacebookNews : rusFacebookNews}</p>

            <div>
                <span>{(new Date(latestNews.created_time)).toLocaleDateString()}</span>
                <a href={"https://www.facebook.com/spordikompleksKalev"}>Vaata rohkem ▶</a>
            </div>
        </article>
    )
}

export default observer(NewsFacebookComponent)