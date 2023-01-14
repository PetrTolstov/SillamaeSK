import { observer } from "mobx-react-lite";
import { ReactElement } from "react";
import { AdminLayout } from ".";
import GoBackPage from "../../components/AdminComponents/GoBackPage";
import FacilityList from "../../components/AdminComponents/Hostel/Facilities/FacilityList/FacilityList";
import MainDescriptionAdmin from "../../components/AdminComponents/Hostel/MainDescription/MainDescriptionAdmin";
import RoomList from "../../components/AdminComponents/Hostel/Rooms/RoomsList/RoomList";
import AdminStore from "../../Stores/AdminStore";
import { NextPageWithLayout } from "../_app";

const Hostel: NextPageWithLayout = () => {
    if(!AdminStore.userInfo.isLoggedIn) return <GoBackPage/>
	return (
		<div>
			<h1>Hostel</h1>
            <h3>Rooms</h3>
            <RoomList />
            <MainDescriptionAdmin/>
            <h3>Facilities</h3>
            <FacilityList/>
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
