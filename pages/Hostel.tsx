import type { NextPage } from 'next'
import Layout from "../components/Layout";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";
import languageStore from "../Stores/LanguageStore";

const Hostel: NextPage = () => {
    return (
        <Layout>
            <AppIsBeingBuilt isEst={languageStore.currentLanguage.isEst}/>
        </Layout>
    )
}

export default Hostel
