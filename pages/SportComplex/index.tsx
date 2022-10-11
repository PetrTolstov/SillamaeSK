import type { NextPage } from 'next'
import LayoutSportComplex from "./LayoutSportComplex";
import Layout from "../../components/Layout";
import AppIsBeingBuilt from "../../components/Temporary/AppIsBeingBuilt";
import {useEffect, useState} from "react";
import axios from "axios";
import {LINK} from "../../config/constants";
import languageStore from "../../Stores/LanguageStore";
import {inspect} from "util";
import styles from '../../styles/LayoutsForSidePages.module.css'
import LanguageStore from "../../Stores/LanguageStore";
import {SimplePage, useGetPageConfigQuery, useGetSimplePagesQuery} from "../../graphqlGenerated/graphql";


const SportComplex: NextPage = () => {
    const page = 'Arengukava'
    const [imgFile, setImgFile] = useState('');
    // @ts-ignore
    const [ currentPage, setCurrentPage ] = useState<SimplePage>([])
    const {loading, data, error} = useGetSimplePagesQuery({variables: {type: 0}, onCompleted(data) {
            setCurrentPage(data.GetSimplePages![0] as SimplePage);
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

export default SportComplex
/*

 */