import { ReactElement, useState } from "react";
import { AdminLayout } from ".";
import { NextPageWithLayout } from "../_app";
import { TimeTableEditting } from "../../components/AdminComponents/TimeTableEditting";
import { SportOpportunitesDesEdititng } from "../../components/AdminComponents/SportOpportunitesDesEdititng";
import AdminStore from "../../Stores/AdminStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import GoBackPage from "../../components/AdminComponents/GoBackPage";
import ImageForm from "../../components/AdminComponents/UploadFile";
import { ButtonAdmin } from "../../components/AdminComponents/ButtonAdmin";
import { useEditPageConfigMutation, useGetPageConfigQuery } from "../../graphqlGenerated/graphql";
import DeleteFile from "../../components/AdminComponents/deleteFile";

const MainPageAdmin: NextPageWithLayout = () => {
	const [isShow, setIsShow] = useState(false);
	const [isShowDelete, setIsShowDelete] = useState(false);

	const { data: configData, refetch: refetchConfig } = useGetPageConfigQuery({
		variables: {
			pageName: "MainPage",
		},
	});
	const [editConfig, {}] = useEditPageConfigMutation();

	if (AdminStore.userInfo.isLoggedIn) {
		return (
			<div style={{ paddingBottom: "50px" }}>
				<h1>Avaleht</h1>
				<TimeTableEditting />
				<SportOpportunitesDesEdititng />
				<h3>Lisa foto</h3>
				<ImageForm
					page={"Karusel"}
					show={isShow}
					closeModal={() => {
						setIsShow(false);
					}}
				/>

				<ButtonAdmin
					border
					label={"Lisa"}
					action={() => {
						setIsShow(true);
					}}
				/>
				<DeleteFile page={"Karusel"} show={isShowDelete} closeModal={() => {
					setIsShowDelete(false);
				}} />

				<ButtonAdmin border action={() => setIsShowDelete(true)} label={"Delete images"} />
				<h6>Show banner</h6>
				<input
					type='checkbox'
					defaultChecked={configData?.GetPageConfig?.showBanner ?? false}
					onChange={(e) => {
						
						editConfig({
							variables: {
								pageName: "MainPage",
								newConfig: {
									pageName: "MainPage",
									showBanner: e.target.checked,
								},
							},
							onCompleted(data) {
								refetchConfig();
							},
						});
					}}
				/>
			</div>
		);
	} else {
		return <GoBackPage />;
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
