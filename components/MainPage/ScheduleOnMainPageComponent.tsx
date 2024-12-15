import styles from "../../styles/ScheduleOnMainPageComponent.module.css";
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";
import {
    CalendarEvent,
    useGetCalendarEventsByMonthLazyQuery,
    useGetCalendarEventsByMonthQuery,
    useGetRelevantCalendarEventsByCurrentDateQuery,
} from "../../graphqlGenerated/graphql";
import { useEffect, useState } from "react";
import Link from "next/link";
import {observer} from "mobx-react-lite";

function ScheduleOnMainPageComponent() {


    const hCalender = {
        EST: "SÜNDMUSTE KALENDER",
        RUS: "КАЛЕНДАРЬ СОБЫТИЙ",
        ENG: "CALENDAR OF EVENTS",
    };

    const bMore = {
        EST: "Vaata rohkem",
        RUS: "Посмотреть больше",
        ENG: "See more",
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src =
            "https://www.kultuurikava.ee/js/kk-index.js?widget=535ba5d25b1c0c8e044069af7d36eb98540968aa";
        script.async = true;
        document.body.appendChild(script);
    }, []);


    return (
        <article className={styles.kalender}>
            <div className={styles.kalenderFrame}>
                <h2>{hCalender[LanguageStoreV2.currentLanguage]}</h2>

                <div className={`kk-widget ${styles.customCalendar}`}
                    data-widgetid="535ba5d25b1c0c8e044069af7d36eb98540968aa"
                    style={{"width": "100%", "paddingBottom": "50px"}}></div>

                <Link href={"/Kalender"}>
                    <a className={styles.more}>
                        {bMore[LanguageStoreV2.currentLanguage]}
                    </a>
                </Link>
            </div>
        </article>
    );
}

export default observer(ScheduleOnMainPageComponent);
