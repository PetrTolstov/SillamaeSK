import styles from '../../styles/ScheduleOnMainPageComponent.module.css'
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";
import {
    CalendarEvent,
    useGetCalendarEventsByMonthLazyQuery,
    useGetCalendarEventsByMonthQuery
} from "../../graphqlGenerated/graphql";
import {useEffect, useState} from "react";


function ScheduleOnMainPageComponent(){
    let newDate = new Date();
    const [currentMonthAndYear, setCurrentMonthAndYear] = useState(
        `${newDate.getFullYear()}-${newDate.getMonth() + 1}`
    );

    const [events, setEvents] = useState<CalendarEvent[]>()

    const { loading, data, error } = useGetCalendarEventsByMonthQuery({
        variables: {
            monthStr: currentMonthAndYear,
        },
    });

    useEffect(() =>{

        let l = data?.GetCalendarEventsByMonth!.filter((el, i) => {
            if (!((new Date(el?.date ?? "")).getTime() < (new Date).getTime()) && el) {
                return el
            }
        })



        console.log(l)
        if(l != undefined){
            setEvents(l.slice(0,4) as CalendarEvent[])
        }


    }, [loading])
    const monthNames = [
        "Jaanuar",
        "Veebruar",
        "Märts",
        "Aprill",
        "Mai",
        "Juuni",
        "Juuli",
        "August",
        "September",
        "Oktoober",
        "November",
        "Detsember",
    ];
    return(
        <article className={styles.kalender}>
            <div className={styles.kalenderFrame}>

                <h2>SÜNDMUSTE KALENDER </h2>
                <ul>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (

                        events?.map((el, i) => {
                            if (el){
                                let date = new Date(el!.date ?? "");


                                return (
                                    <li
                                        id={`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}
                                        key={`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}--${i}`}>
                                        <h3>{el!.name![LanguageStoreV2.currentLanguage] == "" ? el?.name?.EST : el!.name![LanguageStoreV2.currentLanguage]}</h3>
                                        <p>{`${date.getDate()} ${monthNames[date.getUTCMonth()]}`}</p>
                                        <span className={styles.place}>{el!.place}</span>
                                        <span className={styles.time}>{el!.startTime} - {el!.endTime}</span>
                                        <a href={el!.link ?? ""}>{LanguageStoreV2.mainPage.latestNews.button[LanguageStoreV2.currentLanguage]}</a>
                                    </li>
                                );
                        }})
                    )}
                </ul>
                <button className={styles.more}>Vaata rohkem ▶</button>
            </div>
        </article>
    )
}

export default ScheduleOnMainPageComponent