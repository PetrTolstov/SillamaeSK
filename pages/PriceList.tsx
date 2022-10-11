import type { NextPage } from "next";
import styles from '../styles/PriceList.module.css'
import Layout from "../components/Layout";
import PriceListTableComponent from "../components/PriceList/PriceListTableComponent";
import ImageWithSchedule from "../components/MainPage/ImageWithSchedule";
import { useGetPageConfigQuery } from "../graphqlGenerated/graphql";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";
import LanguageStore from "../Stores/LanguageStore";
import { observer } from "mobx-react-lite";

const PriceList: NextPage = () => {
    const { data: configData } = useGetPageConfigQuery({
		variables: {
			pageName: "PriceList",
		},
	});
	return (
		<Layout>
            {configData?.GetPageConfig?.showBanner ? <AppIsBeingBuilt isEst={LanguageStore.currentLanguage.isEst} /> : <main className={styles.main}>
				<ImageWithSchedule/>
				<div className={styles.container}  data-aos="fade-up" data-aos-once={'true'}>
					<h1 className={styles.h1}>Hinnakiri</h1>
					<PriceListTableComponent/>
				</div>
			</main>}
		</Layout>
	);
};

export default observer(PriceList);
