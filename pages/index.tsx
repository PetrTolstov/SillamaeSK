import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import HeaderComponent from "../components/HeaderComponent";
import ImageWithSchedule from "../components/MainPage/ImageWithSchedule";
import DescriptionNearNewsComponent from "../components/MainPage/DescriptionNearNewsComponent";
import NewsFacebookComponent from "../components/MainPage/NewsFacebookComponent";
import SideNavComponent from "../components/MainPage/SideNavComponent";
import ScheduleOnMainPageComponent from "../components/MainPage/ScheduleOnMainPageComponent";
import Layout from "../components/Layout";

import { useEffect, useState } from "react";
import { useGetPageConfigQuery } from "../graphqlGenerated/graphql";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";
import { observer } from "mobx-react-lite";
import LanguageStore from "../Stores/LanguageStore";
import CarouselComponent from "../components/MainPage/CarouselComponent";
import axios from "axios";
import {LINK} from "../config/constants";

const Home: NextPage = () => {
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
			pageName: "MainPage",
		},
	});

	return (
		<Layout>
			{configData?.GetPageConfig?.showBanner ? (
				<AppIsBeingBuilt isEst={LanguageStore.currentLanguage.isEst} />
			) : (
				<>
				<main className={styles.main}>
					<CarouselComponent
						showSchedule
						imageList={imgFile}
					/>
					{/* <ImageWithSchedule isMain={true} /> */}

					<div className={styles.textAndNewsFrame}>
						<DescriptionNearNewsComponent />
						<NewsFacebookComponent />
					</div>
					<SideNavComponent />
				</main>
				<ScheduleOnMainPageComponent/>
				</>
			)}
		</Layout>
	);
};

export default observer(Home);

//<SideNavComponent/>
