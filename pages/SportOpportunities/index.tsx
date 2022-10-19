import type { NextPage } from 'next'
import LayoutSportComplexOpportunities from "./LayoutSportComplexOpportunities";
import styles from '../../styles/LayoutsForSidePages.module.css'
import Layout from "../../components/Layout";
import AppIsBeingBuilt from "../../components/Temporary/AppIsBeingBuilt";
import {useEffect, useState} from "react";
import axios from "axios";
import {LINK} from "../../config/constants";
import languageStore from "../../Stores/LanguageStore";
import {Observer, observer} from "mobx-react-lite";
import {SimplePage, useGetPageConfigQuery, useGetSimplePagesQuery} from "../../graphqlGenerated/graphql";
import LanguageStore from "../../Stores/LanguageStore";
import LanguageStoreV2 from '../../Stores/LanguageStoreV2';
import CarouselComponent from '../../components/MainPage/CarouselComponent';


const Index: NextPage = () => {
    const page = 'Ujula'
    const [imgFile, setImgFile] = useState([]);
// @ts-ignore
    const [ currentPage, setCurrentPage ] = useState<SimplePage>([])
    const {loading, data, error} = useGetSimplePagesQuery({variables: {type: 1}, onCompleted(data) {
            setCurrentPage(data.GetSimplePages![0] as SimplePage);
        }})
    useEffect(() => {
        (async () => {
            const res = await axios.get(LINK + "/getPhoto", {
                headers: {
                    'optional': page
                }
            });
            let list = res.data.map((el: string) => {
                return `${LINK}/public/images/${page}/${el}`
            })

            setImgFile(list);
        })()
    }, [])

    const { data: configData } = useGetPageConfigQuery({
        variables: {
            pageName: page,
        },
    });

    return (
        <LayoutSportComplexOpportunities>
            {configData?.GetPageConfig?.showBanner ? (
                <AppIsBeingBuilt isEst={LanguageStore.currentLanguage.isEst} />
            ) : (
            <>
                <CarouselComponent roundedCorners={false} imageList={imgFile} />
                {loading ? <p>Loading</p> :
                    <>
                        <h2>
                            {LanguageStoreV2.currentLanguage == "ENG"
									? currentPage.title?.ENG
									: LanguageStoreV2.currentLanguage == "EST"
									? currentPage.title?.EST
									: currentPage.title?.RUS}
							</h2>
							<p style={{ whiteSpace: "pre-line" }}>
								{LanguageStoreV2.currentLanguage == "ENG"
									? currentPage.text?.ENG
									: LanguageStoreV2.currentLanguage == "EST"
									? currentPage.text?.EST
									: currentPage.text?.RUS}
							</p>
                    </>
                }
            </>
            )}
        </LayoutSportComplexOpportunities>
    )
}

export default observer(Index)
/*
<LayoutSportComplexOpportunities>
            <>
                <img src={imgFile} className={styles.titlePhoto}/>
                <h2>Ujula</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non sed id cras vulputate nunc eu. Tristique sollicitudin faucibus purus viverra cum. Sed etiam mauris, in sollicitudin metus orci, sed amet. Integer fringilla a enim morbi cras.
                    Vivamus commodo cursus viverra lectus et. Feugiat urna condimentum elit nec aliquet pharetra porttitor. Nulla volutpat pellentesque mauris volutpat morbi. Enim pharetra enim quis at aliquet pharetra eros. Porttitor sed morbi tortor aliquam. A arcu.</p>
            </>
        </LayoutSportComplexOpportunities>
 */