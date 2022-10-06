import { observer } from "mobx-react-lite";
import { FormEvent, ReactElement, useState } from "react";
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
	useGetCalendarEventsQuery,
} from "../../graphqlGenerated/graphql";
import AdminStore from "../../Stores/AdminStore";
import { NextPageWithLayout } from "../_app";
import { modalTypes } from "./Pricing";
import UploadFile from "../../components/AdminComponents/UploadFile";
import {getPage} from "../../components/AdminComponents/SimplePage/AdminSimplePageEditForm";
import DeleteFile from "../../components/AdminComponents/deleteFile";

const Gallery: NextPageWithLayout = () => {
	const [ showUploadFile, setShowUploadFile ] = useState(false);
	const [ showDeleteFile, setShowDeleteFile ] = useState(false);
	return (
		<>
			<UploadFile page={"Gallery"} show={showUploadFile} closeModal={() => setShowUploadFile(false)} />
			<ButtonAdmin border action={() => setShowUploadFile(true)} label={"Add images"} />

			<DeleteFile page={"Gallery"} show={showDeleteFile} closeModal={() => setShowDeleteFile(false)} />
			<ButtonAdmin border action={() => setShowDeleteFile(true)} label={"Delete images"} />
		</>
	);
};

Gallery.getLayout = function getLayout(Calendar: ReactElement) {
	return (
		<>
			<AdminLayout>{Calendar}</AdminLayout>
		</>
	);
};

export default observer(Gallery);