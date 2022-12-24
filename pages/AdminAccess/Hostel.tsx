import { observer } from "mobx-react-lite"
import { ReactElement } from "react";
import { AdminLayout } from ".";
import { NextPageWithLayout } from "../_app"

const Hostel: NextPageWithLayout = () => { 
    return ( 
        <h1>
            Hostel
        </h1>
    )
}
Hostel.getLayout = function getLayout(Hostel: ReactElement) {
	return (
		<>
			<AdminLayout>{Hostel}</AdminLayout>
		</>
	);
};

export default observer(Hostel)