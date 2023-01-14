import { FormEvent } from "react";
import { Room, RoomInput } from "../../../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../../../ButtonAdmin";

export type RoomEditingFormProps = { 
    room: Room
    onClose: () => void
    updateRoom: (updatedRoom: RoomInput) => void 
}
export default function RoomEditingForm({room, onClose, updateRoom}: RoomEditingFormProps) {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);

        const updatedRoom: RoomInput = { 
            name: { 
                EST: formData.get("nameEST")?.toString(),
                ENG: "",
                RUS: formData.get("nameRUS")?.toString()
            }, 
            description: { 
                EST: formData.get("descriptionEST")?.toString(),
                ENG: "",
                RUS: formData.get("descriptionRUS")?.toString()
            }
        }

        // publish to db 
        updateRoom(updatedRoom);
        onClose();
    }   

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h3>Room name</h3>
				<div>
					<input type='text' name={"nameEST"} defaultValue={room?.name?.EST ?? ""} />
					{/* <input type="text" name={"nameENG"} defaultValue={room?.name?.ENG ?? ""}/> */}
					<input type='text' name={"nameRUS"} defaultValue={room?.name?.RUS ?? ""} />
				</div>
			</div>
			<div>
				<h3>Room description</h3>
				<div>
					<input type='text' name={"descriptionEST"} defaultValue={room?.description?.EST ?? ""} />
					{/* <input type="text" name={"descriptionENG"} defaultValue={room?.description?.ENG ?? ""}/> */}
					<input type='text' name={"descriptionRUS"} defaultValue={room?.description?.RUS ?? ""} />
				</div>
			</div>
            <ButtonAdmin border isSubmit action={()=>{}} label={"Submit"} />
		</form>
	);
}
