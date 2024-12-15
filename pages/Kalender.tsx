import type { NextPage } from "next";
import Layout from "../components/Layout";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";
import languageStore from "../Stores/LanguageStore";
import Calendar from "react-calendar";
import { useEffect, useState } from "react";
import styles from "../styles/Calendar.module.css";
import ImageWithSchedule from "../components/MainPage/ImageWithSchedule";
import {
    useGetCalendarEventsByMonthLazyQuery,
    useGetCalendarEventsByMonthQuery,
    useGetCalendarEventsQuery,
    useGetPageConfigQuery,
} from "../graphqlGenerated/graphql";
import { offset } from "@popperjs/core";
import LanguageStore from "../Stores/LanguageStore";
import { observer } from "mobx-react-lite";
import LanguageStoreV2 from "../Stores/LanguageStoreV2";
import CarouselComponent from "../components/MainPage/CarouselComponent";
import axios from "axios";
import { LINK } from "../config/constants";
import Script from "next/dist/client/script";
import ScheduleOnMainPageComponent from "../components/MainPage/ScheduleOnMainPageComponent";

const Kalender: NextPage = () => {
    const page = "Karusel";
    const [imgFile, setImgFile] = useState([]);
    useEffect(() => {
        (async () => {
            const res = await axios.get(LINK + "/getPhoto", {
                headers: {
                    optional: page,
                },
            });
            // console.log(res.data)
            let list = res.data.map((el: any) => {
                return `${LINK}/public/images/${page}/${el}`;
            });

            setImgFile(list);
        })();
    }, []);
    
    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://www.kultuurikava.ee/js/kk-index.js?widget=535ba5d25b1c0c8e044069af7d36eb98540968aa";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <Layout>
            <main className={styles.main}>
                <CarouselComponent roundedCorners={true} imageList={imgFile} />
                <div
                    className="kk-widget"
                    data-widgetid="535ba5d25b1c0c8e044069af7d36eb98540968aa"
                    style={{"width" : "100%", "margin" : "30px"}}
                ></div>
                
            </main>
        </Layout>
    );
};

export default observer(Kalender);

