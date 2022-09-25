import { useEffect, useState } from "react";
import {
	PriceListElement,
	PriceListElementInput,
	useCreateNewPriceListElementMutation,
    GetPriceListDocument
} from "../../graphqlGenerated/graphql";
import { modalTypes } from "../../pages/AdminAccess/Pricing";
import styles from "../../styles/ModalAdmin.module.css";
import { ButtonAdmin } from "./ButtonAdmin";

type ModalAdminProps = {
	priceListElement?: PriceListElement;
	modalType: modalTypes | undefined;
	closeModal: () => void;
};

// props -> priceListElement object
export const ModalAdmin = ({ priceListElement, modalType, closeModal }: ModalAdminProps) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "scroll";
		};
	}, []);

	return (
		<>
			<div className={styles.shadow}></div>
			<div className={styles.container}>
				<h2>Header</h2>
				{modalType == modalTypes.editModal ? (
					<EditingForm priceListElement={priceListElement!} />
				) : (
					<AddingForm />
				)}
				<div>
					<ButtonAdmin label={"CLOSE"} action={closeModal} />
				</div>
			</div>
		</>
	);
};

const AddingForm = () => {
	const [newName, setNewName] = useState({ RUS: "", ENG: "", EST: "" });
	const [newTickets, setNewTickets] = useState([
		{
			description: {
				RUS: "",
				ENG: "",
				EST: "",
			},
			duration: {
				hours: 0,
				additionalInfo: {
					RUS: "",
					ENG: "",
					EST: "",
				},
			},
			price: 0,
		},
	]);
	const [createNewPriceListElement, { error, loading, data }] = useCreateNewPriceListElementMutation();

	const addTicket = () => {
		setNewTickets((prevTickets) => [
			...prevTickets,
			{
				description: {
					RUS: "",
					ENG: "",
					EST: "",
				},
				duration: {
					hours: 0,
					additionalInfo: {
						RUS: "",
						ENG: "",
						EST: "",
					},
				},
				price: 0,
			},
		]);
	};

	enum properties {
		description = "description",
		duration = "duration",
		additionalInfo = "additionalInfo",
		EST = "EST",
		ENG = "ENG",
		RUS = "RUS",
		hours = "hours",
		price = "price",
	}
	// depth: 1 or 2
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement>,
		id: number,
		depth: number,
		property1: properties,
		property2?: properties,
		lang?: properties
	) => {
		const TicketsCopy = newTickets;
		if (depth == 1 && property1 == properties.description) {
			if (lang == properties.ENG || lang == properties.EST || lang == properties.RUS) {
				TicketsCopy[id][property1][lang] = e.currentTarget.value;
			}
		} else if (property1 == properties.price) {
			TicketsCopy[id][property1] = parseFloat(e.currentTarget.value);
		} else if (depth == 2 && property1 == properties.duration && property2 == properties.hours) {
			TicketsCopy[id][property1][property2] = parseFloat(e.currentTarget.value);
		} else if (depth == 2 && property1 == properties.duration && property2 == properties.additionalInfo) {
			if (lang == properties.ENG || lang == properties.EST || lang == properties.RUS) {
				TicketsCopy[id][property1][property2][lang] = e.currentTarget.value;
			}
		}
		setNewTickets(TicketsCopy);
	};
	return (
		<>
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
					console.log(newTickets);
                    console.log(newName);
                    createNewPriceListElement({
                        variables: { newPriceListElement: { name: { ...newName }, tickets: [...newTickets] } },
                        refetchQueries: [{query: GetPriceListDocument}]
                    });
				}}>
				<input type='text' placeholder='Nimi EST' onChange={e => { 
                    const newNameCopy = newName; 
                    newNameCopy.EST = e.currentTarget.value
                    setNewName(newNameCopy);
                }}/>
				<input type='text' placeholder='Nimi ENG' onChange={e => { 
                    const newNameCopy = newName; 
                    newNameCopy.ENG = e.currentTarget.value
                    setNewName(newNameCopy);
                }}/>
				<input type='text' placeholder='Nimi RUS' onChange={e => { 
                    const newNameCopy = newName; 
                    newNameCopy.RUS = e.currentTarget.value
                    setNewName(newNameCopy);
                }}/>
                {loading ? <p>Loading...</p> : <></>}
				<table className={styles.table}>
					<thead>
						<tr>
							<th>Teenuste nimetus</th>
							<th>Kestvus</th>
							<th>Uus hind</th>
						</tr>
					</thead>
					<tbody className={styles.tbody}>
						{newTickets.map((ticket, id) => (
							<tr key={id}>
								<td>
									<p>{id + 1}</p>
									<input
										id={`${id}`}
										name={`description`}
										className={["EST", styles.input].join(" ")}
										type='text'
										placeholder='Teenuse nimetus EST'
										onChange={(e) => {
											// const TicketsCopy = [...newTickets];
											// TicketsCopy[id].description.EST = e.currentTarget.value;
											// setNewTickets(TicketsCopy);
											handleChange(
												e,
												id,
												1,
												properties[e.currentTarget.name as properties],
												undefined,
												properties[e.currentTarget.classList[0] as properties]
											);
										}}
									/>
									<input
										id={`${id}`}
										name={`description`}
										className={["ENG", styles.input].join(" ")}
										type='text'
										placeholder='Teenuse nimetus ENG'
										onChange={(e) => {
											handleChange(
												e,
												id,
												1,
												properties[e.currentTarget.name as properties],
												undefined,
												properties[e.currentTarget.classList[0] as properties]
											);
										}}
									/>
									<input
										id={`${id}`}
										name={`description`}
										className={["RUS", styles.input].join(" ")}
										type='text'
										placeholder='Teenuse nimetus RUS'
										onChange={(e) => {
											handleChange(
												e,
												id,
												1,
												properties[e.currentTarget.name as properties],
												undefined,
												properties[e.currentTarget.classList[0] as properties]
											);
										}}
									/>
								</td>
								<td className='duration'>
									<input
										id={`${id}`}
										name={`hours`}
										type='number'
										step={"0.1"}
										onChange={(e) => {
											handleChange(
												e,
												id,
												2,
												properties[e.currentTarget.parentElement?.classList[0] as properties],
												properties[e.currentTarget.name as properties]
											);
										}}
									/>
									<input
										id={`${id}`}
										name={`additionalInfo`}
										className={["EST", styles.input].join(" ")}
										type='text'
										placeholder='Selgitus EST'
										onChange={(e) => {
											handleChange(
												e,
												id,
												2,
												properties[e.currentTarget.parentElement?.classList[0] as properties],
												properties[e.currentTarget.name as properties],
												properties[e.currentTarget.classList[0] as properties]
											);
										}}
									/>
									<input
										id={`${id}`}
										name={`additionalInfo`}
										className={["ENG", styles.input].join(" ")}
										type='text'
										placeholder='Selgitus ENG'
										onChange={(e) => {
											handleChange(
												e,
												id,
												2,
												properties[e.currentTarget.parentElement?.classList[0] as properties],
												properties[e.currentTarget.name as properties],
												properties[e.currentTarget.classList[0] as properties]
											);
										}}
									/>
									<input
										id={`${id}`}
										name={`additionalInfo`}
										className={["RUS", styles.input].join(" ")}
										type='text'
										placeholder='Selgitus RUS'
										onChange={(e) => {
											handleChange(
												e,
												id,
												2,
												properties[e.currentTarget.parentElement?.classList[0] as properties],
												properties[e.currentTarget.name as properties],
												properties[e.currentTarget.classList[0] as properties]
											);
										}}
									/>
								</td>
								<td>
									<input
										id={`${id}`}
										name={`price`}
										type='number'
										step={"0.1"}
										onChange={(e) => {
											handleChange(e, id, 1, properties[e.currentTarget.name as properties]);
										}}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<div className={styles.formBottomBtns}>
					<ButtonAdmin label={"Lisage teenus"} filled action={addTicket} />
					<input className={styles.submitBtn} type='submit' />
				</div>
			</form>
		</>
	);
};

const EditingForm = ({ priceListElement }: { priceListElement: PriceListElement }) => {
	return (
		<form className={styles.form} onSubmit={() => {}}>
			<input type='text' defaultValue={priceListElement.name.EST ?? ""} />
			<input type='text' defaultValue={priceListElement.name.ENG ?? ""} />
			<input type='text' defaultValue={priceListElement.name.RUS ?? ""} />
			<table>
				<thead>
					<tr>
						<th>Teenuste nimetus</th>
						<th>Kestvus</th>
						<th>Uus hind</th>
					</tr>
				</thead>
				<tbody>
					{priceListElement?.tickets ? (
						priceListElement?.tickets.map((ticket) => (
							<tr key={ticket?.description.ENG}>
								<td>
									<input type='text' defaultValue={ticket?.description.RUS ?? ""} />
									<input type='text' defaultValue={ticket?.description.EST ?? ""} />
									<input type='text' defaultValue={ticket?.description.ENG ?? ""} />
								</td>
								<td>
									<input type={"number"} step='0.1' defaultValue={ticket?.duration?.hours} />
									<input type='text' defaultValue={ticket?.duration?.additionalInfo?.RUS ?? ""} />
									<input type='text' defaultValue={ticket?.duration?.additionalInfo?.EST ?? ""} />
									<input type='text' defaultValue={ticket?.duration?.additionalInfo?.ENG ?? ""} />
								</td>
								<td>
									<input type='number' step={"0.1"} defaultValue={ticket?.price} />
								</td>
							</tr>
						))
					) : (
						<></>
					)}
				</tbody>
			</table>
		</form>
	);
};
