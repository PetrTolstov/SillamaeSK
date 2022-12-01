import styles from "../../styles/ModalAdmin.module.css";
import { NextPage } from "next";
import { PropsWithChildren } from "react";
import { ButtonAdmin } from "./ButtonAdmin";


export type ModalAdminProps = { 
    isShowing: boolean, 
    onClose: () => void
}

const ModalAdmin = ({children, isShowing, onClose}: PropsWithChildren & ModalAdminProps) => {
    
    if (!isShowing) return <></>; 
 	return (
		<>
			<div className={styles.shadow} onClick={onClose}></div>
			<div className={styles.container}>
                {children}
                <ButtonAdmin border action={onClose} label={"Close"} />
            </div>
		</>
	);
};

export default ModalAdmin