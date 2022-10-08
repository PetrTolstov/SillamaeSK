import { ChangeEvent, useEffect, useState } from "react";
import {SimplePage, useEditSimplePageMutation, GetSimplePagesDocument, useGetSimplePagesLazyQuery } from "../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../ButtonAdmin";
import UploadFile from "../UploadFile";
import frameStyles from "../../../styles/FormStyles.module.css"

export function getPage(str: string) { 
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
		<div className={frameStyles.container}>
			<h3>{page?.title?.EST ?? ""}</h3>
			<form style={{ display: "flex", flexDirection: "column", marginBottom: '50px' }} onSubmit={(e) => {
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
                    <div className={frameStyles.flexCon}>
					    <input key={currentPage?._id + " 1"} id='title' name='titleEST' placeholder='Title EST' defaultValue={currentPage?.title?.EST ?? ""} className={frameStyles.input}/>
                        <span className={frameStyles.focusBorder}></span>
                    </div>
                    <div className={frameStyles.flexCon}>
					    <input key={currentPage?._id + " 2"} id='title' name='titleRUS' placeholder='Title RUS' defaultValue={page?.title?.RUS ?? ""} className={frameStyles.input}/>
                        <span className={frameStyles.focusBorder}></span>
                    </div>
                    </label>
				<label style={{ display: "flex", flexDirection: "column" , marginTop: '20px'}}>
					Text
                    <div className={frameStyles.flexCon}>
					    <textarea placeholder='Text EST' name="textEST" cols={30} rows={10} defaultValue={page?.text?.EST ?? ""} className={frameStyles.input}></textarea>
                        <span className={frameStyles.focusBorder}></span>
                    </div>
                    <div className={frameStyles.flexCon}>
					    <textarea placeholder='Text RUS' name="textRUS" cols={30} rows={10} defaultValue={page?.text?.RUS ?? ""} className={frameStyles.input}></textarea>
                            <span className={frameStyles.focusBorder}></span>
                    </div>
				</label>
                <UploadFile page={getPage(currentPage?.pageName ?? "") ?? ""} show={showUploadFile} closeModal={() => setShowUploadFile(false)} />
                <ButtonAdmin border action={() => setShowUploadFile(true)} label={"Add image"} />
                <input style={{width: "fit-content"}} type="submit" />
			</form>
		</div>
	);
};