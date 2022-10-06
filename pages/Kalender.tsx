import type { NextPage } from 'next'
import Layout from "../components/Layout";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";
import languageStore from "../Stores/LanguageStore";
import Calendar from 'react-calendar'
import {useEffect, useState} from "react";
import styles from  "../styles/Calendar.module.css"
import ImageWithSchedule from "../components/MainPage/ImageWithSchedule";
import {useGetCalendarEventsQuery} from "../graphqlGenerated/graphql";
import {offset} from "@popperjs/core";


const Kalender: NextPage = () => {
    let newDate = new Date()
    const [value, setValue] = useState(newDate);
    const [currentMonthAndYear, setCurrentMonthAndYear] = useState(`${newDate.getMonth() + 1}-${newDate.getFullYear()}`)
    const monthNames = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni",
        "Juuli", "August", "September", "Oktoober", "November", "Detsember"
    ]
    const {loading, data, error} = useGetCalendarEventsQuery({variables : {
        options: {
            offset: 0,
            limit: 20
        }
        }})
    //const {loading, data, error} = useGet

    function handleCLick(value: Date, event: React.MouseEvent<HTMLButtonElement>){
        let el = document.getElementById(`${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`)
        console.log(el)

        document.getElementsByClassName(styles.chosenLi)[0]?.classList.remove(styles.chosenLi)
        el?.classList.add(styles.chosenLi)
        el?.scrollIntoView()


    }

    function handleNavigationCLick( event: Event){
        let date = document.querySelectorAll(`.${styles.calendar} > div:nth-child(1) > button`)[2].textContent!
        date = date.charAt(0).toUpperCase() + date.slice(1)
        let dateList = date.split(' ')
        setCurrentMonthAndYear(`${dateList[0]}-${dateList[1]}`)
        setTimeout(correctCalendar, 1)
        correctCalendar()
    }


    function correctCalendar(){
        let max = 1
        let buttons = document.querySelectorAll(`.${styles.calendar} > div:nth-child(1) > button`)


        buttons[1].removeEventListener('click', handleNavigationCLick)
        buttons[1].addEventListener('click', handleNavigationCLick)

        buttons[3].removeEventListener('click', handleNavigationCLick)
        buttons[3].addEventListener('click', handleNavigationCLick)

        let list : HTMLElement[] = Array.from(document.querySelectorAll(`.${styles.tileCalendar}`))

        list.forEach((el) => {
            el.style.background = "#F2F2F2"
            el.style.color = "#000000"
        })


        for(let i = 0; i < list.length; i++){
            if( parseInt(list[i].textContent!) > i + 1 || max > parseInt(list[i].textContent!)){
                list[i].style.background = "#FFFFFF"
                list[i].style.color = "#afafaf"
            }else if(parseInt(list[i].textContent!) > max){
                let date = document.querySelectorAll(`.${styles.calendar} > div:nth-child(1) > button`)[2].textContent!
                date = date.charAt(0).toUpperCase() + date.slice(1)
                let dateList = date.split(' ')

                if(`${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}` == `${list[i].textContent!}-${monthNames.indexOf(dateList[0]) + 1}-${dateList[1]}`){



                    document.getElementsByClassName(styles.chosenLi)[0]?.classList.remove(styles.chosenLi)



                    list[i].style.background = "#0167FF"
                    list[i].style.color = "#FFFFFF"
                }
                let el = document.getElementById(`${list[i].textContent!}-${monthNames.indexOf(dateList[0]) + 1}-${dateList[1]}`)
                if (el){
                    list[i].style.background = "#6ca4fa"
                    list[i].style.color = "#f3f3f3"
                }


                max = parseInt(list[i].textContent!)
            }
        }


    }

    useEffect(() => {
        correctCalendar()

    }, [])



    return (
        <Layout>
            <main className={styles.main}>
                <ImageWithSchedule/>

                <div className={styles.container}>
                    <Calendar onChange={setValue} onViewChange={(action) => {console.log(action)}} onClickDay={(value, event) => {handleCLick(value, event)}} value={value} locale={"et-EE"} className={styles.calendar} tileClassName={styles.tileCalendar}/>
                    <ol className={styles.calenderAsList}>
                        {loading ? <p>Loading...</p> : data!.GetCalendarEvents!.map((el, i) => {
                            let date = new Date(el!.date ?? "")
                            return <li className={i == 0 ?styles.chosenLi : ''} id={`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`} key={`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}>
                                <div>
                                    <span>{date.getDate()}</span>
                                    <span>{monthNames[date.getUTCMonth()]}</span>
                                </div>
                                <div>
                                    <h3>{el!.name?.EST}</h3>
                                    <span>{el!.place}</span>
                                    <span>{el!.startTime} - {el!.endTime}</span>
                                </div>
                                <div>
                                    <a href={el!.link ?? ""}>Vaata rohkem</a>
                                </div>
                            </li>
                        })}


                    </ol>
                </div>
            </main>
        </Layout>
    )
}

export default Kalender

/*


 */