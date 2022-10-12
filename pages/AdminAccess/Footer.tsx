import { observer } from "mobx-react-lite";
import { FormEvent, ReactElement } from "react";
import { AdminLayout } from ".";
import { ButtonAdmin } from "../../components/AdminComponents/ButtonAdmin";
import GoBackPage from "../../components/AdminComponents/GoBackPage";
import { FooterInput, useEditFooterDataMutation, useGetFooterQuery } from "../../graphqlGenerated/graphql";
import AdminStore from "../../Stores/AdminStore";
import { NextPageWithLayout } from "../_app";

const Footer: NextPageWithLayout = () => {
	const { data, loading, refetch } = useGetFooterQuery();
    const [updateFooter, {data: editData, loading: editLoading}] = useEditFooterDataMutation(); 
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(e.currentTarget["1showBody"].checked);
		const newObj: FooterInput = {
			firstSection: {
				header: {
					EST: e.currentTarget["1header-EST"].value,
					RUS: e.currentTarget["1header-RUS"].value,
					ENG: e.currentTarget["1header-ENG"].value,
				},
				body: {
					EST: e.currentTarget["1body-EST"].value,
					RUS: e.currentTarget["1body-RUS"].value,
					ENG: e.currentTarget["1body-ENG"].value,
				},
				showBody: e.currentTarget["1showBody"].checked,
				showHeader: e.currentTarget["1showHeader"].checked,
			},
			secondSection: {
				header: {
					EST: e.currentTarget["2header-EST"].value,
					RUS: e.currentTarget["2header-RUS"].value,
					ENG: e.currentTarget["2header-ENG"].value,
				},
				body: {
					EST: e.currentTarget["2body-EST"].value,
					RUS: e.currentTarget["2body-RUS"].value,
					ENG: e.currentTarget["2body-ENG"].value,
				},
				showBody: e.currentTarget["2showBody"].checked,
				showHeader: e.currentTarget["2showHeader"].checked,
			},
			thirdSection: {
				header: {
					EST: e.currentTarget["3header-EST"].value,
					RUS: e.currentTarget["3header-RUS"].value,
					ENG: e.currentTarget["3header-ENG"].value,
				},
				body: {
					EST: e.currentTarget["3body-EST"].value,
					RUS: e.currentTarget["3body-RUS"].value,
					ENG: e.currentTarget["3body-ENG"].value,
				},
				showBody: e.currentTarget["3showBody"].checked,
				showHeader: e.currentTarget["3showHeader"].checked,
			},
			showContacts: e.currentTarget["showContacts"].checked,
		};

		updateFooter({variables: { 
            updatedFooter: newObj
        }, onCompleted(data) {
            alert(data.EditFooterData);
            refetch();
        },})
	};
    if (!AdminStore.userInfo.isLoggedIn) return <GoBackPage/>
	return (
		<div style={{ width: "100%" }}>
			<form onSubmit={handleSubmit}>
				{loading ? (
					<p>Loading...</p>
				) : (
					<div style={{ display: "flex", justifyContent: "space-around" }}>
						<div>
							<h2>First Section</h2>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<h3>Header</h3>
								<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
									<h4>Show header</h4>
									<input type='checkbox' name={"1showHeader"} defaultChecked={data?.GetFooter?.firstSection?.showHeader ?? false} />
								</div>
								<input type='text' name={"1header-EST"} placeholder={"Header EST"} defaultValue={data?.GetFooter?.firstSection?.header?.EST ?? ""} />
								<input type='text' name={"1header-RUS"} placeholder={"Header RUS"} defaultValue={data?.GetFooter?.firstSection?.header?.RUS ?? ""} />
								<input type='text' name={"1header-ENG"} placeholder={"Header ENG"} defaultValue={data?.GetFooter?.firstSection?.header?.ENG ?? ""} />
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<h3>Body</h3>
								<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
									<h4>Show body</h4>
									<input type='checkbox' name={"1showBody"} defaultChecked={data?.GetFooter?.firstSection?.showBody ?? false} />
								</div>
								<textarea cols={1} rows={5} name={"1body-EST"} placeholder={"Body EST"} defaultValue={data?.GetFooter?.firstSection?.body?.EST ?? ""} />
								<textarea cols={5} rows={5} name={"1body-RUS"} placeholder={"Body RUS"} defaultValue={data?.GetFooter?.firstSection?.body?.RUS ?? ""} />
								<textarea cols={5} rows={5} name={"1body-ENG"} placeholder={"Body ENG"} defaultValue={data?.GetFooter?.firstSection?.body?.ENG ?? ""} />
							</div>
						</div>
						<div>
							<h2>Second Section</h2>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<h3>Header</h3>
								<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
									<h4>Show header</h4>
									<input type='checkbox' name={"2showHeader"} defaultChecked={data?.GetFooter?.secondSection?.showHeader ?? false} />
								</div>
								<input type='text' name={"2header-EST"} placeholder={"Header EST"} defaultValue={data?.GetFooter?.secondSection?.header?.EST ?? ""} />
								<input type='text' name={"2header-RUS"} placeholder={"Header RUS"} defaultValue={data?.GetFooter?.secondSection?.header?.RUS ?? ""} />
								<input type='text' name={"2header-ENG"} placeholder={"Header ENG"} defaultValue={data?.GetFooter?.secondSection?.header?.RUS ?? ""} />
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<h3>Body</h3>
								<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
									<h4>Show body</h4>
									<input type='checkbox' name={"2showBody"} defaultChecked={data?.GetFooter?.secondSection?.showBody ?? false} />
								</div>
								<textarea cols={1} rows={5} name={"2body-EST"} placeholder={"Body EST"} defaultValue={data?.GetFooter?.secondSection?.body?.EST ?? ""} />
								<textarea cols={5} rows={5} name={"2body-RUS"} placeholder={"Body RUS"} defaultValue={data?.GetFooter?.secondSection?.body?.RUS ?? ""}  />
								<textarea cols={5} rows={5} name={"2body-ENG"} placeholder={"Body ENG"} defaultValue={data?.GetFooter?.secondSection?.body?.ENG ?? ""}  />
							</div>
						</div>
						<div>
							<h2>Third Section</h2>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<h3>Header</h3>
								<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
									<h4>Show header</h4>
									<input type='checkbox' name={"3showHeader"} defaultChecked={data?.GetFooter?.thirdSection?.showHeader ?? false} />
								</div>
								<input type='text' name={"3header-EST"} placeholder={"Header EST"} defaultValue={data?.GetFooter?.thirdSection?.header?.EST ?? ""}/>
								<input type='text' name={"3header-RUS"} placeholder={"Header RUS"} defaultValue={data?.GetFooter?.thirdSection?.header?.RUS ?? ""}/>
								<input type='text' name={"3header-ENG"} placeholder={"Header ENG"} defaultValue={data?.GetFooter?.thirdSection?.header?.ENG ?? ""}/>
							</div>
							<div style={{ display: "flex", flexDirection: "column" }}>
								<h3>Body</h3>
								<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
									<h4>Show body</h4>
									<input type='checkbox' name={"3showBody"} defaultChecked={data?.GetFooter?.thirdSection?.showBody ?? false} />
								</div>
								<textarea cols={1} rows={5} name={"3body-EST"} placeholder={"Body EST"} defaultValue={data?.GetFooter?.thirdSection?.body?.EST ?? ""} />
								<textarea cols={5} rows={5} name={"3body-RUS"} placeholder={"Body RUS"} defaultValue={data?.GetFooter?.thirdSection?.body?.RUS ?? ""} />
								<textarea cols={5} rows={5} name={"3body-ENG"} placeholder={"Body ENG"} defaultValue={data?.GetFooter?.thirdSection?.body?.ENG ?? ""} />
							</div>
							<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
								<h4>Show Contacts</h4>
								<input type='checkbox' name={"showContacts"} defaultChecked={data?.GetFooter?.showContacts ?? false} />
							</div>
						</div>
					</div>
				)}

				<ButtonAdmin isSubmit filled label={"Submit"} action={() => {}} />
			</form>
		</div>
	);
};

Footer.getLayout = function getLayout(Footer: ReactElement) {
	return (
		<>
			<AdminLayout>{Footer}</AdminLayout>
		</>
	);
};

export default observer(Footer);
