import type { NextPage } from 'next'
import styles from '../styles/Hostel.module.css'
import Layout from "../components/Layout";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";
import languageStore from "../Stores/LanguageStore";
import AboutHostel from "../components/Hostel/AboutHostel";

const Hostel: NextPage = () => {
    return (
        <Layout>
            <main className={styles.main}>
                <AboutHostel/>
            </main>
        </Layout>
    )
}

export default Hostel
