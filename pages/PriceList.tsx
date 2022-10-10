import type { NextPage } from "next";
import styles from '../styles/PriceList.module.css'
import Layout from "../components/Layout";
import PriceListTableComponent from "../components/PriceList/PriceListTableComponent";
import ImageWithSchedule from "../components/MainPage/ImageWithSchedule";

const PriceList: NextPage = () => {
	return (
		<Layout>
			<main className={styles.main}>
				<ImageWithSchedule/>
				<div className={styles.container}  data-aos="fade-up">
					<h1 className={styles.h1}>Hinnakiri</h1>
					<PriceListTableComponent/>
				</div>
			</main>
		</Layout>
	);
};

export default PriceList;
