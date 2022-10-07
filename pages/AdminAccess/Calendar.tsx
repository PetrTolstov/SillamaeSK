import { observer } from "mobx-react-lite";
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
	useAddCalendarEventMutation,
	useDeleteCalendarEventMutation,
	useGetCalendarEventsLazyQuery,
	useGetCalendarEventsQuery,
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

	// const { data, loading, error, refetch } = useGetCalendarEventsQuery({
	// 	variables: { options: { offset: 0, limit: 10 } },
	// 	onCompleted(data) {
	// 		pushToEventList(data.GetCalendarEvents as CalendarEvent[]);
	// 	},
	// });
    const pushToEventList = (dataToPush: CalendarEvent[] | null) => {
        console.log("object");
		const copyList = eventList;
		copyList.push(...(dataToPush ?? []));
		setEventList(copyList);
	};
    const [ queryAgain, {data: queryData, loading: queryLoading, error: queryError}] = useGetCalendarEventsLazyQuery({ onCompleted(data) {
        pushToEventList(data.GetCalendarEvents as CalendarEvent[]);
    },});

    useEffect(() => { 
        queryAgain({ variables: {options: { offset: offset, limit: limit}}})
    }, [eventList])

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

	const refetchQuery = async () => {
        // const currentLength = data?.GetCalendarEvents?.length || 0;
        // refetch({ options: { offset: 0, limit: 10}});
	    // await fetchMore({variables : { options: { offset: 0, limit: currentLength * 2}}})
	};

	return (
		<>
			<ModalAdmin isShowing={showModal} onClose={closeModal}>
				{modalType == modalTypes.addModal ? (
					<AddEventForm closeModal={closeModal} refetch={refetchQuery} />
				) : modalType == modalTypes.editModal ? (
					<EditEventForm
						closeModal={closeModal}
						refetch={refetchQuery}
						CalendarEvent={currentCalendarEvent}
					/>
				) : (
					<></>
				)}
			</ModalAdmin>
			<div>
				<h1>Kalendar</h1>
				{false ? (
					<p>Loading...</p>
				) : (
					eventList.map((element, index) => (
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
											refetchQuery();
										},
									});
								}
							}}
						/>
					))
				)}
				<InView
					onChange={async (inView) => {
						
						if (inView) {
                            setOffset(eventList.length);
                            console.log(offset);
                            queryAgain({ variables: {options: { offset: eventList.length, limit: limit}}, onCompleted(data) {
                                console.log("SOME");
                                console.log(data.GetCalendarEvents as CalendarEvent[]);
                                pushToEventList(data.GetCalendarEvents as CalendarEvent[])
                            },})
						}
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
