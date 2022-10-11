import React, { FormEvent, ReactElement } from "react";
import { AdminLayout } from ".";
import { ButtonAdmin } from "../../components/AdminComponents/ButtonAdmin";
import { NextPageWithLayout } from "../_app";
import frameStyles from "../../styles/FormStyles.module.css";
import { PageNotWorkingBanner, useEditPageNotWorkingBannerMutation, useGetPageNotWorkingBannerQuery } from "../../graphqlGenerated/graphql";
import { observer } from "mobx-react-lite";
import AdminStore from "../../Stores/AdminStore";
import GoBackPage from "../../components/AdminComponents/GoBackPage";

const Banner: NextPageWithLayout = () => {
    const {data, loading, error} = useGetPageNotWorkingBannerQuery();
    const [EditBanner, {data: BannerData, loading: BannerLoading, error: BannerError}] = useEditPageNotWorkingBannerMutation();


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        const data = new FormData(e.currentTarget)

        const newObj: PageNotWorkingBanner = { 
            title: { 
                show: data.get("show-title") === "true" , 
                text: { 
                    RUS: data.get("title-RUS")?.toString(),
                    EST: data.get("title-EST")?.toString(),
                    ENG: data.get("title-ENG")?.toString(),
                }
            },
            body: { 
                show: data.get("show-body") === "true" , 
                text: { 
                    RUS: data.get("body-RUS")?.toString(),
                    EST: data.get("body-EST")?.toString(),
                    ENG: data.get("body-ENG")?.toString(),
                }
            },
            centeredText: { 
                show: data.get("show-centerText") === "true" , 
                text: { 
                    RUS: data.get("centerText-RUS")?.toString(),
                    EST: data.get("centerText-EST")?.toString(),
                    ENG: data.get("centerText-ENG")?.toString(),
                }
            },
            link: { 
                show: data.get("show-link") === "true", 
                body: data.get("link")?.toString()
            }, 
            showContacts: data.get("show-contacts") === "true"
        };

        EditBanner({variables: { newBanner: newObj}, onCompleted(data) {
            alert(data.EditPageNotWorkingBanner);
        },})
    }
    if(!AdminStore.userInfo.isLoggedIn) return <GoBackPage/>
	return (
		<div>
			{/* TODO tranlsate to Estonian */}
			<h1>Banner eiditing</h1>
            {loading ? <p>Loading...</p> : (
			<form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<h5>Title</h5>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px", width: "fit-content"}}>
							<input type='text' name={"title-EST"} placeholder={"Title EST"} className={frameStyles.input} defaultValue={data?.GetPageNotWorkingBanner?.title?.text?.EST ?? ""}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px", width: "fit-content"}}>
							<input type='text' name={"title-RUS"} placeholder={"Title RUS"} className={frameStyles.input} defaultValue={data?.GetPageNotWorkingBanner?.title?.text?.RUS ?? ""}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px", width: "fit-content"}}>
							<input type='text' name={"title-ENG"} placeholder={"Title ENG"} className={frameStyles.input} defaultValue={data?.GetPageNotWorkingBanner?.title?.text?.ENG ?? ""}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
						<h6>Show title</h6>
						<input type='checkbox' name="show-title" defaultChecked={data?.GetPageNotWorkingBanner?.title?.show ?? false} />
					</div>
				</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
					<h5>Centered Text</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"centerText-EST"} placeholder={"centerText EST"} className={frameStyles.input} defaultValue={data?.GetPageNotWorkingBanner?.centeredText?.text?.EST ?? ""}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"centerText-RUS"} placeholder={"centerText RUS"} className={frameStyles.input} defaultValue={data?.GetPageNotWorkingBanner?.title?.text?.RUS ?? ""}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"centerText-ENG"} placeholder={"centerText ENG"} className={frameStyles.input} defaultValue={data?.GetPageNotWorkingBanner?.title?.text?.ENG ?? ""}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
						<h6>Show centered text</h6>
						<input type='checkbox' name="show-centerText" defaultChecked={data?.GetPageNotWorkingBanner?.centeredText?.show ?? false}/>
					</div>
				</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
					<h5>Main text body</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"body-EST"} placeholder={"body EST"} className={frameStyles.input} defaultValue={data?.GetPageNotWorkingBanner?.body?.text?.EST ?? ""}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"body-RUS"} placeholder={"body RUS"} className={frameStyles.input} defaultValue={data?.GetPageNotWorkingBanner?.body?.text?.RUS ?? ""}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"body-ENG"} placeholder={"body ENG"} className={frameStyles.input} defaultValue={data?.GetPageNotWorkingBanner?.body?.text?.ENG ?? ""}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
						<h6>Show main text body</h6>
						<input type='checkbox' name="show-body" defaultChecked={data?.GetPageNotWorkingBanner?.body?.show ?? false}/>
					</div>
				</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
					<h5>Link</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px", width: "fit-content"}}>
							<input type={"url"} name={"link"} placeholder={"Link"} className={frameStyles.input}  defaultValue={data?.GetPageNotWorkingBanner?.link?.body ?? ""}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
						<h6>Show link</h6>
						<input type='checkbox' name="show-link" defaultChecked={data?.GetPageNotWorkingBanner?.link?.show ?? false}/>
					</div>
				</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
					<h5>Show Contacts</h5>
						<input type='checkbox' name="show-contacts" defaultChecked={data?.GetPageNotWorkingBanner?.showContacts ?? false}/>
				</div>
                <ButtonAdmin isSubmit filled action={()=>{}} label={"Submit"} />
			</form>
            )}
		</div>
	);
};

Banner.getLayout = function getLayout(Banner: ReactElement) {
	return (
		<>
			<AdminLayout>{Banner}</AdminLayout>
		</>
	);
};

export default observer(Banner);
