import type { NextPage } from "next";

import styles from "../styles/Home.module.css";
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
import LanguageStoreV2 from "../Stores/LanguageStoreV2";

const Home: NextPage = () => {
	const page = "Karusel";
	const [imgFile, setImgFile] = useState([]);
	const labels = {
		EST: ['Ujula', 'Staadion', 'Kunstmurustaadion', 'Suur saal', 'Väike saal', 'Fitnessi saal', 'Jõusaal', 'Maleruum', 'Kergejõustikumaneež'],
		ENG: ['Swimming pool', 'Stadium', 'Turf', 'Big hall', 'Small hall', 'Fitness hall', 'Gym', 'Chess room', 'Athletics'],
		RUS: ['Бассейн', 'Стадион', 'Стадион с искусственным покрытием', 'Большой зал', 'Малый залl', 'Фитнес зал', 'Тренажерный зал', 'Шахматная комната', 'Легкоатлетический манеж'],
	}

	const paths = ['/SportOpportunities', '/SportOpportunities/Staadion', '/SportOpportunities/Kunstmurustaadion', '/SportOpportunities/SuurSaal', '/SportOpportunities/VaikeSaal', '/SportOpportunities/FitnessiSaal', '/SportOpportunities/Jousaal', '/SportOpportunities/Maleruum', '/SportOpportunities/Kergejoustikumaneez']

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
					<SideNavComponent labels={labels[LanguageStoreV2.currentLanguage]} paths={paths}/>
				</main>
				<ScheduleOnMainPageComponent/>
				</>
			)}
		</Layout>
	);
};

export default observer(Home);

//<SideNavComponent/>
