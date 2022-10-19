import type { NextPage } from "next";
import styles from '../styles/PriceList.module.css'
import Layout from "../components/Layout";
import PriceListTableComponent from "../components/PriceList/PriceListTableComponent";
import ImageWithSchedule from "../components/MainPage/ImageWithSchedule";
import { useGetPageConfigQuery } from "../graphqlGenerated/graphql";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";
import LanguageStore from "../Stores/LanguageStore";
import { observer } from "mobx-react-lite";
import LanguageStoreV2 from "../Stores/LanguageStoreV2";
import CarouselComponent from "../components/MainPage/CarouselComponent";
import {useEffect, useState} from "react";
import axios from "axios";
import {LINK} from "../config/constants";

const PriceList: NextPage = () => {
	const page = "Karusel";
	const [imgFile, setImgFile] = useState([]);
	useEffect(() => {
		(async () => {
			const res = await axios.get(LINK + "/getPhoto", {
				headers: {
					optional: page,
				},
			});
			// console.log(res.data)
			let list = res.data.map((el: any) => {
				return `${LINK}/public/images/${page}/${el}`
			})

			setImgFile(list);
		})();
	}, []);
    const { data: configData } = useGetPageConfigQuery({
		variables: {
			pageName: "PriceList",
		},
	});
	return (
		<Layout>
            {configData?.GetPageConfig?.showBanner ? <AppIsBeingBuilt isEst={LanguageStore.currentLanguage.isEst} /> : <main className={styles.main}>
            <CarouselComponent roundedCorners={true} imageList={imgFile} />
				<div className={styles.container}  data-aos="fade-up" data-aos-once={'true'}>
					<h1 className={styles.h1}>{LanguageStoreV2.header.tabs.PriceListPageTab[LanguageStoreV2.currentLanguage]}</h1>
					<PriceListTableComponent/>
				</div>
			</main>}
		</Layout>
	);
};

export default observer(PriceList);
