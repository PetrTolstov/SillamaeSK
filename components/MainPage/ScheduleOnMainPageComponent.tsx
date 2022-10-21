import styles from '../../styles/ScheduleOnMainPageComponent.module.css'
import LanguageStoreV2 from "../../Stores/LanguageStoreV2";
import {
    CalendarEvent,
    useGetCalendarEventsByMonthLazyQuery,
    useGetCalendarEventsByMonthQuery
} from "../../graphqlGenerated/graphql";
import {useEffect, useState} from "react";
import Link from "next/link";


function ScheduleOnMainPageComponent(){
    let newDate = new Date();
    const [currentMonthAndYear, setCurrentMonthAndYear] = useState(
        `${newDate.getFullYear()}-${newDate.getMonth() + 1}`
    );



    const [events, setEvents] = useState<CalendarEvent[]>([])


    const [getEventsByMonth, { loading, data, error }] = useGetCalendarEventsByMonthLazyQuery();



    useEffect(() => {

        getEventsByMonth({
            variables: {
                monthStr: currentMonthAndYear,
            },
        })

    }, [currentMonthAndYear])
    /*
    const { loading, data, error } = useGetCalendarEventsByMonthQuery({
        variables: {
            monthStr: currentMonthAndYear,
        },
    });*/


    useEffect(() =>{

            let l = data?.GetCalendarEventsByMonth!.filter((el, i) => {
                if (!((new Date(el?.date ?? "")).getTime() < (new Date).getTime()) && el) {
                    return el
                }
            })



            l?.filter((el) => {
                if(el){
                    return el
                }
            })


            if(l != undefined){
                setEvents([...events as [], ...l as []].slice(0,5))

                if(events.length < 5){
                    let month = parseInt(currentMonthAndYear.split('-')[1]) + 1
                    let monthStr : string
                    if (month < 10){
                        monthStr = `0${month}`
                    }else if (month > 12){
                        monthStr = '01'
                    }else{
                        monthStr = month.toString()
                    }




                    setCurrentMonthAndYear(`${currentMonthAndYear.split('-')[0]}-${monthStr}`)
                }
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
                    {loading && events.length > 4? (
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
                <Link href={'/Kalender'}>
                    <a className={styles.more}>Vaata rohkem ▶</a>
                </Link>
            </div>
        </article>
    )
}

export default ScheduleOnMainPageComponent