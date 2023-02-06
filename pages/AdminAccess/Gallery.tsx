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
	useEditPageConfigMutation,
	useGetCalendarEventsQuery,
    useGetPageConfigQuery,
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
    const {data: configData, refetch: refetchConfig} = useGetPageConfigQuery({ variables: { 
        pageName: "Gallery"
    }})
    const [editConfig, {}] = useEditPageConfigMutation();

    if(!AdminStore.userInfo.isLoggedIn) return <GoBackPage/>
	return (
		<>
			<UploadFile page={"Gallery"} show={showUploadFile} closeModal={() => setShowUploadFile(false)} />
			<ButtonAdmin border action={() => setShowUploadFile(true)} label={"Add images"} />

			<DeleteFile page={"Gallery"} show={showDeleteFile} closeModal={() => setShowDeleteFile(false)} />
			<ButtonAdmin border action={() => setShowDeleteFile(true)} label={"Delete images"} />
            <h6>Show banner</h6>
            <input type="checkbox" defaultChecked={configData?.GetPageConfig?.showBanner ?? false} onChange={e => { 
                    
                    editConfig({ variables: { 
                        pageName: "Gallery", 
                        newConfig: { 
                            pageName: "Gallery", 
                            showBanner: e.target.checked
                        }
                    }, onCompleted(data) {
                        refetchConfig()
                    },})
                }} />
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
