import { ReactElement } from "react";
import { AdminLayout } from ".";
import { NextPageWithLayout } from "../_app";
import { TimeTableEditting } from "../../components/AdminComponents/TimeTableEditting";
import { SportOpportunitesDesEdititng } from "../../components/AdminComponents/SportOpportunitesDesEdititng";

const MainPageAdmin: NextPageWithLayout = () => {
    return ( 
        <div style={{paddingBottom: "50px"}}>
            <h1>Avaleht</h1>
            <TimeTableEditting/>
            <SportOpportunitesDesEdititng />
        </div>
    )
};

MainPageAdmin.getLayout = function getLayout(MainPage: ReactElement) {
	return (
		<>
			<AdminLayout>{MainPage}</AdminLayout>
		</>
	);
};

export default MainPageAdmin;
