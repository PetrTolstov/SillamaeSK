import styles from "../../../styles/PriceListElementAdmin.module.css";
import { ButtonAdmin } from "../ButtonAdmin";
import Image from "next/image";
import Bin from '../../../public/Bin.svg'
import Edit from '../../../public/Edit.svg'
import { TextContent } from "../../../graphqlGenerated/graphql";

export type EventAdminListElementProps = {
    name: TextContent | undefined; 
    openEditModal: ()=>void; 
    deleteAction: ()=>void;
};

export const EventAdminListElement = ({ name, openEditModal, deleteAction} : EventAdminListElementProps) => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.elementBody}>
				<p>{name?.EST}</p>
			</div>
			<div className={styles.btns}>
				<ButtonAdmin border label={<Image src={Bin} width={23} height={20}/>} action={deleteAction}/>
                <ButtonAdmin border label={<Image src={Edit} width={23} height={20} />} action={openEditModal}/>
			</div>
		</div>
	);
};