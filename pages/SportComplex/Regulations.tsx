import type { NextPage } from 'next'
import LayoutSportComplex from "./LayoutSportComplex";
import {inspect} from "util";
import styles from '../../styles/LayoutsForSidePages.module.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {LINK} from "../../config/constants";
import {SimplePage, useGetPageConfigQuery, useGetSimplePagesQuery} from "../../graphqlGenerated/graphql";
import {observer} from "mobx-react-lite";
import languageStore from "../../Stores/LanguageStore";
import AppIsBeingBuilt from "../../components/Temporary/AppIsBeingBuilt";
import LanguageStore from "../../Stores/LanguageStore";


const Regulations: NextPage = () => {
    const page = 'Kodukord'
    const [imgFile, setImgFile] = useState('');
    const [ title, setTitle ] = useState("");
    const [ text, setText ] = useState("")
    // @ts-ignore
    const [ currentPage, setCurrentPage ] = useState<SimplePage>([])
    const {loading, data, error} = useGetSimplePagesQuery({variables: {type: 0}, onCompleted(data) {
        setCurrentPage(data.GetSimplePages![1] as SimplePage);
        }})



    useEffect(() => {
        (async () => {
            const res = await axios.get(LINK + "/getPhoto", {
                headers: {
                    'optional': page
                }
            });
            console.log(res.data)
            setImgFile(`${LINK}/public/images/${page}/${res.data[0]}`)
        })()


    }, [])


    useEffect(()=>{
        console.log(data?.GetSimplePages)
    }, [loading])


    const { data: configData } = useGetPageConfigQuery({
        variables: {
            pageName: page,
        },
    });

    return (
        <LayoutSportComplex>
            {configData?.GetPageConfig?.showBanner ? (
                <AppIsBeingBuilt isEst={LanguageStore.currentLanguage.isEst} />
            ) : (
            <>

                <img src={imgFile} className={styles.titlePhoto}/>

                {loading ? <p>Loading</p> :
                    <>
                        <h2>{languageStore.currentLanguage.isEst ? currentPage?.title?.EST  : currentPage?.title?.RUS}</h2>
                        <p style={{whiteSpace : "pre-line"}}>{languageStore.currentLanguage.isEst ? currentPage?.text?.EST  : currentPage?.text?.RUS}</p>

                    </>
                }
                </>
                )}
        </LayoutSportComplex>
    )
}

export default observer(Regulations)