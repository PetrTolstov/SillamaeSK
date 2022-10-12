import { observer } from "mobx-react-lite";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import { AdminLayout } from ".";
import { AdminDropDown } from "../../components/AdminComponents/AdminDropDown";
import GoBackPage from "../../components/AdminComponents/GoBackPage";
import { AdminSimplePageEditForm } from "../../components/AdminComponents/SimplePage/AdminSimplePageEditForm";
import { PageConfig, SimplePage, useGetPageConfigLazyQuery, useGetSimplePagesQuery } from "../../graphqlGenerated/graphql";
import AdminStore from "../../Stores/AdminStore";
import { NextPageWithLayout } from "../_app";

const SportOpportunities: NextPageWithLayout = () => { 
    const [currentPage, setCurrentPage] = useState<SimplePage>();
    const [pages, setPages] = useState<SimplePage[]>();
    const [fetchConfig, {data: configData, loading: configLoading}] = useGetPageConfigLazyQuery()
	const { loading, data, error } = useGetSimplePagesQuery({
		variables: { type: 1 },
		onError(error) {
			console.log(error.networkError?.message);
		},
		onCompleted(data) {
            setPages(data?.GetSimplePages as SimplePage[]);
			setCurrentPage(data.GetSimplePages![0] as SimplePage);
		},
	});
    useEffect(() => {
        // console.log("current page " + currentPage);
        if (currentPage) { 
            fetchConfig({variables: { 
                pageName: currentPage?.pageName
            }, onCompleted(data) {
                // console.log(data.GetPageConfig);
            },})
        }
       
	},[currentPage])
    useEffect(() => {
        // console.log("current page " + currentPage);
        fetchConfig({variables: { 
            pageName: data?.GetSimplePages![0].pageName
        }, onCompleted(data) {
            // console.log(data.GetPageConfig);
        },})
	},[])
    if (AdminStore.userInfo.isLoggedIn) {
		return ( 
            <div>
                <h1>Sportimisvõimalused</h1>
                {loading ? <p>loading...</p> : <></>}
                <AdminDropDown
                    pages={pages as SimplePage[]}
                    currentPage={currentPage as SimplePage}
                    updateCurrentPage={setCurrentPage}
                />
                {configData ? <AdminSimplePageEditForm page={currentPage as SimplePage} pageConfig={configData?.GetPageConfig as PageConfig}/> : <></>}
                
            </div>
        )
	} else { 
        return ( 
            <GoBackPage />
        )
    }
    
}

SportOpportunities.getLayout = function getLayout(SportOpportunities: ReactElement) {
	return (
		<>
			<AdminLayout>{SportOpportunities}</AdminLayout>
		</>
	);
};


export default observer(SportOpportunities);