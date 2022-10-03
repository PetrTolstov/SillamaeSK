import {ReactElement, useState} from "react";
import { AdminLayout } from ".";
import { NextPageWithLayout } from "../_app";
import { TimeTableEditting } from "../../components/AdminComponents/TimeTableEditting";
import { SportOpportunitesDesEdititng } from "../../components/AdminComponents/SportOpportunitesDesEdititng";
import AdminStore from "../../Stores/AdminStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { GoBackPage } from "../../components/AdminComponents/GoBackPage";
import ImageForm from "../../components/AdminComponents/UploadFile";
import {ButtonAdmin} from "../../components/AdminComponents/ButtonAdmin";

const MainPageAdmin: NextPageWithLayout = () => {
	const [isShow, setIsShow] = useState(false)

	if (AdminStore.userInfo.isLoggedIn) {
		return (
			<div style={{ paddingBottom: "50px" }}>
				<h1>Avaleht</h1>
				<TimeTableEditting />
				<SportOpportunitesDesEdititng />
				<h3>Lisa foto</h3>
				<ImageForm page={"Karusel"} show={isShow} closeModal={() => {setIsShow(false)}}/>
				<ButtonAdmin border label={'Lisa'} action={() => {setIsShow(true)}}/>

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
