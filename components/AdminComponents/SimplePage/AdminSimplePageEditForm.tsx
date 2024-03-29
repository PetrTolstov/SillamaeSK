import { ChangeEvent, useEffect, useState } from "react";
import {SimplePage, useEditSimplePageMutation, GetSimplePagesDocument, useGetSimplePagesLazyQuery, useGetPageConfigQuery, useEditPageConfigMutation, useGetPageConfigLazyQuery, PageConfig } from "../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../ButtonAdmin";
import UploadFile from "../UploadFile";
import frameStyles from "../../../styles/FormStyles.module.css"
import {clearParseAndGenerateServicesCalls} from "@typescript-eslint/typescript-estree/dist/parser";
import DeleteFile from "../deleteFile";
import TimeTableAdmin from "./TimeTableAdmin";

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
export function GetTimeTableEventColor(str: string) { 
    switch (str) { 
        case "Iluvõimlemine": { 
            return "#800000"
        }
        case "Sulgpall": { 
            return "#E6194B"
        }
        case "SJK Dina": { 
            return "#F58231"
        }
        case "FC NPM Silmet": { 
            return "#BFEF45"
        }
        case "Jalgpallikool FC Kalev": { 
            return "#0167FF"
        }
        case "Tennis": { 
            return "#FFE119"
        }
        case "JK Almaz": { 
            return "#42D4F4"
        }
        case "Korvpall": { 
            return "#4363D8"
        }
        case "KJK Kalev-Sillamäe": { 
            return "#911EB4"
        }
        case "Võrkpall": { 
            return "#F032E6"
        }
        case "Narkokeskus": { 
            return "#469990"
        }
        case "Aeroobika, S. Koort": { 
            return "#9A6324"
        }
        case "Terviserühm „Fialka“": { 
            return "#AAFFC3"
        }
        case "Taekwondo": { 
            return "#FFD8B1"
        }
        case "Male": { 
            return "#DCBEFF"
        }
        case "Poks": { 
            return "#45CBB3"
        }
        case "Spordiklubi Kalev": { 
            return "#000075"
        }
        case "Ujumisklubi Kalev": { 
            return "#808000"
        }
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
        setCurrentPage(page)
    }, [page])
	return (
		<div className={frameStyles.container} style={{width: "100%"}}>
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
                    // console.log(error);
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
            <TimeTableAdmin isAdmin pageName={getPage(currentPage?.pageName ?? '')?.slice(1) ?? ""} />
		</div>
	);
};