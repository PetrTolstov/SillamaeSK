import { ReactElement, useState } from "react";
import { AdminLayout } from ".";
import { NextPageWithLayout } from "../_app";
import styles from "../../styles/PricingAdmin.module.css";
import { PriceListElementAdmin } from "../../components/AdminComponents/PriceListElementAdmin";

import {
	GetPriceListDocument,
	PriceListElement,
	useDeletePriceListElementByIdMutation,
	useEditPageConfigMutation,
	useGetPageConfigQuery,
	useGetPriceListNamesQuery,
} from "../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../../components/AdminComponents/ButtonAdmin";
import { TicketModal } from "../../components/AdminComponents/TicketModal";
import AdminStore from "../../Stores/AdminStore";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import GoBackPage from "../../components/AdminComponents/GoBackPage";

export enum modalTypes {
	editModal,
	addModal,
}

const Pricing: NextPageWithLayout = () => {
	const { data, loading, error } = useGetPriceListNamesQuery();

	const [showModal, setShowModal] = useState<boolean>(false);
	const [currentModalType, setCurrentModalType] = useState<modalTypes>();
	const [currentElementID, setCurrentElementID] = useState<string>();

	const { data: configData, refetch: refetchConfig } = useGetPageConfigQuery({
		variables: {
			pageName: "PriceList",
		},
	});
	const [editConfig, {}] = useEditPageConfigMutation();

	const [DeletePriceListElementById, { data: deleteData, loading: deleteLoading, error: deleteError }] =
		useDeletePriceListElementByIdMutation();

	const openEditModal = (priceListElement: PriceListElement) => {
		setCurrentElementID(priceListElement._id);
		setCurrentModalType(modalTypes.editModal);
		setShowModal(true);
	};
	const closeModal = () => {
		setShowModal(false);
	};
	const deleteAction = (_id: string) => {
		if (confirm("Are you sure you want to delete this element?")) {
			DeletePriceListElementById({ variables: { id: _id }, refetchQueries: [{ query: GetPriceListDocument }] });
		}
	};
	const addAction = () => {
		setCurrentModalType(modalTypes.addModal);
		setShowModal(true);
	};

	if (AdminStore.userInfo.isLoggedIn) {
		return (
			<>
				{showModal ? (
					<TicketModal
						modalType={currentModalType}
						priceListElementId={currentElementID}
						closeModal={closeModal}
					/>
				) : (
					<></>
				)}
				<div className={styles.PricingMainContainer}>
					<h1>Hinnakiri</h1>
					<div>
						{loading ? (
							<p>Loading...</p>
						) : (
							data?.GetPriceList.map((priceListElement) => (
								<PriceListElementAdmin
									key={priceListElement?._id}
									title={priceListElement?.name}
									openEditModal={() => {
										openEditModal(priceListElement!);
									}}
									deleteAction={() => {
										deleteAction(priceListElement?._id ?? "");
									}}
								/>
							))
						)}
					</div>
					<ButtonAdmin label={"Lisa uus +"} filled action={addAction} />
					<div>
						<h6>Show banner</h6>
						<input
							type='checkbox'
							defaultChecked={configData?.GetPageConfig?.showBanner ?? false}
							onChange={(e) => {
								console.log(e.target.checked);
								editConfig({
									variables: {
										pageName: "PriceList",
										newConfig: {
											pageName: "PriceList",
											showBanner: e.target.checked,
										},
									},
									onCompleted(data) {
										refetchConfig();
									},
								});
							}}
						/>
					</div>
				</div>
			</>
		);
	} else {
		return <GoBackPage />;
	}
};

Pricing.getLayout = function getLayout(Pricing: ReactElement) {
	return (
		<>
			<AdminLayout>{Pricing}</AdminLayout>
		</>
	);
};

export default observer(Pricing);
