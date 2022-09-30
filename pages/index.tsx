import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import HeaderComponent from "../components/HeaderComponent";
import ImageWithSchedule from "../components/MainPage/ImageWithSchedule";
import DescriptionNearNewsComponent from "../components/MainPage/DescriptionNearNewsComponent";
import NewsFacebookComponent from "../components/MainPage/NewsFacebookComponent";
import SideNavComponent from "../components/MainPage/SideNavComponent";
import ScheduleOnMainPageComponent from "../components/MainPage/ScheduleOnMainPageComponent";
import Layout from "../components/Layout";

const Home: NextPage = () => {
    //<ScheduleOnMainPageComponent/>
    //after main
  return (
      <Layout>
        <main className={styles.main}>
            <ImageWithSchedule/>

            <div className={styles.textAndNewsFrame}>
                <DescriptionNearNewsComponent/>
                <NewsFacebookComponent/>
            </div>



        </main>



      </Layout>
  )
}

export default Home

//<SideNavComponent/>