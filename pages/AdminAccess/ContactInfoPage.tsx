import { observer } from "mobx-react-lite";
import { ReactElement } from "react";
import { AdminLayout } from ".";
import { GeneralContactInfoEditting } from "../../components/AdminComponents/GeneralContactInfoEditting";
import { PersonalContactInfoEditting } from "../../components/AdminComponents/PersonalContactInfoEditting";
import { NextPageWithLayout } from "../_app";
import AdminStore from "../../Stores/AdminStore";
import Link from "next/link";
import { GoBackPage } from "../../components/AdminComponents/GoBackPage";

const ContactInfoPage: NextPageWithLayout = () => {
	if (AdminStore.userInfo.isLoggedIn) {
		return (
			<div>
				<h1>Kontakt</h1>
				<GeneralContactInfoEditting />
				<PersonalContactInfoEditting />
			</div>
		);
	} else {
		return (
			<GoBackPage />
		);
	}
};

ContactInfoPage.getLayout = function getLayout(ContactInfoPage: ReactElement) {
	return (
		<>
			<AdminLayout>{ContactInfoPage}</AdminLayout>
		</>
	);
};

export default observer(ContactInfoPage);
