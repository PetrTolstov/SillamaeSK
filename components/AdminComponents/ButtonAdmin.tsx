import { ReactElement } from "react";
import styles from "../../styles/ButtonAdmin.module.css";

export type ButtonAdminProps = {
	label: string | ReactElement;
	action: () => void;
	filled?: boolean;
	border?: boolean;
    isSubmit?: boolean;
};
export const ButtonAdmin = ({ label, action, ...props }: ButtonAdminProps) => {
	const styling = [styles.btn, props.filled ? styles.filledBtn : "", props.border ? styles.borderBtn : ""].join(" ");
    if (props.isSubmit) { 
        return ( 
            <div className={styles.buttonFrame}>
                <input className={styling} onClick={action} type="submit" value={`${label}`}/>
            </div>
        )
    } else { 
        return (
            <div className={styles.buttonFrame}>
                <button type="button" className={styling} onClick={action}>
                    {label}
                </button>
            </div>
        );
    }
};