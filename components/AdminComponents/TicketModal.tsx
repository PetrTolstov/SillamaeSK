import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import {
	PriceListElement,
	PriceListElementInput,
	useCreateNewPriceListElementMutation,
	GetPriceListDocument,
	useChangePriceListElementByIdMutation,
	Ticket,
	useGetPriceListElementByIdQuery,
    GetPriceListElementByIdDocument,
    useGetPriceListElementByIdLazyQuery,
    MutationUpdatePriceListElementByIdArgs,
} from "../../graphqlGenerated/graphql";
import { modalTypes } from "../../pages/AdminAccess/Pricing";
import styles from "../../styles/ModalAdmin.module.css";
import { ButtonAdmin } from "./ButtonAdmin";
import { gql } from "@apollo/client";
import Image from "next/image";
import Bin from "../../public/Bin.svg";
import frameStyles from "../../styles/FormStyles.module.css";

type TicketModalProps = {
	priceListElementId?: string;
	modalType: modalTypes | undefined;
	closeModal: () => void;
};
enum ticketProperties {
	description = "description",
	duration = "duration",
	additionalInfo = "additionalInfo",
	EST = "EST",
	ENG = "ENG",
	RUS = "RUS",
	hours = "hours",
	price = "price",
}
type handleChangeArgs = {
	objToCopy: any;
	func: (
		TicketsCopy: {
			description: { RUS: string; ENG: string; EST: string };
			duration: { hours: number; additionalInfo: { RUS: string; ENG: string; EST: string } };
			price: number;
		}[]
	) => void;
	e: React.ChangeEvent<HTMLInputElement>;
	id: number;
	depth: number;
	property1: ticketProperties;
	property2?: ticketProperties;
	lang?: ticketProperties;
};
type FormProps = {
	handleChange: ({}: handleChangeArgs) => void;
	closeModal: () => void;
};
// props -> priceListElement object
export const TicketModal = ({ priceListElementId, modalType, closeModal }: TicketModalProps) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "scroll";
		};
	}, []);

	const [priceListElement, setPriceListElement] = useState<PriceListElement>();
    const { data, loading, error } = useGetPriceListElementByIdQuery({ variables: { id: priceListElementId! }, onCompleted(data) {
        setPriceListElement(data.GetPriceListElementById)
    }, });
    const [ lazyGetPriceListElementById, {data: lazyData, error: lazyError, loading: lazyLoading} ] = useGetPriceListElementByIdLazyQuery({ variables: { id: priceListElementId!}, onCompleted(data) {
        setPriceListElement(data.GetPriceListElementById);
    },})

	// depth: 1 or 2
	const handleChange = ({ objToCopy, func, e, id, depth, property1, property2, lang }: handleChangeArgs): void => {
		const TicketsCopy = JSON.parse(JSON.stringify(objToCopy));
		if (depth == 1 && property1 == ticketProperties.description) {
			if (lang == ticketProperties.ENG || lang == ticketProperties.EST || lang == ticketProperties.RUS) {
				TicketsCopy[id][property1][lang] = e.currentTarget.value;
			}
		} else if (property1 == ticketProperties.price) {
			TicketsCopy[id][property1] = parseFloat(e.currentTarget.value);
		} else if (depth == 2 && property1 == ticketProperties.duration && property2 == ticketProperties.hours) {
			TicketsCopy[id][property1][property2] = parseFloat(e.currentTarget.value);
		} else if (
			depth == 2 &&
			property1 == ticketProperties.duration &&
			property2 == ticketProperties.additionalInfo
		) {
			if (lang == ticketProperties.ENG || lang == ticketProperties.EST || lang == ticketProperties.RUS) {
				TicketsCopy[id][property1][property2][lang] = e.currentTarget.value;
			}
		}

		func(TicketsCopy);
	};

	return (
		<>
			<div className={styles.shadow}></div>
			<div className={styles.container}>
				<h2>Header</h2>
				{loading ? (
					<p>Loading...</p>
				) : modalType == modalTypes.editModal ? (
					<EditingForm
						closeModal={closeModal}
						handleChange={handleChange}
						priceListElement={priceListElement!}
					/>
				) : (
					<AddingForm closeModal={closeModal} handleChange={handleChange} />
				)}

				<div>
					<ButtonAdmin label={"CLOSE"} action={closeModal} />
				</div>
			</div>
		</>
	);
};

