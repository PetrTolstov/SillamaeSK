import React, { FormEvent } from "react";
import { CalendarEvent, GetCalendarEventsDocument, useAddCalendarEventMutation, useGetCalendarEventByIdQuery, useGetCalendarEventsQuery, useUpdateCalendarEventMutation } from "../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../ButtonAdmin";
import frameStyles from "../../../styles/FormStyles.module.css";

const EditEventForm = ({CalendarEvent, refetch, closeModal}: {CalendarEvent: CalendarEvent | undefined, refetch: ()=>void, closeModal: ()=>void}) =>  {

    const [editEvent, {data: editData, loading: editLoading, error: editError}] = useUpdateCalendarEventMutation(); 

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => { 
        event.preventDefault(); 

        const data = new FormData(event.currentTarget); 

        const newObj = { 
            name: { 
                RUS: data.get("name-RUS")?.toString(), 
                EST: data.get("name-EST")?.toString(),
                ENG: data.get("name-ENG")?.toString(),
            }, 

            eventDescription: { 
                RUS: data.get("description-RUS")?.toString(), 
                EST: data.get("description-EST")?.toString(),
                ENG: data.get("description-ENG")?.toString(),
            }, 
            link: data.get("link")?.toString(), 
            date: data.get("date")?.toString(),
            startTime: `${data.get("startTime")?.toString()}`,
            endTime: `${data.get("endTime")?.toString()}`,
            place: data.get("address")?.toString(),
        }

        editEvent({variables: { 
            id: CalendarEvent?._id ?? "",
            newContent: newObj
        }, onCompleted(data) {
            refetch();
            alert(data.UpdateCalendarEvent); 
            closeModal();
        }})

    }
	return (
		<div style={{ width: "600px" }}>
			<form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
				<div style={{ display: "flex", flexDirection: "column", paddingBottom: "30px" }}>
					<h4>Title</h4>
					<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
						<label htmlFor='name-EST'>EST</label>
						<input type='text' name={"name-EST"} placeholder={"Title EST"} defaultValue={CalendarEvent?.name?.EST ?? ""} className={frameStyles.input}/>
						<span className={frameStyles.focusBorder}></span>
					</div>
					<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
						<label htmlFor='name-RUS'>RUS</label>
						<input type='text' name={"name-RUS"} placeholder={"Title RUS"} defaultValue={CalendarEvent?.name?.RUS ?? ""} className={frameStyles.input}/>
						<span className={frameStyles.focusBorder}></span>
					</div>
					<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
						<label htmlFor='name-RUS'>ENG</label>
						<input type='text' name={"name-ENG"} placeholder={"Title ENG"} defaultValue={CalendarEvent?.name?.ENG ?? ""} className={frameStyles.input}/>
						<span className={frameStyles.focusBorder}></span>
					</div>
					<h4>Kuupäev ja kellaaeg</h4>
					<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
						<input type='date' name={"date"} defaultValue={CalendarEvent?.date ?? new Date().toLocaleDateString()} className={frameStyles.input}/>
						<span className={frameStyles.focusBorder}></span>
					</div>
					<div>
						<input type={"time"} name={"startTime"} defaultValue={CalendarEvent?.startTime ?? ""} />
						-
						<input type={"time"} name={"endTime"} defaultValue={CalendarEvent?.endTime ?? ""}/>
					</div>
					<h4>Aadress</h4>
					<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
						<input type='text' name={"address"} placeholder='Aadress' defaultValue={CalendarEvent?.place ?? ""} className={frameStyles.input}/>
						<span className={frameStyles.focusBorder}></span>
					</div>
					<h4>Link</h4>
					<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
						<input type='link' name={"link"} placeholder='Link' defaultValue={CalendarEvent?.link ?? ""} className={frameStyles.input}/>
						<span className={frameStyles.focusBorder}></span>
					</div>
					<div style={{ marginTop: "30px", alignSelf: "flex-start" }}>
						<ButtonAdmin isSubmit filled action={() => {}} label={"Submit"} />
					</div>
				</div>
				<div style={{ display: "flex", flexDirection: "column", paddingBottom: "30px" }}>
					<h4>Kirjeldus</h4>
					<div style={{ marginTop: "30px", alignSelf: "flex-start" }}>
						<label htmlFor='description-EST'>EST</label>
						<textarea
						style={{ resize: "none" }}
						cols={20}
						rows={5}
						name={"description-EST"}
						placeholder={"Kirjeldus EST"}
                        defaultValue={CalendarEvent?.eventDescription?.EST ?? ""}
						className={frameStyles.input}/>
						<span className={frameStyles.focusBorder}></span>
					</div>
					<div style={{ marginTop: "30px", alignSelf: "flex-start" }}>
						<label htmlFor='description-RUS'>RUS</label>
						<textarea
						style={{ resize: "none" }}
						cols={20}
						rows={5}
						name={"description-RUS"}
						placeholder={"Описание RUS"}
                        defaultValue={CalendarEvent?.eventDescription?.RUS ?? ""}
						className={frameStyles.input}/>
						<span className={frameStyles.focusBorder}></span>
					</div>
					<div style={{ marginTop: "30px", alignSelf: "flex-start" }}>
						<label htmlFor='description-ENG'>ENG</label>
						<textarea
						style={{ resize: "none" }}
						cols={20}
						rows={5}
						name={"description-ENG"}
						placeholder={"Description ENG"}
                        defaultValue={CalendarEvent?.eventDescription?.ENG ?? ""}
						className={frameStyles.input}/>
						<span className={frameStyles.focusBorder}></span>
					</div>
				</div>
			</form>
		</div>
	);
}

export default EditEventForm