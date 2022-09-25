import styles from "../../styles/PriceListElementAdmin.module.css";
import { ButtonAdmin } from "./ButtonAdmin";
import Image from "next/image";
import Bin from '../../public/Bin.svg'
import Edit from '../../public/Edit.svg'
import { TextContent } from "../../graphqlGenerated/graphql";

export type PriceListElementProps = {
    title: TextContent | undefined; 
    openEditModal: ()=>void; 
    deleteAction: ()=>void;
};

export const PriceListElementAdmin = ({ title, openEditModal, deleteAction} : PriceListElementProps) => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.elementBody}>
				<p>{title?.RUS}</p>
			</div>
			<div className={styles.btns}>
				<ButtonAdmin border label={<Image src={Bin} width={23} height={20}/>} action={deleteAction}/>
                <ButtonAdmin border label={<Image src={Edit} width={23} height={20} />} action={openEditModal}/>
			</div>
		</div>
	);
};