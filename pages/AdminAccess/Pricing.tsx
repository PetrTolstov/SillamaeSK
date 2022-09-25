import { ReactElement, useState } from "react";
import { AdminLayout } from ".";
import { NextPageWithLayout } from "../_app";
import styles from "../../styles/Pricing.module.css";
import { PriceListElementAdmin } from "../../components/AdminComponents/PriceListElementAdmin";

import { PriceListElement, useGetPriceListQuery } from "../../graphqlGenerated/graphql";
import { ButtonAdmin } from "../../components/AdminComponents/ButtonAdmin";
import { ModalAdmin } from "../../components/AdminComponents/ModalAdmin";

export enum modalTypes {
	editModal,
	addModal,
}

const Pricing: NextPageWithLayout = () => {
	const { data, loading, error } = useGetPriceListQuery();
	const [showModal, setShowModal] = useState<boolean>(false);
	const [currentModalType, setCurrentModalType] = useState<modalTypes>();
	const [currentPriceListElement, setCurrentPriceListElement] = useState<PriceListElement>();

	const openEditModal = (priceListElement: PriceListElement) => {
        setCurrentPriceListElement(priceListElement)
		setCurrentModalType(modalTypes.editModal);
		setShowModal(true);
	};
	const closeModal = () => {
		setShowModal(false);
	};
	const deleteAction = () => {};
	const addAction = () => {
        setCurrentModalType(modalTypes.addModal); 
        setShowModal(true);
    };

	return (
		<>
			{showModal ? (
				<ModalAdmin
					modalType={currentModalType}
					priceListElement={currentPriceListElement}
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
								openEditModal={() => {openEditModal(priceListElement!)}}
								deleteAction={() => {}}
							/>
						))
					)}
				</div>
				<ButtonAdmin label={"Add new +"} filled action={addAction} />
			</div>
		</>
	);
};

Pricing.getLayout = function getLayout(Pricing: ReactElement) {
	return (
		<>
			<AdminLayout>{Pricing}</AdminLayout>
		</>
	);
};

export default Pricing;
