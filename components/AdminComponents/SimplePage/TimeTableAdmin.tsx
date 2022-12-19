import { FormEvent, FormEventHandler, useEffect, useState } from "react";
import TimeTable from "react-timetable-events";
import { ButtonAdmin } from "../ButtonAdmin";
import Cross from "../../../public/cross.svg";
import Image from "next/image";
import { Event } from "react-timetable-events/dist/types";
import styles from "../../../styles/TimeTableAdmin.module.css";
import formStyles from "../../../styles/FormStyles.module.css";
import ModalAdmin from "../ModalAdmin";
import LanguageStoreV2 from "../../../Stores/LanguageStoreV2";
import { observer } from "mobx-react-lite";
import {
	GetObjectTimeTableDocument,
	useGetObjectTimeTableLazyQuery,
	useGetObjectTimeTableQuery,
	useSetObjectTimeTableMutation,
} from "../../../graphqlGenerated/graphql";
import { json } from "node:stream/consumers";
import { GetTimeTableEventColor } from "./AdminSimplePageEditForm";

export type extendedEvent = Event & { textContent: { RUS: string; EST: string; ENG: string } };
export type simplifiedEvent = {
	id: number | string;
	name: string;
	textContent: { RUS: string; EST: string; ENG: string };
	startTime: string | Date;
	endTime: string | Date;
	type?: string;
	[key: string]: unknown;
};
export type simplifiedEventNonNullable = {
	id: number | string;
	name: string;
	textContent: { RUS: string; EST: string; ENG: string };
	startTime: string;
	endTime: string;
	type?: string;
	[key: string]: unknown;
};
export type simplifiedObjectTimeTable = {
	E: simplifiedEvent[] | null;
	T: simplifiedEvent[] | null;
	K: simplifiedEvent[] | null;
	N: simplifiedEvent[] | null;
	R: simplifiedEvent[] | null;
	L: simplifiedEvent[] | null;
	P: simplifiedEvent[] | null;
};
export type simplifiedObjectTimeTableNonNullable = {
	E: simplifiedEventNonNullable[];
	T: simplifiedEventNonNullable[];
	K: simplifiedEventNonNullable[];
	N: simplifiedEventNonNullable[];
	R: simplifiedEventNonNullable[];
	L: simplifiedEventNonNullable[];
	P: simplifiedEventNonNullable[];
};
export type ObjectTimeTable = {
	E: extendedEvent[];
	T: extendedEvent[];
	K: extendedEvent[];
	N: extendedEvent[];
	R: extendedEvent[];
	L: extendedEvent[];
	P: extendedEvent[];
};
export type weekday = "E" | "T" | "K" | "N" | "R" | "L" | "P";

