import { observer } from "mobx-react-lite";
import { ReactElement } from "react";
import { AdminLayout } from ".";
import GoBackPage from "../../components/AdminComponents/GoBackPage";
import FacilityList from "../../components/AdminComponents/Hostel/Facilities/FacilityList/FacilityList";
import MainDescriptionAdmin from "../../components/AdminComponents/Hostel/MainDescription/MainDescriptionAdmin";
import RoomList from "../../components/AdminComponents/Hostel/Rooms/RoomsList/RoomList";
import { useEditPageConfigMutation, useGetPageConfigQuery } from "../../graphqlGenerated/graphql";
import AdminStore from "../../Stores/AdminStore";
import { NextPageWithLayout } from "../_app";

const Hostel: NextPageWithLayout = () => {
    const { data: configData, refetch: refetchConfig } = useGetPageConfigQuery({
		variables: {
			pageName: "Hostel",
		},
	});
    const [editConfig, {}] = useEditPageConfigMutation(); 
	if (!AdminStore.userInfo.isLoggedIn) return <GoBackPage />;

	return (
		<div>
			<h1>Hostel</h1>
			<h3>Rooms</h3>
			<RoomList />
			<MainDescriptionAdmin />
			<h3>Facilities</h3>
			<FacilityList />
			<h3>Show Banner</h3>
			<input
				type='checkbox'
				defaultChecked={configData?.GetPageConfig?.showBanner ?? false}
				onChange={(e) => {
					editConfig({
						variables: {
							pageName: "Hostel",
							newConfig: {
								pageName: "Hostel",
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
};
Hostel.getLayout = function getLayout(Hostel: ReactElement) {
	return (
		<>
			<AdminLayout>{Hostel}</AdminLayout>
		</>
	);
};

export default observer(Hostel);
