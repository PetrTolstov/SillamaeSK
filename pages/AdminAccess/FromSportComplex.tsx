import { ReactElement, useState } from "react";
import { AdminLayout } from ".";
import { AdminDropDown } from "../../components/AdminComponents/AdminDropDown";
import { AdminSimplePageEditForm } from "../../components/AdminComponents/SimplePage/AdminSimplePageEditForm";
import { SimplePage, useGetSimplePagesLazyQuery, useGetSimplePagesQuery } from "../../graphqlGenerated/graphql";
import { NextPageWithLayout } from "../_app";

const FromSportComplex: NextPageWithLayout = () => {
	const { loading, data, error } = useGetSimplePagesQuery({
		variables: { type: 0 },
		onError(error) {
			console.log(error.networkError?.message);
		},
		onCompleted(data) {
			setCurrentPage(data.GetSimplePages![0] as SimplePage);
		},
	});
	const [currentPage, setCurrentPage] = useState<SimplePage>();

	return (
		<div>
			<h1>Sportkompleksist</h1>
			{loading ? <p>loading...</p> : <></>}
			<p>{"Current Page " + currentPage?.title?.EST}</p>
			<AdminDropDown
				pages={data?.GetSimplePages as SimplePage[]}
				currentPage={currentPage as SimplePage}
				updateCurrentPage={setCurrentPage}
			/>
            <AdminSimplePageEditForm page={currentPage as SimplePage}/>
		</div>
	);
};

FromSportComplex.getLayout = function getLayout(FromSportComplex: ReactElement) {
	return (
		<>
			<AdminLayout>{FromSportComplex}</AdminLayout>
		</>
	);
};

export default FromSportComplex;
