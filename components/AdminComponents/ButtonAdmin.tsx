import { ReactElement } from "react";
import styles from "../../styles/ButtonAdmin.module.css";

export type ButtonAdminProps = {
	label: string | ReactElement;
	action: () => void;
	filled?: boolean;
	border?: boolean;
};
export const ButtonAdmin = ({ label, action, ...props }: ButtonAdminProps) => {
	const styling = [styles.btn, props.filled ? styles.filledBtn : "", props.border ? styles.borderBtn : ""].join(" ");
	return (
		<div>
			<button className={styling} onClick={action}>
				{label}
			</button>
		</div>
	);
};
