import { ChangeEvent, useEffect, useState } from "react";
import {SimplePage, useEditSimplePageMutation, GetSimplePagesDocument, useGetSimplePagesLazyQuery, useGetPageConfigQuery, useEditPageConfigMutation, useGetPageConfigLazyQuery, PageConfig } from "../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../ButtonAdmin";
import UploadFile from "../UploadFile";
import frameStyles from "../../../styles/FormStyles.module.css"
import {clearParseAndGenerateServicesCalls} from "@typescript-eslint/typescript-estree/dist/parser";
import DeleteFile from "../deleteFile";

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
        case "Väike saal":
            return "/VaikeSaal"
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
export const AdminSimplePageEditForm = ({ page, pageConfig }: { page: SimplePage, pageConfig: PageConfig }) => {
    const [ currentPage, setCurrentPage] = useState(page); 
    const [editPageConfigs, {data: editConfigData}] = useEditPageConfigMutation();
    const [editSimplePage, {loading, data, error}] = useEditSimplePageMutation();
    const [isShowDelete, setIsShowDelete] = useState(false);
    const [ showUploadFile, setShowUploadFile ] = useState(false);
    const [ showUploadFilePDF, setShowUploadFilePDF ] = useState(false);
    useEffect(() => {
        console.log(currentPage)
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
                        ENG: formData.get("titleENG")?.toString(), 
                        RUS: formData.get("titleRUS")?.toString(), 
                    },
                    text: { 
                        EST: formData.get("textEST")?.toString(), 
                        ENG: formData.get("textENG")?.toString(), 
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
                });
                editPageConfigs({variables: { 
                    pageName: currentPage.pageName,
                    newConfig: { 
                        pageName: currentPage.pageName, 
                        showBanner: formData.get("show-banner") === "on"
                    }
                }})
            }}>
				<label>
					Title
                    <div className={frameStyles.flexCon}>
					    <input key={currentPage?._id + " 1"} id='title' name='titleEST' placeholder='Title EST' defaultValue={currentPage?.title?.EST ?? ""} className={frameStyles.input}/>
                        <span className={frameStyles.focusBorder}></span>
                    </div>
                    <div className={frameStyles.flexCon}>
					    <input key={currentPage?._id + " 1"} id='title' name='titleENG' placeholder='Title ENG' defaultValue={currentPage?.title?.ENG ?? ""} className={frameStyles.input}/>
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
					    <textarea placeholder='Text ENG' name="textENG" cols={30} rows={10} defaultValue={page?.text?.ENG ?? ""} className={frameStyles.input}></textarea>
                            <span className={frameStyles.focusBorder}></span>
                    </div> 
                    <div className={frameStyles.flexCon}>
					    <textarea placeholder='Text RUS' name="textRUS" cols={30} rows={10} defaultValue={page?.text?.RUS ?? ""} className={frameStyles.input}></textarea>
                            <span className={frameStyles.focusBorder}></span>
                    </div>
				</label>
                <label style={{ display: "flex", flexDirection: "column" , marginTop: '20px'}}>
                    Asenda bänneriga
                    <input type={"checkbox"} name={"show-banner"} defaultChecked={pageConfig.showBanner ?? false}/>
				</label>
                <UploadFile page={getPage(currentPage?.pageName ?? "") ?? ""} show={showUploadFile} closeModal={() => setShowUploadFile(false)} />
                <ButtonAdmin border action={() => setShowUploadFile(true)} label={"Add image"} />

                <UploadFile page={`pdf/${getPage(currentPage?.pageName ?? "") ?? ""}`} show={showUploadFilePDF} closeModal={() => setShowUploadFilePDF(false)} />
                <ButtonAdmin border action={() => setShowUploadFilePDF(true)} label={"Add pdf"} />

                <DeleteFile page={getPage(currentPage?.pageName ?? '')?.slice(1) ?? ""} show={isShowDelete} closeModal={() => {
                    setIsShowDelete(false);
                }} />
                <ButtonAdmin border action={() => setIsShowDelete(true)} label={"Delete images"} />
                <input style={{width: "fit-content"}} type="submit" />
			</form>
		</div>
	);
};