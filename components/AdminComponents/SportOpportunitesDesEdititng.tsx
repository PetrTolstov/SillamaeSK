import React, { FormEvent } from "react";
import { GetSportOpportunitiesDescriptionDocument, useGetSportOpportunitiesDescriptionQuery, useSetSportOpportunitiesDescriptionMutation } from "../../graphqlGenerated/graphql";
import { ButtonAdmin } from "./ButtonAdmin";
import styles from "../../styles/TimeTableEditting.module.css";
import frameStyles from "../../styles/FormStyles.module.css";

export function SportOpportunitesDesEdititng() {
	const { data: getData, loading: getLoading, error: getError } = useGetSportOpportunitiesDescriptionQuery();
    const [ updateDescription , { data: setData, loading: setLoading, error: setError }] = useSetSportOpportunitiesDescriptionMutation();
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);

		const newObj = {
			title: {
				EST: formData.get("title-EST")?.toString(),
				RUS: formData.get("title-RUS")?.toString(),
			},
			text: {
				EST: formData.get("text-EST")?.toString(),
				RUS: formData.get("text-RUS")?.toString(),
			},
		};
        updateDescription({variables: { 
            newSportOpportunitiesDescription: newObj!,
        }, refetchQueries: [{query: GetSportOpportunitiesDescriptionDocument}], onCompleted(data) { 
            alert(data.SetSportOpportunitiesDescription);
        }})
	};
	return (
		<div style={{marginTop: "40px"}} className={styles.container}>
			<h3>Spordivõimalused</h3>
			<form style={{ display: "flex", flexDirection: "column", width: "fit-content" }} onSubmit={handleSubmit}>
				<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
					<label htmlFor='title-EST'>Title EST</label>
					<input
						type='text'
						name={"title-EST"}
						placeholder='EST'
						defaultValue={getData?.GetSportOpportunitiesDescription?.title?.EST ?? ""}
						className={frameStyles.input}
					/>
					<span className={frameStyles.focusBorder}></span>
				</div>

				<div className={frameStyles.flexCon} style={{marginBottom: "20px"}}>
					<label htmlFor='title-RUS'>Title RUS</label>
					<input
						type='text'
						name={"title-RUS"}
						placeholder='RUS'
						defaultValue={getData?.GetSportOpportunitiesDescription?.title?.RUS ?? ""}
						className={frameStyles.input}
					/>
					<span className={frameStyles.focusBorder}></span>
				</div>
				<div style={{ display: "flex", flexDirection: "row" }}>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div className={frameStyles.flexCon} style={{marginRight: "20px"}}>
							<label htmlFor='text-EST'>Text EST</label>
							<textarea
								name='text-EST'
								cols={30}
								rows={10}
                                // wrap={"hard"}
								defaultValue={getData?.GetSportOpportunitiesDescription?.text?.EST ?? ""} className={frameStyles.input}></textarea>
							<span className={frameStyles.focusBorder}></span>
						</div>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div className={frameStyles.flexCon} >
							<label htmlFor='text-RUS'>Text RUS</label>
							<textarea
								name='text-RUS'
								cols={30}
								rows={10}
                                // wrap={"hard"}
								defaultValue={getData?.GetSportOpportunitiesDescription?.text?.RUS ?? ""}  className={frameStyles.input}></textarea>
							<span className={frameStyles.focusBorder}></span>
						</div>
					</div>
				</div>
				<ButtonAdmin isSubmit filled action={() => {}} label={"Submit"} />
			</form>
		</div>
	);
}
