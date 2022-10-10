import React, { ReactElement } from "react";
import { AdminLayout } from ".";
import { ButtonAdmin } from "../../components/AdminComponents/ButtonAdmin";
import { NextPageWithLayout } from "../_app";
import frameStyles from "../../styles/FormStyles.module.css";

const Banner: NextPageWithLayout = () => {
	return (
		<div>
			{/* TODO tranlsate to Estonian */}
			<h1>Banner eiditing</h1>
			<form style={{ display: "flex", flexDirection: "column" }} onSubmit={()=>{}}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<h5>Title</h5>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px", width: "fit-content"}}>
							<input type='text' name={"title-EST"} placeholder={"Title EST"} className={frameStyles.input}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px", width: "fit-content"}}>
							<input type='text' name={"title-RUS"} placeholder={"Title RUS"} className={frameStyles.input}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px", width: "fit-content"}}>
							<input type='text' name={"title-ENG"} placeholder={"Title ENG"} className={frameStyles.input}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
						<h6>Show title</h6>
						<input type='checkbox' />
					</div>
				</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
					<h5>Centered Text</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"centerText-EST"} placeholder={"centerText EST"} className={frameStyles.input}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"centerText-RUS"} placeholder={"centerText RUS"} className={frameStyles.input}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"centerText-ENG"} placeholder={"centerText ENG"} className={frameStyles.input}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
						<h6>Show centered text</h6>
						<input type='checkbox' />
					</div>
				</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
					<h5>Main text body</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"body-EST"} placeholder={"body EST"} className={frameStyles.input}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"body-RUS"} placeholder={"body RUS"} className={frameStyles.input}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
							<textarea cols={10} rows={5} name={"body-ENG"} placeholder={"body ENG"} className={frameStyles.input}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
						<h6>Show main text body</h6>
						<input type='checkbox' />
					</div>
				</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
					<h5>Link</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
						<div className={frameStyles.flexCon} style={{marginBottom: "20px", width: "fit-content"}}>
							<input type={"url"} name={"link"} placeholder={"Link"} className={frameStyles.input}/>
							<span className={frameStyles.focusBorder}></span>
						</div>
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
						<h6>Show link</h6>
						<input type='checkbox' />
					</div>
				</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
					<h5>Show Contacts</h5>
						<input type='checkbox' />
				</div>
                <ButtonAdmin isSubmit filled action={()=>{}} label={"Submit"} />
			</form>
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

export default Banner;
