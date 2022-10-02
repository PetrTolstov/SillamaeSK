import { ChangeEvent, useEffect, useState } from "react";
import {SimplePage, useEditSimplePageMutation, GetSimplePagesDocument, useGetSimplePagesLazyQuery } from "../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../ButtonAdmin";
import UploadFile from "../UploadFile";

function getPage(str: string) { 
    switch(str) { 
        case "Ujula": 
            return "/Ujula"
        case "Staadion": 
            return "/Staadion"
        case "Kunstmurustaadion": 
            return "/Kunstmurustaadion"
        case "Suur saal": 
            return "/SuurSaal"
        case "Fitnessi saal": 
            return "/FitnessiSaal"
        case "Jõusaal": 
            return "/Jousaal"
        case "Maleruum": 
            return "/Maleruum"
        case "Kergejõustikumaneež": 
            return "/Kergejoustikumaneez"
        case "Arengukava": 
            return "/Arengukava"
        case "Kodukord": 
            return "/Kodukord"
        default: 
            break
    }  
}
export const AdminSimplePageEditForm = ({ page }: { page: SimplePage }) => {
    const [ currentPage, setCurrentPage] = useState(page); 
    const [editSimplePage, {loading, data, error}] = useEditSimplePageMutation();
    const [ showUploadFile, setShowUploadFile ] = useState(false); 
    useEffect(() => {
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
                    alert("Success");
                    location.reload();
                },
                onError(error) {
                    console.log(error);
                }, refetchQueries: [{query: GetSimplePagesDocument}]}).catch(e => { 
                    e.networkError.result.errors.map((e: { message: any }) => {
						console.log(e.message);
					});
                })
            }}>
				<label>
					Title
					<input key={currentPage?._id + " 1"} id='title' name='titleEST' placeholder='Title EST' defaultValue={currentPage?.title?.EST ?? ""} />
					<input key={currentPage?._id + " 2"} id='title' name='titleRUS' placeholder='Title RUS' defaultValue={page?.title?.RUS ?? ""} />
				</label>
				<label style={{ display: "flex", flexDirection: "column" }}>
					Text
					<textarea placeholder='Text EST' name="textEST" cols={30} rows={10} defaultValue={page?.text?.EST ?? ""} ></textarea>
					<textarea placeholder='Text RUS' name="textRUS" cols={30} rows={10} defaultValue={page?.text?.RUS ?? ""} ></textarea>
				</label>
                <UploadFile page={getPage(currentPage?.title?.EST ?? "") ?? ""} show={showUploadFile} closeModal={() => setShowUploadFile(false)} />
                <ButtonAdmin border action={() => setShowUploadFile(true)} label={"Add image"} />
                <input style={{width: "fit-content"}} type="submit" />
			</form>
		</div>
	);
};