import { ChangeEvent, useState } from "react";
import { SimplePage, SimplePageInput } from "../../../graphqlGenerated/graphql";

export const AdminSimplePageEditForm = ({page} : {page :SimplePage}) => {
    const [ data, setData ] = useState<SimplePageInput>();  

    const handleChange = (e: ChangeEvent) => { 
        const dataCopy = data; 
        // dataCopy?[e.currentTarget.id as keyof SimplePageInput]?[e.currentTarget.name] = " ggegadf" 
    }
	return (
		<div>
            <h3>{page?.title?.EST ?? ""}</h3>
			<form style={{display: "flex", flexDirection: "column"}} onSubmit={() => {}}>
				<label>
					Title
                    <input id="title" name="EST" placeholder='Title EST' />
					<input id="title" name="RUS" placeholder='Title RUS' />
				</label>
                <label style={{display: "flex", flexDirection: "column"}}>
                    Text
                    <textarea placeholder="Text EST" cols={30} rows={5}></textarea>
                    <textarea placeholder="Text RUS" cols={30} rows={5}></textarea>
                </label>
			</form>
		</div>
	);
};
