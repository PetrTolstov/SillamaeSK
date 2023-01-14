import { FormEvent } from "react";
import { RoomInput } from "../../../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../../../ButtonAdmin";


type RoomAddFormProps = { 
    onClose: () => void
    addRoom: (room: RoomInput) => void
}

export default function RoomAddForm({onClose, addRoom}: RoomAddFormProps) {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);

        const newRoom: RoomInput = { 
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
        
        addRoom(newRoom);
        onClose();
    }

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h3>Room name</h3>
				<div>
					<input type='text' placeholder="EST name" name={"nameEST"} />
					{/* <input type="text" placeholder="ENG name" name={"nameENG"}/> */}
					<input type='text' placeholder="RUS name" name={"nameRUS"} />
				</div>
			</div>
			<div>
				<h3>Room description</h3>
				<div>
					<input type='text' placeholder="EST name" name={"descriptionEST"} />
					{/* <input type="text" placeholder="ENG name" name={"descriptionENG"} defaultValue={room?.description?.ENG ?? ""}/> */}
					<input type='text' placeholder="RUS name" name={"descriptionRUS"} />
				</div>
			</div>
            <ButtonAdmin border isSubmit action={()=>{}} label={"Submit"} />
		</form>
	);
}
