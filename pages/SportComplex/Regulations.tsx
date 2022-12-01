import type { NextPage } from "next";
import LayoutSportComplex from "./LayoutSportComplex";
import { inspect } from "util";
import styles from "../../styles/LayoutsForSidePages.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { LINK } from "../../config/constants";
import { SimplePage, useGetPageConfigQuery, useGetSimplePagesQuery } from "../../graphqlGenerated/graphql";
import { observer } from "mobx-react-lite";
import AppIsBeingBuilt from "../../components/Temporary/AppIsBeingBuilt";
import LanguageStore from "../../Stores/LanguageStore";
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";
import CarouselComponent from "../../components/MainPage/CarouselComponent";
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Regulations: NextPage = () => {
	//PDF
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	// @ts-ignore
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	//PDF
	const page = "Kodukord";
	const [imgFile, setImgFile] = useState([]);
	const [title, setTitle] = useState("");
	const [text, setText] = useState("");
	// @ts-ignore
	const [currentPage, setCurrentPage] = useState<SimplePage>([]);
	const { loading, data, error } = useGetSimplePagesQuery({
		variables: { type: 0 },
		onCompleted(data) {
			setCurrentPage(data.GetSimplePages![1] as SimplePage);
		},
	});

	useEffect(() => {
		(async () => {
			const res = await axios.get(LINK + "/getPhoto", {
				headers: {
					optional: page,
				},
			});
			console.log(res.data);
			let list = res.data.map((el: string) => {
				return `${LINK}/public/images/${page}/${el}`
			})


			setImgFile(list);
		})();
	}, []);

	useEffect(() => {
		console.log(data?.GetSimplePages);
	}, [loading]);

	const { data: configData } = useGetPageConfigQuery({
		variables: {
			pageName: page,
		},
	});

	return (
        <div>
            
		<LayoutSportComplex>
			{configData?.GetPageConfig?.showBanner ? (
				<AppIsBeingBuilt isEst={LanguageStore.currentLanguage.isEst} />
			) : (
				<>
                    
					<CarouselComponent roundedCorners={false} imageList={imgFile} />

					{loading ? (
						<p>Loading</p>
					) : (
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
					)}
				</>
			)}
			<Document file={`${LINK}/public/images/pdf/${page}/s.pdf`} error={''} onLoadSuccess={onDocumentLoadSuccess} renderMode={"svg"}>
				<Page pageNumber={pageNumber} className={styles.pdfPage} error={''}/>
			</Document>
		</LayoutSportComplex>
        </div>
	);
};

export default observer(Regulations);