const AddingForm = ({ handleChange, closeModal }: FormProps) => {
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
	return (
		<>
			<form
				className={styles.form}
				onSubmit={(e) => {
					e.preventDefault();
					createNewPriceListElement({
						variables: { newPriceListElement: { name: { ...newName }, tickets: [...newTickets] } },
						refetchQueries: [{ query: GetPriceListDocument }],
					});
					closeModal();
				}}>
				<div className={frameStyles.flexCon} style={{width: 'fit-content'}}>
					<input
						type='text'
						placeholder='Nimi EST'
						onChange={(e) => {
							const newNameCopy = newName;
							newNameCopy.EST = e.currentTarget.value;
							setNewName(newNameCopy);
						}}
						className={frameStyles.input}
					/>
					<span className={frameStyles.focusBorder}></span>
				</div>

				<div className={frameStyles.flexCon} style={{width: 'fit-content'}}>
					<input
						type='text'
						placeholder='Nimi ENG'
						onChange={(e) => {
							const newNameCopy = newName;
							newNameCopy.ENG = e.currentTarget.value;
							setNewName(newNameCopy);
						}}
						className={frameStyles.input}
					/>
					<span className={frameStyles.focusBorder}></span>
				</div>

				<div className={frameStyles.flexCon} style={{width: 'fit-content'}}>
					<input
						type='text'
						placeholder='Nimi RUS'
						onChange={(e) => {
							const newNameCopy = newName;
							newNameCopy.RUS = e.currentTarget.value;
							setNewName(newNameCopy);
						}}
						className={frameStyles.input}
					/>
					<span className={frameStyles.focusBorder}></span>
				</div>
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
									<div className={frameStyles.flexCon} style={{width: 'fit-content', margin: 'auto'}}>
										<input
											id={`${id}`}
											name={`description`}
											className={["EST", styles.input].join(" ") && frameStyles.input}
											type='text'
											placeholder='Teenuse nimetus EST'
											onChange={(e) => {
												// const TicketsCopy = [...newTickets];
												// TicketsCopy[id].description.EST = e.currentTarget.value;
												// setNewTickets(TicketsCopy);
												handleChange({
													objToCopy: newTickets,
													func: setNewTickets,
													e,
													id,
													depth: 1,
													property1: ticketProperties[e.currentTarget.name as ticketProperties],
													property2: undefined,
													lang: ticketProperties[
														e.currentTarget.classList[0] as ticketProperties
													],
												});
											}}

										/>
										<span className={frameStyles.focusBorder}></span>
									</div>
									<div className={frameStyles.flexCon} style={{width: 'fit-content' , margin: 'auto'}}>
										<input
											id={`${id}`}
											name={`description`}
											className={["ENG", styles.input].join(" ") && frameStyles.input}
											type='text'
											placeholder='Teenuse nimetus ENG'
											onChange={(e) => {
												handleChange({
													objToCopy: newTickets,
													func: setNewTickets,
													e,
													id,
													depth: 1,
													property1: ticketProperties[e.currentTarget.name as ticketProperties],
													property2: undefined,
													lang: ticketProperties[
														e.currentTarget.classList[0] as ticketProperties
													],
												});
											}}
										/>
										<span className={frameStyles.focusBorder}></span>
									</div>

									<div className={frameStyles.flexCon} style={{width: 'fit-content', margin: 'auto'}}>
									<input
										id={`${id}`}
										name={`description`}
										className={["RUS", styles.input].join(" ") && frameStyles.input}
										type='text'
										placeholder='Teenuse nimetus RUS'
										onChange={(e) => {
											handleChange({
												objToCopy: newTickets,
												func: setNewTickets,
												e,
												id,
												depth: 1,
												property1: ticketProperties[e.currentTarget.name as ticketProperties],
												property2: undefined,
												lang: ticketProperties[
													e.currentTarget.classList[0] as ticketProperties
												],
											});
										}}
									/>
										<span className={frameStyles.focusBorder}></span>
									</div>
								</td>
								<td className='duration'>
									<div className={frameStyles.flexCon} style={{width: 'fit-content', margin: 'auto'}}>
										<input
											id={`${id}`}
											name={`hours`}
											type='number'
											step={"0.1"}
											onChange={(e) => {
												handleChange({
													objToCopy: newTickets,
													func: setNewTickets,
													e,
													id,
													depth: 2,
													property1:
														ticketProperties[
															e.currentTarget.parentElement?.classList[0] as ticketProperties
														],
													property2: ticketProperties[e.currentTarget.name as ticketProperties],
												});
											}}
											className={frameStyles.input}
										/>
										<span className={frameStyles.focusBorder}></span>
									</div>

									<div className={frameStyles.flexCon} style={{width: 'fit-content', margin: 'auto'}}>
										<input
											id={`${id}`}
											name={`additionalInfo`}
											className={["EST", styles.input].join(" ") && frameStyles.input}
											type='text'
											placeholder='Selgitus EST'
											onChange={(e) => {
												handleChange({
													objToCopy: newTickets,
													func: setNewTickets,
													e,
													id,
													depth: 2,
													property1:
														ticketProperties[
															e.currentTarget.parentElement?.classList[0] as ticketProperties
														],
													property2: ticketProperties[e.currentTarget.name as ticketProperties],
													lang: ticketProperties[
														e.currentTarget.classList[0] as ticketProperties
													],
												});
											}}

										/>
										<span className={frameStyles.focusBorder}></span>
									</div>

									<div className={frameStyles.flexCon} style={{width: 'fit-content', margin: 'auto'}}>
										<input
											id={`${id}`}
											name={`additionalInfo`}
											className={["ENG", styles.input].join(" ") && frameStyles.input}
											type='text'
											placeholder='Selgitus ENG'
											onChange={(e) => {
												handleChange({
													objToCopy: newTickets,
													func: setNewTickets,
													e,
													id,
													depth: 2,
													property1:
														ticketProperties[
															e.currentTarget.parentElement?.classList[0] as ticketProperties
														],
													property2: ticketProperties[e.currentTarget.name as ticketProperties],
													lang: ticketProperties[
														e.currentTarget.classList[0] as ticketProperties
													],
												});
											}}
										/>
										<span className={frameStyles.focusBorder}></span>
									</div>

									<div className={frameStyles.flexCon} style={{width: 'fit-content', margin: 'auto'}}>
										<input
											id={`${id}`}
											name={`additionalInfo`}
											className={["RUS", styles.input].join(" ") && frameStyles.input}
											type='text'
											placeholder='Selgitus RUS'
											onChange={(e) => {
												handleChange({
													objToCopy: newTickets,
													func: setNewTickets,
													e,
													id,
													depth: 2,
													property1:
														ticketProperties[
															e.currentTarget.parentElement?.classList[0] as ticketProperties
														],
													property2: ticketProperties[e.currentTarget.name as ticketProperties],
													lang: ticketProperties[
														e.currentTarget.classList[0] as ticketProperties
													],
												});
											}}
										/>
										<span className={frameStyles.focusBorder}></span>
									</div>

									<br/>
								</td>
								<td style={{display: "flex", justifyContent: 'space-around'}}>
									<div className={frameStyles.flexCon} style={{width: 'fit-content'}}>
										<input
											id={`${id}`}
											name={`price`}
											type='number'
											step={"0.1"}
											onChange={(e) => {
												handleChange({
													objToCopy: newTickets,
													func: setNewTickets,
													e,
													id,
													depth: 1,
													property1: ticketProperties[e.currentTarget.name as ticketProperties],
												});
											}}
											className={frameStyles.input}
										/>
										<span className={frameStyles.focusBorder}></span>
									</div>
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

const EditingForm = ({
	priceListElement,
	handleChange,
	closeModal,
}: { priceListElement: PriceListElement } & FormProps ) => {
	const [updatePriceElement, { data, loading, error }] = useChangePriceListElementByIdMutation();
	const [name, setName] = useState({ ...priceListElement.name });
	const [tickets, setTickets] = useState([...priceListElement.tickets!]);
	useEffect(() => {
		// console.log(tickets);
	}, [tickets]);
	const deleteTicket = (id: number) => {
		const ticketsCopy = tickets;
		delete ticketsCopy[id]; 
		updatePriceElement({
			variables: {
				id: priceListElement._id,
				updatedPriceListElement: {
					name: { ...name },
					tickets: [...ticketsCopy],
				},
			},
			refetchQueries: [{ query: GetPriceListElementByIdDocument, variables: {id: priceListElement._id} }],
		});
	};

	const addTicket = () => {
		setTickets((prevTickets) => [
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
	return (
		<form
			className={styles.form}
			onSubmit={(e) => {
				e.preventDefault();
				const newUpdated: PriceListElementInput = {
					name: { ...name },
					tickets: [...tickets],
				};
				updatePriceElement({
					variables: {
						id: priceListElement._id,
						updatedPriceListElement: newUpdated,
					},
					refetchQueries: [{ query: GetPriceListElementByIdDocument, variables: {id: priceListElement._id} }],
				}).catch((e) => {
					console.log(e);
					e.networkError.result.errors.map((e: { message: any }) => {
						console.log(e.message);
					});
				});
				closeModal();
			}}>

			<div className={frameStyles.flexCon} style={{width: "50%"}}>
				<input
					type='text'
					defaultValue={name.EST ?? ""}
					onChange={(e) => {
						const copyName = name;
						copyName.EST = e.currentTarget.value;
						setName(copyName);
					}}
					className={frameStyles.input}
				/>
				<span className={frameStyles.focusBorder}></span>
			</div>


			<div className={frameStyles.flexCon} style={{width: "50%"}}>
				<input
					type='text'
					defaultValue={name.ENG ?? ""}
					onChange={(e) => {
						const copyName = name;
						copyName.ENG = e.currentTarget.value;
						setName(copyName);
					}}
					className={frameStyles.input}
				/>
				<span className={frameStyles.focusBorder}></span>
			</div>

			<div className={frameStyles.flexCon} style={{width: "50%"}}>
			<input
				type='text'
				defaultValue={name.RUS ?? ""}
				onChange={(e) => {
					const copyName = name;
					copyName.RUS = e.currentTarget.value;
					setName(copyName);
				}}
				className={frameStyles.input}
			/>
				<span className={frameStyles.focusBorder}></span>
			</div>

			<table className={styles.table}>
				<thead>
					<tr>
						<th>Teenuste nimetus</th>
						<th>Kestvus</th>
						<th>Uus hind</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{tickets.map((ticket, id) => (
						<tr key={id}>
							<td>
								<div className={frameStyles.flexCon}>
									<input
										id={`${id}`}
										name={`description`}
										defaultValue={tickets[id]?.description.EST ?? ""}
										className={["EST", styles.input].join(" ") && frameStyles.input}
										type='text'
										placeholder='Teenuse nimetus EST'
										onChange={(e) => {
											handleChange({
												objToCopy: tickets,
												func: setTickets,
												e,
												id,
												depth: 1,
												property1: ticketProperties[e.currentTarget.name as ticketProperties],
												property2: undefined,
												lang: ticketProperties[e.currentTarget.classList[0] as ticketProperties],
											});
										}}
									/>
									<span className={frameStyles.focusBorder}></span>
								</div>
								<div className={frameStyles.flexCon}>
									<input
										id={`${id}`}
										name={`description`}
										defaultValue={ticket?.description.ENG ?? ""}
										className={["ENG", styles.input].join(" ")  && frameStyles.input}
										type='text'
										placeholder='Teenuse nimetus ENG'
										onChange={(e) => {
											handleChange({
												objToCopy: tickets,
												func: setTickets,
												e,
												id,
												depth: 1,
												property1: ticketProperties[e.currentTarget.name as ticketProperties],
												property2: undefined,
												lang: ticketProperties[e.currentTarget.classList[0] as ticketProperties],
											});
										}}
									/>
									<span className={frameStyles.focusBorder}></span>
								</div>

								<div className={frameStyles.flexCon}>
									<input
										id={`${id}`}
										name={`description`}
										defaultValue={ticket?.description.RUS ?? ""}
										className={["RUS", styles.input].join(" ") && frameStyles.input}
										type='text'
										placeholder='Teenuse nimetus RUS'
										onChange={(e) => {
											handleChange({
												objToCopy: tickets,
												func: setTickets,
												e,
												id,
												depth: 1,
												property1: ticketProperties[e.currentTarget.name as ticketProperties],
												property2: undefined,
												lang: ticketProperties[e.currentTarget.classList[0] as ticketProperties],
											});
										}}
									/>
									<span className={frameStyles.focusBorder}></span>
								</div>
							</td>
							<td className='duration'>
								<div className={frameStyles.flexCon}>
									<input
										id={`${id}`}
										name={`hours`}
										defaultValue={`${ticket?.duration?.hours}` ?? ""}
										type='number'
										step={"0.1"}
										onChange={(e) => {
											handleChange({
												objToCopy: tickets,
												func: setTickets,
												e,
												id,
												depth: 2,
												property1:
													ticketProperties[
														e.currentTarget.parentElement?.classList[0] as ticketProperties
													],
												property2: ticketProperties[e.currentTarget.name as ticketProperties],
											});
										}}
										className={frameStyles.input}
									/>
									<span className={frameStyles.focusBorder}></span>
								</div>

								<div className={frameStyles.flexCon}>
									<input
										id={`${id}`}
										name={`additionalInfo`}
										defaultValue={ticket?.duration?.additionalInfo?.EST ?? ""}
										className={["EST", styles.input].join(" ") && frameStyles.input}
										type='text'
										placeholder='Teenuse nimetus EST'
										onChange={(e) => {
											handleChange({
												objToCopy: tickets,
												func: setTickets,
												e,
												id,
												depth: 2,
												property1:
													ticketProperties[
														e.currentTarget.parentElement?.classList[0] as ticketProperties
													],
												property2: ticketProperties[e.currentTarget.name as ticketProperties],
												lang: ticketProperties[e.currentTarget.classList[0] as ticketProperties],
											});
										}}

									/>
									<span className={frameStyles.focusBorder}></span>
								</div>

								<div className={frameStyles.flexCon}>
								<input
									id={`${id}`}
									name={`additionalInfo`}
									defaultValue={ticket?.duration?.additionalInfo?.ENG ?? ""}
									className={["ENG", styles.input].join(" ") && frameStyles.input}
									type='text'
									placeholder='Teenuse nimetus ENG'
									onChange={(e) => {
										handleChange({
											objToCopy: tickets,
											func: setTickets,
											e,
											id,
											depth: 2,
											property1:
												ticketProperties[
													e.currentTarget.parentElement?.classList[0] as ticketProperties
												],
											property2: ticketProperties[e.currentTarget.name as ticketProperties],
											lang: ticketProperties[e.currentTarget.classList[0] as ticketProperties],
										});
									}}
								/>
									<span className={frameStyles.focusBorder}></span>
								</div>
								<div className={frameStyles.flexCon}>
									<input
										id={`${id}`}
										name={`additionalInfo`}
										defaultValue={ticket?.duration?.additionalInfo?.RUS ?? ""}
										className={["RUS", styles.input].join(" ") && frameStyles.input}
										type='text'
										placeholder='Teenuse nimetus RUS'
										onChange={(e) => {
											handleChange({
												objToCopy: tickets,
												func: setTickets,
												e,
												id,
												depth: 2,
												property1:
													ticketProperties[
														e.currentTarget.parentElement?.classList[0] as ticketProperties
													],
												property2: ticketProperties[e.currentTarget.name as ticketProperties],
												lang: ticketProperties[e.currentTarget.classList[0] as ticketProperties],
											});
										}}
									/>
									<span className={frameStyles.focusBorder}></span>
								</div>
							</td>
							<td>
								<div className={frameStyles.flexCon}>
									<input
										id={`${id}`}
										name={`price`}
										defaultValue={`${ticket?.price}` ?? ""}
										type='number'
										step={"0.1"}
										onChange={(e) => {
											handleChange({
												objToCopy: tickets,
												func: setTickets,
												e,
												id,
												depth: 1,
												property1: ticketProperties[e.currentTarget.name as ticketProperties],
											});
										}}

										className={frameStyles.input}
									/>
									<span className={frameStyles.focusBorder}></span>
								</div>
							</td>
							<td className={styles.RemoveRawButton}>
								<ButtonAdmin
									border
									label={<Image src={Bin} width={23} height={20} />}
									action={() => {
										deleteTicket(id);
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
	);
};
