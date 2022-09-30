import { ReactElement, useState } from "react";
import { AdminLayout } from ".";
import { AdminDropDown } from "../../components/AdminComponents/AdminDropDown";
import { AdminSimplePageEditForm } from "../../components/AdminComponents/SimplePage/AdminSimplePageEditForm";
import { SimplePage, useGetSimplePagesQuery } from "../../graphqlGenerated/graphql";
import { NextPageWithLayout } from "../_app";

const SportOpportunities: NextPageWithLayout = () => { 
    const [currentPage, setCurrentPage] = useState<SimplePage>();
	const { loading, data, error } = useGetSimplePagesQuery({
		variables: { type: 1 },
		onError(error) {
			console.log(error.networkError?.message);
		},
		onCompleted(data) {
			setCurrentPage(data.GetSimplePages![0] as SimplePage);
		},
	});
    return ( 
        <div>
            <h1>Sportimisvõimalused</h1>
			{loading ? <p>loading...</p> : <></>}
			<AdminDropDown
				pages={data?.GetSimplePages as SimplePage[]}
				currentPage={currentPage as SimplePage}
				updateCurrentPage={setCurrentPage}
			/>
            <AdminSimplePageEditForm page={currentPage as SimplePage}/>
        </div>
    )
}

SportOpportunities.getLayout = function getLayout(SportOpportunities: ReactElement) {
	return (
		<>
			<AdminLayout>{SportOpportunities}</AdminLayout>
		</>
	);
};


export default SportOpportunities;