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
	useGetPageConfigQuery
} from "../graphqlGenerated/graphql";
import { offset } from "@popperjs/core";
import LanguageStore from "../Stores/LanguageStore";
import { observer } from "mobx-react-lite";
import LanguageStoreV2 from "../Stores/LanguageStoreV2";
import CarouselComponent from "../components/MainPage/CarouselComponent";
import axios from "axios";
import {LINK} from "../config/constants";

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
				return `${LINK}/public/images/${page}/${el}`
			})

			setImgFile(list);
		})();
	}, []);
	let newDate = new Date();
	const [value, setValue] = useState(newDate);
	const [currentMonthAndYear, setCurrentMonthAndYear] = useState(
		`${newDate.getFullYear()}-${newDate.getMonth() + 1}`
	);
	let isNotChoosen = true

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
	const [getEventsByMonth, { loading, data, error }] = useGetCalendarEventsByMonthLazyQuery();

	useEffect(() => {
		getEventsByMonth({
			variables: {
				monthStr: currentMonthAndYear,
			},
		})

	}, [currentMonthAndYear])

	const { data: configData } = useGetPageConfigQuery({
		variables: {
			pageName: "Calendar",
		},
	});

	//const {loading, data, error} = useGet

	function handleCLick(value: Date, event: React.MouseEvent<HTMLButtonElement>) {
		let el = document.getElementById(`${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}`);

		document.getElementsByClassName(styles.chosenLi)[0]?.classList.remove(styles.chosenLi);
		el?.classList.add(styles.chosenLi);
		el?.scrollIntoView();
	}

	function handleNavigationCLick(event: Event) {
		Array.from(document.getElementsByClassName(styles.hidden)).forEach((el) => {
			el?.classList.remove(styles.hidden)
		})
		document.getElementsByClassName(styles.hiddenB)[0]?.classList.remove(styles.hiddenB)
		setTimeout(() => {
			let date = document.querySelectorAll(`.${styles.calendar} > div:nth-child(1) > button`)[2].textContent!;
			date = date.charAt(0).toUpperCase() + date.slice(1);
			let dateList = date.split(" ");


			setCurrentMonthAndYear(`${dateList[1]}-${monthNames.indexOf(dateList[0])+1}`);
			setTimeout(correctCalendar, 100);
			correctCalendar();

		}, 1)

	}

	function correctCalendar() {
		let max = 1;
		let buttons = document.querySelectorAll(`.${styles.calendar} > div:nth-child(1) > button`);

		buttons[1].removeEventListener("click", handleNavigationCLick);
		buttons[1].addEventListener("click", handleNavigationCLick);

		buttons[3].removeEventListener("click", handleNavigationCLick);
		buttons[3].addEventListener("click", handleNavigationCLick);

		let list: HTMLElement[] = Array.from(document.querySelectorAll(`.${styles.tileCalendar}`));

		list.forEach((el) => {
			el.style.background = "#F2F2F2";
			el.style.color = "#000000";
		});

		for (let i = 0; i < list.length; i++) {
			if (parseInt(list[i].textContent!) > i + 1 || max > parseInt(list[i].textContent!)) {
				list[i].style.background = "#FFFFFF";
				list[i].style.color = "#afafaf";
			} else if (parseInt(list[i].textContent!) > max) {
				console.log('c')
				let date = document.querySelectorAll(`.${styles.calendar} > div:nth-child(1) > button`)[2].textContent!;
				date = date.charAt(0).toUpperCase() + date.slice(1);
				let dateList = date.split(" ");

				if (
					`${value.getDate()}-${value.getMonth() + 1}-${value.getFullYear()}` ==
					`${list[i].textContent!}-${monthNames.indexOf(dateList[0]) + 1}-${dateList[1]}`
				) {
					list[i].style.background = "#0167FF";
					list[i].style.color = "#FFFFFF";
				}
				let el = document.getElementById(
					`${list[i].textContent!}-${monthNames.indexOf(dateList[0]) + 1}-${dateList[1]}`
				);

				if (el) {
					list[i].style.background = "#6ca4fa";
					list[i].style.color = "#f3f3f3";
				}

				max = parseInt(list[i].textContent!);
			}
		}
	}



	useEffect(() => {
		setTimeout(correctCalendar, 1)
		correctCalendar();
		//document.getElementsByClassName(styles.chosenLi)[0]?.scrollIntoView();
		//window.scroll(0,0)

	}, [loading]);


	function onChangeCalender(value:any){
		console.log(value)
	}

	return (
		<Layout>
				<main className={styles.main}>
                    <CarouselComponent roundedCorners={true} imageList={imgFile} />

					<div className={styles.container}>
						<div data-aos='fade-right' data-aos-once={"true"} className={styles.calCon}>
							<Calendar
								onChange={onChangeCalender}

								onClickDay={(value, event) => {
									handleCLick(value, event);
								}}
								value={value}
								locale={LanguageStoreV2.calendar.locale[LanguageStoreV2.currentLanguage]}
								className={styles.calendar}
								tileClassName={styles.tileCalendar}
							/>
						</div>
						<ol className={styles.calenderAsList} data-aos='fade-left' data-aos-once={"true"}>
							<button onClick={() => {
								if (document.getElementsByClassName(styles.hidden)[0]){
									Array.from(document.getElementsByClassName(styles.hidden)).forEach((e) => e?.classList.remove(styles.hidden))
									document.getElementsByClassName(styles.moreLi)[0]?.classList.add(styles.hiddenB)
								}


							}} className={styles.moreLi}>{LanguageStoreV2.mainPage.latestNews.button[LanguageStoreV2.currentLanguage]}</button>
							{loading ? (
								<p>Loading...</p>
							) : (

								data?.GetCalendarEventsByMonth!.map((el, i) => {
									let date = new Date(el!.date + "/" + el!.startTime ?? "");
									// @ts-ignore
									let d = data.GetCalendarEventsByMonth[0]

									console.log((new Date(d?.date + "/" + d?.startTime ?? "")))

									if ((new Date(d?.date + "/" + d?.startTime ?? "")).getTime() < newDate.getTime()){
										document.getElementsByClassName(styles.moreLi)[0]?.classList.remove(styles.hiddenB)

									}else{
										document.getElementsByClassName(styles.moreLi)[0]?.classList.add(styles.hiddenB)

									}
									return (
										<li
											className={(date.getTime() >= newDate.getTime()) ? (() => {
												if(isNotChoosen){
													isNotChoosen = false
													return styles.chosenLi
												}
											})() : styles.hidden}
											id={`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}
											key={`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}--${i}`}>
											<div>
												<span>{date.getDate()}</span>
												<span>{monthNames[date.getUTCMonth()]}</span>
											</div>
											<div>
												<h3>{el!.name![LanguageStoreV2.currentLanguage] == "" ? el?.name?.EST : el!.name![LanguageStoreV2.currentLanguage]}</h3>
												<span>{el!.place}</span>
												<span>
													{el!.startTime} - {el!.endTime}
												</span>
											</div>
											<div>
												<a href={el!.link ?? ""}>{LanguageStoreV2.mainPage.latestNews.button[LanguageStoreV2.currentLanguage]}</a>
											</div>
										</li>
									);
								})
							)}
						</ol>
					</div>
				</main>
		</Layout>
	);
};

export default observer(Kalender);

/*


 */