export const GetContrast = function (hexcolor: string) {
	// If a leading # is provided, remove it
	if (hexcolor.slice(0, 1) === "#") {
		hexcolor = hexcolor.slice(1);
	}

	// If a three-character hexcode, make six-character
	if (hexcolor.length === 3) {
		hexcolor = hexcolor
			.split("")
			.map(function (hex) {
				return hex + hex;
			})
			.join("");
	}

	// Convert to RGB value
	var r = parseInt(hexcolor.substr(0, 2), 16);
	var g = parseInt(hexcolor.substr(2, 2), 16);
	var b = parseInt(hexcolor.substr(4, 2), 16);

	// Get YIQ ratio
	var yiq = (r * 299 + g * 587 + b * 114) / 1000;

	// Check contrast
	return yiq >= 128 ? "black" : "white";
};
function TimeTableAdmin({ pageName, isAdmin = false, getContrast=GetContrast }: { pageName: string; isAdmin?: boolean, getContrast?: (hexcolor: string) =>string }) {
	const scheduleInitial = {
		E: [],
		T: [],
		K: [],
		N: [],
		R: [],
		L: [],
		P: [],
	};
	const [schedule, setSchedule] = useState<ObjectTimeTable>(scheduleInitial);
	const [isEditing, setIsEditing] = useState(false);
	const [getData, { refetch }] = useGetObjectTimeTableLazyQuery({
		variables: { objectName: pageName },
		onCompleted(data) {
			if (pageName != "Arengukava" && pageName != "Kodukord") {
				if (data.GetObjectTimeTable?.timeTable === null) {
					setSchedule(scheduleInitial);
				} else {
					setSchedule(
						convertSimplifiedScheduleStringTimeToDate(
							data.GetObjectTimeTable?.timeTable as simplifiedObjectTimeTableNonNullable
						) as ObjectTimeTable
					);
				}
			}
		},
		onError: (error) => {
			console.log("pageName: " + pageName);
			console.log(error.message);
		},
	});
	const [updateTimeTable, {}] = useSetObjectTimeTableMutation({
		refetchQueries: [{ query: GetObjectTimeTableDocument, variables: { objectName: pageName } }],
	});

	const [showModal, setShowModal] = useState(false);
	const [currentEvent, setCurrentEvent] = useState<extendedEvent>();

	function convertScheduleDateToTimeObject(schedule: ObjectTimeTable) {
		const copy = JSON.parse(JSON.stringify(schedule)) as simplifiedObjectTimeTable;
		for (const [key, value] of Object.entries(copy)) {
			value?.map((element) => {
				let startTime = new Date(element.startTime);
				let endTime = new Date(element.endTime);
				element.startTime = `${padTo2Digits(startTime.getHours())}:${padTo2Digits(startTime.getMinutes())}`;
				element.endTime = `${padTo2Digits(endTime.getHours())}:${padTo2Digits(endTime.getMinutes())}`;
			});
		}
		return copy as simplifiedObjectTimeTableNonNullable;
	}
	function convertSimplifiedScheduleStringTimeToDate(schedule: simplifiedObjectTimeTable | null) {
		if (schedule === null) {
			return;
		}
		const copy = JSON.parse(JSON.stringify(schedule)) as ObjectTimeTable;
		for (const [key, value] of Object.entries(copy)) {
			value?.map((element, id) => {
				if (schedule[key as weekday] !== null) {
					let currentAnalog = schedule[key as weekday]![id];
					element.startTime = new Date(`2022/10/09 ${currentAnalog.startTime as string}`);
					element.endTime = new Date(`2022/10/09 ${currentAnalog.endTime as string}`);
				}
			});
		}
		return copy;
	}
	useEffect(() => {
		getData();
	}, [pageName]);
	useEffect(() => {
		// console.log("schedule update");
		// console.log(schedule);
	}, [schedule]);

	function deleteEvent(type: weekday, id: number) {
		const copy = schedule;
		const filteredCopy = copy[type].filter((el) => {
			if (el.id != id) {
				return el;
			}
		});
		copy[type] = filteredCopy;
		setSchedule(copy);
		refetch({
			objectName: pageName,
		});
	}

	if (pageName == "Arengukava" || pageName == "Kodukord" ) {
		return <></>;
	}
	return (
		<div style={{width:"100%"}}>
			{isAdmin ? (
				<>
					<ButtonAdmin
						label={"+"}
						action={() => {
							setCurrentEvent(undefined);
							setIsEditing(false);
							setShowModal(true);
						}}
						border
					/>
				</>
			) : (
				<></>
			)}

			<TimeTable
				events={schedule}
				timeLabel={"Aeg"}
				hoursInterval={{ from: 8, to: 22 }}
				style={{ height: "1100px" }}
				renderEvent={(eventProps) => {
					const event = eventProps.event as extendedEvent;
					const eventID = event.id as number;
					const height = parseInt(eventProps.defaultAttributes.style!.height! as string);
					const isMinimal: boolean = height <= 40;

					// const currentColumn = sortEvents(schedule)[event.type as weekday];
					// let isThin: boolean = false;
					// const eventA = currentColumn[eventID];
					// const eventB = currentColumn[eventID + 1];
					// if (eventB) {
					//     if (eventA.startTime <= eventB.endTime && eventB.startTime <= eventA.endTime) {
					//         if (eventA.id != 0) {
					//             isThin = true;
					//         }

					//     }
					// }

					return (
						<div
							className={styles.container}
							{...eventProps.defaultAttributes}
							key={`${eventProps.event.type}${eventProps.event.id}`}>
							<div
								// className={[isMinimal ? styles.conatinerSmall : styles.containerBig, isThin ? styles.containerThin : ""].join(" ")}
								style={{
									color: getContrast(GetTimeTableEventColor(event.textContent.EST) ?? ""),
									backgroundColor:
										GetTimeTableEventColor(event.textContent.EST) ?? "rgba(0, 0, 255, 1)",
									height: "100%",
								}}
								onClick={() => {
									if (isAdmin) {
										setCurrentEvent(event as extendedEvent);
										setShowModal(true);
										setIsEditing(true);
									}
								}}>
								{isMinimal ? (
									<>
										<p
											className={styles.contrastText}
											style={{
												fontSize: height <= 20 ? "8px" : height <= 100 ? "10px" : "20px",
											}}>{`${padTo2Digits((event.startTime as Date).getHours())}:${padTo2Digits(
											(event.startTime as Date).getMinutes()
										)} - ${padTo2Digits((event.endTime as Date).getHours())}:${padTo2Digits(
											(event.endTime as Date).getMinutes()
										)}`}</p>
									</>
								) : (
									<>
										<p className={styles.contrastText} style={{ fontSize: "10px" }}>
											{event.textContent.EST ?? ""}
										</p>
										<p
											className={styles.contrastText}
											style={{ fontSize: "10px" }}>{`${padTo2Digits(
											(event.startTime as Date).getHours()
										)}:${padTo2Digits((event.startTime as Date).getMinutes())} - ${padTo2Digits(
											(event.endTime as Date).getHours()
										)}:${padTo2Digits((event.endTime as Date).getMinutes())}`}</p>
									</>
								)}
							</div>
						</div>
					);
				}}
			/>
			<ModalAdmin
				isShowing={showModal}
				onClose={() => {
					setShowModal(false);
				}}>
				<form
					onSubmit={(event: FormEvent<HTMLFormElement>) => {
						event.preventDefault();
						const data = new FormData(event.currentTarget);
						let newEventObj: extendedEvent = {
							id: currentEvent?.id ?? 0,
							name: "",
							textContent: {
								RUS: data.get("eventTitleRUS") as string,
								EST: data.get("eventTitleEST") as string,
								ENG: data.get("eventTitleENG") as string,
							},
							startTime: new Date(`2022/10/09 ${data.get("startTime")}`),
							endTime: new Date(`2022/10/09 ${data.get("endTime")}`),
							type: data.get("weekDaySelect") as weekday,
						};

						// if editing -> update existing event
						if (currentEvent != undefined) {
							let copy = schedule;
							copy[currentEvent?.type as weekday][currentEvent?.id as number] = newEventObj;
							setSchedule(copy);
						} else {
							if (schedule[data.get("weekDaySelect") as weekday] === null) {
								newEventObj.id = 0;
							} else {
								newEventObj.id = schedule[data.get("weekDaySelect") as weekday].length;
							}
							const copy = { ...schedule };
							copy[data.get("weekDaySelect") as weekday].push(newEventObj);
							setSchedule(copy);
						}
						updateTimeTable({
							variables: {
								objectName: pageName,
								newObjectTimeTable: JSON.parse(
									JSON.stringify(convertScheduleDateToTimeObject(schedule))
								),
							},
						});
						setShowModal(false);
					}}>
					<div>
						<select name='weekDaySelect' id='weekDaySelect' defaultValue={currentEvent?.type}>
							<option value='E'>Esmaspäev</option>
							<option value='T'>Teisiapäev</option>
							<option value='K'>Kolmapäev</option>
							<option value='N'>Neljapäev</option>
							<option value='R'>Reede</option>
							<option value='L'>Laupäev</option>
							<option value='P'>Pühapäev</option>
						</select>
						<span>
							<input
								type='time'
								name='startTime'
								defaultValue={`${padTo2Digits(currentEvent?.startTime.getHours() ?? 0)}:${padTo2Digits(
									currentEvent?.startTime.getMinutes() ?? 0
								)}`}
							/>
							<input
								type='time'
								name='endTime'
								defaultValue={`${padTo2Digits(currentEvent?.endTime.getHours() ?? 0)}:${padTo2Digits(
									currentEvent?.endTime.getMinutes() ?? 0
								)}`}
							/>
						</span>
					</div>
					{/* <div className={formStyles.flexCon}>
						<label htmlFor='eventTitleEST'></label>
						<input
							placeholder='EST'
							className={formStyles.input}
							name='eventTitleEST'
							type='text'
							defaultValue={currentEvent?.textContent.EST}
						/>
						<span className={formStyles.focusBorder}></span>
					</div>
					<div className={formStyles.flexCon}>
						<label htmlFor='eventTitleRUS'></label>
						<input
							placeholder='RUS'
							className={formStyles.input}
							name='eventTitleRUS'
							type='text'
							defaultValue={currentEvent?.textContent.RUS}
						/>
						<span className={formStyles.focusBorder}></span>
					</div>
					<div className={formStyles.flexCon}>
						<label htmlFor='eventTitleENG'></label>
						<input
							placeholder='ENG'
							className={formStyles.input}
							name='eventTitleENG'
							type='text'
							defaultValue={currentEvent?.textContent.ENG}
						/>
						<span className={formStyles.focusBorder}></span>
					</div> */}
					<div className={formStyles.flexCon}>
						<select name='eventTitleEST'>
							<option value='Iluvõimlemine'>Iluvõimlemine</option>
							<option value='Sulgpall'>Sulgpall</option>
							<option value='SJK Dina'>SJK Dina</option>
							<option value='FC NPM Silmet'>FC NPM Silmet</option>
							<option value='Jalgpallikool FC Kalev'>Jalgpallikool FC Kalev</option>
							<option value='Tennis'>Tennis</option>
							<option value='JK Almaz'>JK Almaz</option>
							<option value='Korvpall'>Korvpall</option>
							<option value='KJK Kalev-Sillamäe'>KJK Kalev-Sillamäe</option>
							<option value='Võrkpall'>Võrkpall</option>
							<option value='Narkokeskus'>Narkokeskus</option>
							<option value='Aeroobika, S. Koort'>Aeroobika, S. Koort</option>
							<option value='Terviserühm „Fialka“'>Terviserühm „Fialka“</option>
							<option value='Taekwondo'>Taekwondo</option>
							<option value='Male'>Male</option>
							<option value='Poks'>Poks</option>
							<option value='Spordiklubi Kalev'>Spordiklubi Kalev</option>
							<option value='Ujumisklubi Kalev'>Ujumisklubi Kalev</option>
						</select>
					</div>
					<ButtonAdmin isSubmit label={"Submit"} border action={() => {}} />
					{isEditing ? (
						<ButtonAdmin
							label={"Delete"}
							border
							action={() => {
								deleteEvent(currentEvent?.type as weekday, currentEvent?.id as number);
								updateTimeTable({
									variables: {
										objectName: pageName,
										newObjectTimeTable: JSON.parse(
											JSON.stringify(convertScheduleDateToTimeObject(schedule))
										),
									},
								});
								setShowModal(false);
							}}
						/>
					) : (
						<></>
					)}
				</form>
			</ModalAdmin>
		</div>
	);
}

export function padTo2Digits(num: number): string {
	if (String(num).length == 1) {
		return String(num).padStart(2, "0");
	} else {
		return String(num);
	}
}

function sortEvents(schedule: ObjectTimeTable): ObjectTimeTable {
	let sortedSchedule: ObjectTimeTable = {
		E: [],
		T: [],
		K: [],
		N: [],
		R: [],
		L: [],
		P: [],
	};
	for (let weekDay in schedule) {
		sortedSchedule[weekDay as weekday] = schedule[weekDay as weekday].sort((eventA, eventB) => {
			let startDateA = eventA.startTime;
			let endDateA = eventA.endTime;
			let startDateB = eventB.startTime;
			let endDateB = eventB.endTime;

			if (startDateA > endDateB) {
				return 1;
			}

			if (startDateB > endDateA) {
				return -1;
			}
			return 0;
		});
	}
	return sortedSchedule;
}

export default observer(TimeTableAdmin);
