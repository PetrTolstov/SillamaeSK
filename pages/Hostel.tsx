import type { NextPage } from "next";
import styles from "../styles/Hostel.module.css";
import Layout from "../components/Layout";
import AboutHostel from "../components/Hostel/AboutHostel";
import HostelRooms from "../components/Hostel/HostelRooms";
import Facilities from "../components/Hostel/Facilities";
import { useGetPageConfigQuery } from "../graphqlGenerated/graphql";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";
import LanguageStore from "../Stores/LanguageStore";
import { observer } from "mobx-react-lite";

const Hostel: NextPage = () => {
	const { data: configData, loading } = useGetPageConfigQuery({
		variables: {
			pageName: "Hostel",
		}, onCompleted(data) {
            // console.log(data)
        },
	});
	return (
		<Layout>
			{loading ? <p>Loading</p> : configData?.GetPageConfig?.showBanner ? (
				<AppIsBeingBuilt isEst={LanguageStore.currentLanguage.isEst} />
			) : (
				<main className={styles.main}>
					<AboutHostel />
					<HostelRooms />
					<Facilities />
				</main>
			)}
		</Layout>
	);
};

export default observer(Hostel);
