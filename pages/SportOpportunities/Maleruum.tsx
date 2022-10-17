import type { NextPage } from "next";
import Layout from "../../components/Layout";
import AppIsBeingBuilt from "../../components/Temporary/AppIsBeingBuilt";
import LayoutSportComplexOpportunities from "./LayoutSportComplexOpportunities";
import styles from "../../styles/LayoutsForSidePages.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { LINK } from "../../config/constants";
import { SimplePage, useGetPageConfigQuery, useGetSimplePagesQuery } from "../../graphqlGenerated/graphql";
import LanguageStore from "../../Stores/LanguageStore";
import languageStore from "../../Stores/LanguageStore";
import { observer } from "mobx-react-lite";
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";

const Maleruum: NextPage = () => {
	const page = "Maleruum";
	const [imgFile, setImgFile] = useState("");
	// @ts-ignore
	const [currentPage, setCurrentPage] = useState<SimplePage>([]);
	const { loading, data, error } = useGetSimplePagesQuery({
		variables: { type: 1 },
		onCompleted(data) {
			setCurrentPage(data.GetSimplePages![7] as SimplePage);
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
			setImgFile(`${LINK}/public/images/${page}/${res.data[0]}`);
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
					<img src={imgFile} className={styles.titlePhoto} />
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
		</LayoutSportComplexOpportunities>
	);
};

export default observer(Maleruum);
