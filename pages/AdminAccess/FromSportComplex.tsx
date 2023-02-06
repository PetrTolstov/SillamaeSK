import { observer } from "mobx-react-lite";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { AdminLayout } from ".";
import { AdminDropDown } from "../../components/AdminComponents/AdminDropDown";
import GoBackPage  from "../../components/AdminComponents/GoBackPage";
import { AdminSimplePageEditForm } from "../../components/AdminComponents/SimplePage/AdminSimplePageEditForm";
import { SimplePage, useGetPageConfigLazyQuery, useGetSimplePagesLazyQuery, useGetSimplePagesQuery, PageConfig } from "../../graphqlGenerated/graphql";
import AdminStore from "../../Stores/AdminStore";
import { NextPageWithLayout } from "../_app";

const FromSportComplex: NextPageWithLayout = () => {
	const [currentPage, setCurrentPage] = useState<SimplePage>();
	const [pages, setPages] = useState<SimplePage[]>([]);
	const [getSimplePages, {}] = useGetSimplePagesLazyQuery();
    const [fetchConfig, {data: configData, loading: configLoading}] = useGetPageConfigLazyQuery()
	const { loading, data, error } = useGetSimplePagesQuery({
		variables: { type: 0 },
		onError(error) {
			console.log(error.networkError?.message);
		},
		onCompleted(data) {
			setPages(data?.GetSimplePages as SimplePage[]);
			setCurrentPage(data.GetSimplePages![0] as SimplePage);

		},
	});
    useEffect(() => {
        if (currentPage) { 
            fetchConfig({variables: { 
                pageName: currentPage?.pageName
            }, onCompleted(data) {
            },})
        }
       
	},[currentPage])
    useEffect(() => {
        fetchConfig({variables: { 
            pageName: data?.GetSimplePages![0].pageName
        }, onCompleted(data) {
            // console.log(data.GetPageConfig);
        },})
	},[])

	if (AdminStore.userInfo.isLoggedIn) {
		return (
			<div>
				<h1>Sportkompleksist</h1>
				{loading ? <p>loading...</p> : <></>}
				<AdminDropDown
					pages={pages}
					currentPage={currentPage as SimplePage}
					updateCurrentPage={setCurrentPage}
				/>
				{configData ? <AdminSimplePageEditForm page={currentPage as SimplePage} pageConfig={configData?.GetPageConfig as PageConfig}/> : <></>}
			</div>
		);
	} else {
		return (
            <GoBackPage />
		);
	}
};

FromSportComplex.getLayout = function getLayout(FromSportComplex: ReactElement) {
	return (
		<>
			<AdminLayout>{FromSportComplex}</AdminLayout>
		</>
	);
};

export default observer(FromSportComplex);
