import type { NextPage } from 'next'
import Layout from "../../components/Layout";
import AppIsBeingBuilt from "../../components/Temporary/AppIsBeingBuilt";
import LayoutSportComplexOpportunities from "./LayoutSportComplexOpportunities";
import styles from "../../styles/LayoutsForSidePages.module.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {LINK} from "../../config/constants";
import {SimplePage, useGetPageConfigQuery, useGetSimplePagesQuery} from "../../graphqlGenerated/graphql";
import LanguageStore from "../../Stores/LanguageStore";
import languageStore from "../../Stores/LanguageStore";
import LanguageStoreV2 from '../../Stores/LanguageStoreV2';
import { observer } from 'mobx-react-lite';
import CarouselComponent from '../../components/MainPage/CarouselComponent';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const VaikeSaal: NextPage = () => {
    //PDF
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    // @ts-ignore
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    //PDF
    const page = 'VaikeSaal'
    const [imgFile, setImgFile] = useState([]);
// @ts-ignore
    const [ currentPage, setCurrentPage ] = useState<SimplePage>([])
    const {loading, data, error} = useGetSimplePagesQuery({variables: {type: 1}, onCompleted(data) {
            setCurrentPage(data.GetSimplePages![4] as SimplePage);
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
            pageName: "Väike saal",
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
                }</>  )}
            <Document file={`${LINK}/public/images/pdf/${page}/s.pdf`} error={''} onLoadSuccess={onDocumentLoadSuccess} renderMode={"svg"}>
                <Page pageNumber={pageNumber} className={styles.pdfPage} error={''}/>
            </Document>
        </LayoutSportComplexOpportunities>
    )
}

export default observer(VaikeSaal)
