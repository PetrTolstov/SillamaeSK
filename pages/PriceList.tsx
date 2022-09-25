import type { NextPage } from "next";
import styles from '../styles/PriceList.module.css'
import Layout from "../components/Layout";
import PriceListTableComponent from "../components/PriceList/PriceListTableComponent";

const PriceList: NextPage = () => {
	return (
		<Layout>
			<main className={styles.main}>
				<div className={styles.container}>
					<h1 className={styles.h1}>Hinnakiri</h1>
					<PriceListTableComponent/>
				</div>

			</main>
		</Layout>
	);
};

export default PriceList;
