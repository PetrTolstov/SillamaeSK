import { ReactElement } from "react";
import { AdminLayout } from ".";
import { GeneralContactInfoEditting } from "../../components/AdminComponents/GeneralContactInfoEditting";
import { PersonalContactInfoEditting } from "../../components/AdminComponents/PersonalContactInfoEditting";
import { NextPageWithLayout } from "../_app";

const ContactInfoPage: NextPageWithLayout = () => {
    return ( 
        <div>
            <h1>Kontakt</h1>
            <GeneralContactInfoEditting />
            <PersonalContactInfoEditting />
        </div>
    )
};

ContactInfoPage.getLayout = function getLayout(ContactInfoPage: ReactElement) {
	return (
		<>
			<AdminLayout>{ContactInfoPage}</AdminLayout>
		</>
	);
};

export default ContactInfoPage;
