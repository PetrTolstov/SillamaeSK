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

const Home: NextPage = () => {


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
						imageList={[
							"https://lola.land/wp-content/uploads/2019/11/LOLA-SPG-sports-park-genk-landscape-design-strip-list-antea-scaled.jpg",
						]}
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
