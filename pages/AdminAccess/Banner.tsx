import { ReactElement } from "react";
import { AdminLayout } from ".";
import { ButtonAdmin } from "../../components/AdminComponents/ButtonAdmin";
import { NextPageWithLayout } from "../_app";

const Banner: NextPageWithLayout = () => {
	return (
		<div>
			{/* TODO tranlsate to Estonian */}
			<h1>Banner eiditing</h1>
			<form style={{ display: "flex", flexDirection: "column" }} onSubmit={()=>{}}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<h5>Title</h5>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<input type='text' name={"title-EST"} placeholder={"Title EST"} />
						<input type='text' name={"title-RUS"} placeholder={"Title RUS"} />
						<input type='text' name={"title-ENG"} placeholder={"Title ENG"} />
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
						<h6>Show title</h6>
						<input type='checkbox' />
					</div>
				</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
					<h5>Centered Text</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
						<textarea cols={10} rows={5} name={"centerText-EST"} placeholder={"centerText EST"} />
						<textarea cols={10} rows={5} name={"centerText-RUS"} placeholder={"centerText RUS"} />
						<textarea cols={10} rows={5} name={"centerText-ENG"} placeholder={"centerText ENG"} />
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
						<h6>Show centered text</h6>
						<input type='checkbox' />
					</div>
				</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
					<h5>Main text body</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
						<textarea cols={10} rows={5} name={"body-EST"} placeholder={"body EST"} />
						<textarea cols={10} rows={5} name={"body-RUS"} placeholder={"body RUS"} />
						<textarea cols={10} rows={5} name={"body-ENG"} placeholder={"body ENG"} />
					</div>
					<div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
						<h6>Show main text body</h6>
						<input type='checkbox' />
					</div>
				</div>
                <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
					<h5>Link</h5>
                    <div style={{ display: "flex", flexDirection: "column" }}>
						<input type={"url"} name={"link"} placeholder={"Link"} />
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
