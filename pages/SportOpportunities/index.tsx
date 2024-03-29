import type { NextPage } from "next";
import LayoutSportComplexOpportunities from "./LayoutSportComplexOpportunities";
import styles from "../../styles/LayoutsForSidePages.module.css";
import Layout from "../../components/Layout";
import AppIsBeingBuilt from "../../components/Temporary/AppIsBeingBuilt";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { LINK } from "../../config/constants";
import languageStore from "../../Stores/LanguageStore";
import { Observer, observer } from "mobx-react-lite";
import {
	GetObjectTimeTableDocument,
	ObjectTimeTable,
	SimplePage,
	useGetObjectTimeTableLazyQuery,
	useGetPageConfigQuery,
	useGetSimplePagesQuery,
	useSetObjectTimeTableMutation,
} from "../../graphqlGenerated/graphql";
import LanguageStore from "../../Stores/LanguageStore";
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";
import CarouselComponent from "../../components/MainPage/CarouselComponent";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import TimeTableAdmin, {
	extendedEvent,
	padTo2Digits,
	simplifiedObjectTimeTable,
	simplifiedObjectTimeTableNonNullable,
	weekday,
} from "../../components/AdminComponents/SimplePage/TimeTableAdmin";
import dynamic from "next/dynamic";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const TimeTable = dynamic(
	() => {
		return import("../../components/AdminComponents/SimplePage/TimeTableAdmin");
	},
	{ ssr: false }
);
const Index: NextPage = () => {
	//PDF
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	// @ts-ignore
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	//PDF
	const page = "Ujula";
	const [imgFile, setImgFile] = useState([]);
	// @ts-ignore
	const [currentPage, setCurrentPage] = useState<SimplePage>([]);
	const { loading, data, error } = useGetSimplePagesQuery({
		variables: { type: 1 },
		onCompleted(data) {
			setCurrentPage(data.GetSimplePages![0] as SimplePage);
		},
	});
	useEffect(() => {
		(async () => {
			const res = await axios.get(LINK + "/getPhoto", {
				headers: {
					optional: page,
				},
			});
			let list = res.data.map((el: string) => {
				return `${LINK}/public/images/${page}/${el}`;
			});

			setImgFile(list);
		})();
	}, []);

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
			<Document
				file={`${LINK}/public/images/pdf/${page}/s.pdf`}
				error={""}
				onLoadSuccess={onDocumentLoadSuccess}
				renderMode={"svg"}>
				<Page pageNumber={1} className={styles.pdfPage} error={""} />
				<Page pageNumber={2} className={styles.pdfPage} error={""} />
				<Page pageNumber={3} className={styles.pdfPage} error={""} />
				<Page pageNumber={4} className={styles.pdfPage} error={""} />
				<Page pageNumber={5} className={styles.pdfPage} error={""} />
				<Page pageNumber={6} className={styles.pdfPage} error={""} />
				<Page pageNumber={7} className={styles.pdfPage} error={""} />
				<Page pageNumber={8} className={styles.pdfPage} error={""} />
				<Page pageNumber={9} className={styles.pdfPage} error={""} />
				<Page pageNumber={10} className={styles.pdfPage} error={""} />
				<Page pageNumber={11} className={styles.pdfPage} error={""} />
				<Page pageNumber={12} className={styles.pdfPage} error={""} />
				<Page pageNumber={13} className={styles.pdfPage} error={""} />
				<Page pageNumber={14} className={styles.pdfPage} error={""} />
				<Page pageNumber={15} className={styles.pdfPage} error={""} />
				<Page pageNumber={16} className={styles.pdfPage} error={""} />
				<Page pageNumber={17} className={styles.pdfPage} error={""} />
				<Page pageNumber={18} className={styles.pdfPage} error={""} />
				<Page pageNumber={19} className={styles.pdfPage} error={""} />
				<Page pageNumber={20} className={styles.pdfPage} error={""} />
				<Page pageNumber={21} className={styles.pdfPage} error={""} />
				<Page pageNumber={22} className={styles.pdfPage} error={""} />
				<Page pageNumber={23} className={styles.pdfPage} error={""} />
				<Page pageNumber={24} className={styles.pdfPage} error={""} />
				<Page pageNumber={25} className={styles.pdfPage} error={""} />
			</Document>
            <div style={{width: "100%"}}>
                <TimeTable pageName={"Ujula"} />
            </div>
			
		</LayoutSportComplexOpportunities>
	);
};

export default observer(Index);
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
