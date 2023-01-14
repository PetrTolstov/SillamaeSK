import { FormEvent } from "react";
import { FacilityInput, RoomInput } from "../../../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../../../ButtonAdmin";


type FacilityAddFormProps = { 
    onClose: () => void
    addFacility: (facility: FacilityInput) => void
}

export default function FacilityAddForm({onClose, addFacility}: FacilityAddFormProps) {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);

        const newFacility: FacilityInput = { 
            title: { 
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
        
        addFacility(newFacility);
        onClose();
    }

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h3>Facility title</h3>
				<div>
					<input type='text' placeholder="EST title" name={"nameEST"} />
					{/* <input type="text" placeholder="ENG name" name={"nameENG"}/> */}
					<input type='text' placeholder="RUS title" name={"nameRUS"} />
				</div>
			</div>
			<div>
				<h3>Facility description</h3>
				<div>
					<input type='text' placeholder="EST description" name={"descriptionEST"} />
					{/* <input type="text" placeholder="ENG name" name={"descriptionENG"} defaultValue={room?.description?.ENG ?? ""}/> */}
					<input type='text' placeholder="RUS description" name={"descriptionRUS"} />
				</div>
			</div>
            <ButtonAdmin border isSubmit action={()=>{}} label={"Submit"} />
		</form>
	);
}
