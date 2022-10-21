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

function ScheduleOnMainPageComponent() {
    // Event cards amount
    const CARDS_AMOUNT = 5;

	let newDate = new Date();
	const [currentMonthAndYear, setCurrentMonthAndYear] = useState(
		`${newDate.getFullYear()}-${newDate.getMonth() + 1}`
	);

	const [events, setEvents] = useState<CalendarEvent[]>([]);

	// const [getEventsByMonth, { loading, data, error }] = useGetCalendarEventsByMonthLazyQuery();

	const getCurrentDateString = (date: Date) => {
		let month = date.getUTCMonth() + 1; //months from 1-12
		let day = date.getUTCDate();
		let year = date.getUTCFullYear();
		let result = year + "-" + month + "-" + day;
		return result;
	};

	const { data, loading, error } = useGetRelevantCalendarEventsByCurrentDateQuery({
		variables: {
			currentDate: getCurrentDateString(new Date()),
		},
	});

	// useEffect(() => {
	// 	getEventsByMonth({
	// 		variables: {
	// 			monthStr: currentMonthAndYear,
	// 		},
	// 		onCompleted(data) {
	// 			let l = data?.GetCalendarEventsByMonth!.filter((el, i) => {
	// 				if (!(new Date(el?.date ?? "").getTime() < new Date().getTime()) && el) {
	// 					return el;
	// 				}
	// 			});

	// 			l?.filter((el) => {
	// 				if (el) {
	// 					return el;
	// 				}
	// 			});

	// 			if (l != undefined) {
	// 				let list = [...(events as []), ...(l as [])].slice(0, 5);
	// 				console.log(list);

	// 				setEvents(list);

	// 				if (events.length < 5) {
	// 					let month = parseInt(currentMonthAndYear.split("-")[1]) + 1;
	// 					let monthStr: string;
	// 					if (month < 10) {
	// 						monthStr = `0${month}`;
	// 					} else if (month > 12) {
	// 						monthStr = "01";
	// 					} else {
	// 						monthStr = month.toString();
	// 					}

	// 					setCurrentMonthAndYear(`${currentMonthAndYear.split("-")[0]}-${monthStr}`);
	// 				}
	// 			}
	// 		},
	// 	});
	// }, [currentMonthAndYear]);
	/*
    const { loading, data, error } = useGetCalendarEventsByMonthQuery({
        variables: {
            monthStr: currentMonthAndYear,
        },
    });*/

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
	return (
		<article className={styles.kalender}>
			<div className={styles.kalenderFrame}>
				<h2>SÜNDMUSTE KALENDER </h2>
				<ul>
					{loading && events.length > 4 ? (
						<p>Loading...</p>
					) : (
						data?.GetRelevantCalendarEventsByCurrentDate?.slice(0, CARDS_AMOUNT).map((el, i) => {
							let date = new Date(el!.date ?? "");

							return (
								<li
									id={`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`}
									key={`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}--${i}`}>
									<h3>
										{el!.name![LanguageStoreV2.currentLanguage] == ""
											? el?.name?.EST
											: el!.name![LanguageStoreV2.currentLanguage]}
									</h3>
									<p>{`${date.getDate()} ${monthNames[date.getUTCMonth()]}`}</p>
									<span className={styles.place}>{el!.place}</span>
									<span className={styles.time}>
										{el!.startTime} - {el!.endTime}
									</span>
									<a href={el!.link ?? ""}>
										{LanguageStoreV2.mainPage.latestNews.button[LanguageStoreV2.currentLanguage]}
									</a>
								</li>
							);
						})
					)}
				</ul>
				<Link href={"/Kalender"}>
					<a className={styles.more}>Vaata rohkem ▶</a>
				</Link>
			</div>
		</article>
	);
}

export default ScheduleOnMainPageComponent;
