import { FormEvent } from "react";
import { useAddCalendarEventMutation } from "../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../ButtonAdmin";

const AddEventForm = ({closeModal, refetch} : {closeModal: () => void, refetch: () => void}) => {

    const [addEvent, {data, loading, error}] = useAddCalendarEventMutation(); 

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
            startTime: data.get("startTime")?.toString(),
            endTime: data.get("endTime")?.toString(),
            place: data.get("address")?.toString(),
        }


        addEvent({variables: { 
            newEvent: newObj
        }, onCompleted(data) {
            refetch();
            alert(data.AddCalendarEvent); 
            closeModal()
        },})

    }
	return (
		<div style={{ width: "600px" }}>
			<form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
				<div style={{ display: "flex", flexDirection: "column", paddingBottom: "30px" }}>
					<h4>Title</h4>
					<label htmlFor='name-EST'>EST</label>
					<input type='text' name={"name-EST"} placeholder={"Title EST"} />
					<label htmlFor='name-RUS'>RUS</label>
					<input type='text' name={"name-RUS"} placeholder={"Title RUS"} />
					<label htmlFor='name-RUS'>ENG</label>
					<input type='text' name={"name-ENG"} placeholder={"Title ENG"} />
					<h4>Kuupäev ja kellaaeg</h4>
					<input type='date' name={"date"} />
					<div>
						<input type={"time"} name={"startTime"} />
						-
						<input type={"time"} name={"endTime"} />
					</div>
					<h4>Aadress</h4>
					<input type='text' name={"address"} placeholder='Aadress' />
					<h4>Link</h4>
					<input type='link' name={"link"} placeholder='Link' />
					<div style={{ marginTop: "30px", alignSelf: "flex-start" }}>
						<ButtonAdmin isSubmit filled action={() => {}} label={"Submit"} />
					</div>
				</div>
				<div style={{ display: "flex", flexDirection: "column", paddingBottom: "30px" }}>
					<h4>Kirjeldus</h4>
					<label htmlFor='description-EST'>EST</label>
					<textarea
						style={{ resize: "none" }}
						cols={20}
						rows={5}
						name={"description-EST"}
						placeholder={"Kirjeldus EST"}
					/>
					<label htmlFor='description-RUS'>RUS</label>
					<textarea
						style={{ resize: "none" }}
						cols={20}
						rows={5}
						name={"description-RUS"}
						placeholder={"Описание RUS"}
					/>
					<label htmlFor='description-ENG'>ENG</label>
					<textarea
						style={{ resize: "none" }}
						cols={20}
						rows={5}
						name={"description-ENG"}
						placeholder={"Description ENG"}
					/>
				</div>
			</form>
		</div>
	);
}

export default AddEventForm