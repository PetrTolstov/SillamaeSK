import type { NextPage } from "next";
import Layout from "../components/Layout";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";
import styles from "../styles/Contact.module.css";
import GeneralInformation from "../components/Contact/GeneralInformation";
import GoogleMapComponent from "../components/Contact/GoogleMapComponent";
import SpecificContact from "../components/Contact/SpecificContact";
import {
	GetPersonalContactsInfoQuery,
	PersonContactInfo,
	useGetGeneralContactsInfoQuery,
	useGetPageConfigQuery,
	useGetPersonalContactsInfoQuery,
} from "../graphqlGenerated/graphql";
import { observer } from "mobx-react-lite";
import LanguageStore from "../Stores/LanguageStore";

const Contact: NextPage = () => {
	const { data, loading, error } = useGetPersonalContactsInfoQuery();
	const { data: configData } = useGetPageConfigQuery({
		variables: {
			pageName: "Contacts",
		},
	});

	return (
		<Layout>
			{configData?.GetPageConfig?.showBanner ? (
				<AppIsBeingBuilt isEst={LanguageStore.currentLanguage.isEst} />
			) : (
				<main className={styles.main}>
					<div className={styles.firstContainer}>
						<GeneralInformation />
						<GoogleMapComponent />
					</div>
					<div className={styles.specificContacts}>
						{loading ? (
							<p>Loading</p>
						) : (
							<>
								<SpecificContact data={data!.GetPersonalContactsInfo![0]} />
								<SpecificContact data={data!.GetPersonalContactsInfo![1]} />
								<SpecificContact data={data!.GetPersonalContactsInfo![2]} />
							</>
						)}
					</div>
				</main>
			)}
		</Layout>
	);
};

export default observer(Contact);

/*
<main className={styles.main}>
                <div className={styles.firstContainer}>
                    <GeneralInformation/>
                    <GoogleMapComponent/>
                </div>
                <div className={styles.specificContacts}>
                    <SpecificContact data={data[0]}/>
                    <SpecificContact data={data[1]}/>
                    <SpecificContact data={data[2]}/>
                </div>
            </main>
 */
