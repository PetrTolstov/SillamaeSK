import type { NextPage } from 'next'
import Layout from "../components/Layout";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";

const Kalender: NextPage = () => {
    return (
        <Layout>
            <AppIsBeingBuilt isEst={true}/>
        </Layout>
    )
}

export default Kalender
