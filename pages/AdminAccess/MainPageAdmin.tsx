import { ReactElement } from "react";
import { AdminLayout } from ".";
import { NextPageWithLayout } from "../_app";
import { TimeTableEditting } from "../../components/AdminComponents/TimeTableEditting";
import { SportOpportunitesDesEdititng } from "../../components/AdminComponents/SportOpportunitesDesEdititng";
import AdminStore from "../../Stores/AdminStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { GoBackPage } from "../../components/AdminComponents/GoBackPage";

const MainPageAdmin: NextPageWithLayout = () => {
	if (AdminStore.userInfo.isLoggedIn) {
		return (
			<div style={{ paddingBottom: "50px" }}>
				<h1>Avaleht</h1>
				<TimeTableEditting />
				<SportOpportunitesDesEdititng />
			</div>
		);
	} else {
		return (
			<GoBackPage />
		);
	}
};

MainPageAdmin.getLayout = function getLayout(MainPage: ReactElement) {
	return (
		<>
			<AdminLayout>{MainPage}</AdminLayout>
		</>
	);
};

export default observer(MainPageAdmin);
