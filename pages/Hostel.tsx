import type { NextPage } from 'next'
import styles from '../styles/Hostel.module.css'
import Layout from "../components/Layout";
import AboutHostel from "../components/Hostel/AboutHostel";
import HostelRooms from "../components/Hostel/HostelRooms";
import Facilities from "../components/Hostel/Facilities";

const Hostel: NextPage = () => {
    return (
        <Layout>
            <main className={styles.main}>
                <AboutHostel/>
                <HostelRooms/>
                <Facilities/>
            </main>
        </Layout>
    )
}

export default Hostel
