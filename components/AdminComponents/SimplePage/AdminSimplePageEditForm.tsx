import { ChangeEvent, useEffect, useState } from "react";
import {SimplePage, useEditSimplePageMutation, GetSimplePagesDocument } from "../../../graphqlGenerated/graphql";


export const AdminSimplePageEditForm = ({ page }: { page: SimplePage }) => {
    const [ currentPage, setCurrentPage] = useState(page); 
    const [editSimplePage, {loading, data, error}] = useEditSimplePageMutation();
    useEffect(() => {
        console.log(page);
        setCurrentPage(page)
    }, [page])
	return (
		<div>
			<h3>{page?.title?.EST ?? ""}</h3>
			<form style={{ display: "flex", flexDirection: "column" }} onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget); 
                editSimplePage({variables: {id: page._id, updatedSimplePage: { 
                    title: {
                        EST: formData.get("titleEST")?.toString(), 
                        RUS: formData.get("titleRUS")?.toString(), 
                    }, 
                    text: { 
                        EST: formData.get("textEST")?.toString(), 
                        RUS: formData.get("textRUS")?.toString(), 
                    },
                    image: ""
                }}, onCompleted() {
                    alert("success");
                }, refetchQueries: [{query: GetSimplePagesDocument}]})
                location.reload();
            }}>
				<label>
					Title
					<input key={currentPage?._id + " 1"} id='title' name='titleEST' placeholder='Title EST' defaultValue={page?.title?.EST ?? ""} />
					<input key={currentPage?._id + " 2"} id='title' name='titleRUS' placeholder='Title RUS' defaultValue={page?.title?.RUS ?? ""} />
				</label>
				<label style={{ display: "flex", flexDirection: "column" }}>
					Text
					<textarea placeholder='Text EST' name="textEST" cols={30} rows={10} defaultValue={page?.text?.EST ?? ""} ></textarea>
					<textarea placeholder='Text RUS' name="textRUS" cols={30} rows={10} defaultValue={page?.text?.RUS ?? ""} ></textarea>
				</label>
                <input style={{width: "fit-content"}} type="submit" />
			</form>
		</div>
	);
};
