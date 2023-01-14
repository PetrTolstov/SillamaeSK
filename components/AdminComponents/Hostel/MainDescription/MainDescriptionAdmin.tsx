import { useState } from "react";
import { GetMainDescriptionDocument, MainDescription, useGetMainDescriptionQuery, useSetMainDescriptionMutation } from "../../../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../../ButtonAdmin";
import ModalAdmin from "../../ModalAdmin";
import MainDescriptionEditingForm from "./MainDescriptionEditingForm";

export default function MainDescriptionAdmin() {
	const [showModal, setShowModal] = useState<boolean>(false);

	const { data: mainDescriptionData, loading } = useGetMainDescriptionQuery();

    const [updateMainDescription] = useSetMainDescriptionMutation();

	return (
		<div>
			<ButtonAdmin
				filled
				action={() => {
					setShowModal(true);
				}}
				label={"Edit Main Description"}
			/>

			<ModalAdmin
				isShowing={showModal}
				onClose={() => {
					setShowModal(false);
				}}>
				{loading ? (
					<p>Loading...</p>
				) : (
					<MainDescriptionEditingForm
						mainDescription={mainDescriptionData?.GetMainDescription as MainDescription}
						updateMainDescription={(newMainDescription) => {
                            updateMainDescription({variables: { 
                                description: newMainDescription
                            }, refetchQueries: [{query: GetMainDescriptionDocument}]})
                        }}
						onClose={() => {
							setShowModal(false);
						}}
					/>
				)}
			</ModalAdmin>
		</div>
	);
}
