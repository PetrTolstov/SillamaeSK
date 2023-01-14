import { FormEvent } from "react";
import { Facility, FacilityInput, Room, RoomInput } from "../../../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../../../ButtonAdmin";

export type FacilityEditingFormProps = { 
    facility: Facility
    onClose: () => void
    updateFacility: (updatedFacility: FacilityInput) => void 
}
export default function FacilityEditingForm({facility, onClose, updateFacility}: FacilityEditingFormProps) {

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault(); 
        const formData = new FormData(e.currentTarget);

        const updatedFacility: FacilityInput = { 
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

        // publish to db 
        updateFacility(updatedFacility);
        onClose();
    }   

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<h3>Facility title</h3>
				<div>
					<input type='text' name={"nameEST"} defaultValue={facility?.title?.EST ?? ""} />
					{/* <input type="text" name={"nameENG"} defaultValue={room?.name?.ENG ?? ""}/> */}
					<input type='text' name={"nameRUS"} defaultValue={facility?.title?.RUS ?? ""} />
				</div>
			</div>
			<div>
				<h3>Facility description</h3>
				<div>
					<input type='text' name={"descriptionEST"} defaultValue={facility?.description?.EST ?? ""} />
					{/* <input type="text" name={"descriptionENG"} defaultValue={room?.description?.ENG ?? ""}/> */}
					<input type='text' name={"descriptionRUS"} defaultValue={facility?.description?.RUS ?? ""} />
				</div>
			</div>
            <ButtonAdmin border isSubmit action={()=>{}} label={"Submit"} />
		</form>
	);
}
