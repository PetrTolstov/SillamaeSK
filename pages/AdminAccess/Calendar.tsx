import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { FormEvent, ReactElement, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { AdminLayout } from ".";
import { ButtonAdmin } from "../../components/AdminComponents/ButtonAdmin";
import AddEventForm from "../../components/AdminComponents/Calendar/AddEventForm";
import EditEventForm from "../../components/AdminComponents/Calendar/EditEventForm";
import { EventAdminListElement } from "../../components/AdminComponents/Calendar/EventAdminListElement";
import GoBackPage from "../../components/AdminComponents/GoBackPage";
import ModalAdmin from "../../components/AdminComponents/ModalAdmin";
import {
	CalendarEvent,
	useDeleteCalendarEventMutation,
	useEditPageConfigMutation,
	useGetCalendarEventsLazyQuery,
	useGetCalendarEventsQuery,
	useGetPageConfigQuery,
} from "../../graphqlGenerated/graphql";
import AdminStore from "../../Stores/AdminStore";
import { NextPageWithLayout } from "../_app";
import { modalTypes } from "./Pricing";

const Calendar: NextPageWithLayout = () => {
	// limit for event elements to fetch
	const [limit, setLimit] = useState(10);
	const [offset, setOffset] = useState(0);
	const [currentCalendarEvent, setCurrentCalendarEvent] = useState<CalendarEvent>();
	const [modalType, setModalType] = useState<modalTypes>();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [eventList, setEventList] = useState<CalendarEvent[]>([]);
	const { data: configData, refetch: refetchConfig } = useGetPageConfigQuery({
		variables: {
			pageName: "Calendar",
		},
	});
	const [editConfig, {}] = useEditPageConfigMutation();
	const router = useRouter();
	const { data, loading, error, fetchMore, refetch } = useGetCalendarEventsQuery({
		variables: { options: { offset: 0, limit: limit } },
	});
	const pushToEventList = (dataToPush: CalendarEvent[] | null) => {
		const copyList = eventList;
		copyList.push(...(dataToPush ?? []));
		setEventList([...(dataToPush ?? [])]);
	};
	const [queryAgain, { data: queryData, loading: queryLoading, error: queryError }] = useGetCalendarEventsLazyQuery({
		onCompleted(data) {
			pushToEventList(data.GetCalendarEvents as CalendarEvent[]);
			setOffset(eventList.length);
		},
	});

	useEffect(() => {
		const length = data?.GetCalendarEvents?.length || 0;
		if (length > 0) {
			console.log("length  " + length);
			fetchMore({
				variables: {
					options: {
						offset: length,
						limit: limit,
					},
				},
			});
		}
	}, [data?.GetCalendarEvents?.length]);

	const [deleteEvent, { data: deleteData, loading: deleteLoading, error: deleteError }] =
		useDeleteCalendarEventMutation();

	const openEditModal = (EventListElement: CalendarEvent | undefined) => {
		if (EventListElement === undefined) return;
		setCurrentCalendarEvent(EventListElement);
		setModalType(modalTypes.editModal);
		setShowModal(true);
	};

	const openAddModal = () => {
		setModalType(modalTypes.addModal);
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

	if (!AdminStore.userInfo.isLoggedIn) {
		return <GoBackPage />;
	}

	return (
		<>
			<ModalAdmin isShowing={showModal} onClose={closeModal}>
				{modalType == modalTypes.addModal ? (
					<AddEventForm closeModal={closeModal} refetch={refetch} />
				) : modalType == modalTypes.editModal ? (
					<EditEventForm closeModal={closeModal} refetch={refetch} CalendarEvent={currentCalendarEvent} />
				) : (
					<></>
				)}
			</ModalAdmin>
			<div>
				<h1>Kalendar</h1>
				{false ? (
					<p>Loading...</p>
				) : (
					data?.GetCalendarEvents?.map((element, index) => (
						<EventAdminListElement
							key={element?._id}
							name={element?.name!}
							openEditModal={() => {
								openEditModal(element ?? undefined);
							}}
							deleteAction={() => {
								if (confirm("Delete event?")) {
									deleteEvent({
										variables: {
											id: element?._id,
										},
										onCompleted() {
											refetch();
										},
									});
								}
							}}
						/>
					))
				)}
				<div>
					Show Banner
					<input
						type='checkbox'
						defaultChecked={configData?.GetPageConfig?.showBanner ?? false}
						onChange={(e) => {
							console.log(e.target.checked);
							editConfig({
								variables: {
									pageName: "Calendar",
									newConfig: {
										pageName: "Calendar",
										showBanner: e.target.checked,
									},
								},
								onCompleted(data) {
									refetchConfig();
								},
							});
						}}
					/>
				</div>

				<InView
					onChange={async (inView) => {
						// if (inView) {
						//     queryAgain({ variables: {options: { offset: eventList.length, limit: limit}}, onCompleted(data) {
						//         console.log("SOME");
						//         pushToEventList(data.GetCalendarEvents as CalendarEvent[])
						//         setOffset(eventList.length);
						//     },})
						// }
					}}></InView>
				<ButtonAdmin filled label={"Lisa"} action={openAddModal} />
			</div>
		</>
	);
};

Calendar.getLayout = function getLayout(Calendar: ReactElement) {
	return (
		<>
			<AdminLayout>{Calendar}</AdminLayout>
		</>
	);
};

export default observer(Calendar);
