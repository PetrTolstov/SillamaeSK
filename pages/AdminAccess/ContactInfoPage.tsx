import { observer } from "mobx-react-lite";
import { ReactElement } from "react";
import { AdminLayout } from ".";
import { GeneralContactInfoEditting } from "../../components/AdminComponents/GeneralContactInfoEditting";
import { PersonalContactInfoEditting } from "../../components/AdminComponents/PersonalContactInfoEditting";
import { NextPageWithLayout } from "../_app";
import AdminStore from "../../Stores/AdminStore";
import GoBackPage from "../../components/AdminComponents/GoBackPage";
import { useEditPageConfigMutation, useGetPageConfigQuery } from "../../graphqlGenerated/graphql";

const ContactInfoPage: NextPageWithLayout = () => {
    const {data: configData, refetch: refetchConfig} = useGetPageConfigQuery({ variables: { 
        pageName: "Contacts"
    }})
    const [editConfig, {}] = useEditPageConfigMutation();
	if (AdminStore.userInfo.isLoggedIn) {
		return (
			<div>
				<h1>Kontakt</h1>
				<GeneralContactInfoEditting />
				<PersonalContactInfoEditting />

                <h6>Show Banner</h6>
                <input type="checkbox" defaultChecked={configData?.GetPageConfig?.showBanner ?? false} onChange={e => { 
                    console.log(e.target.checked);
                    editConfig({ variables: { 
                        pageName: "Contacts", 
                        newConfig: { 
                            pageName: "Contacts", 
                            showBanner: e.target.checked
                        }
                    }, onCompleted(data) {
                        refetchConfig()
                    },})
                }} />
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
