import React, { ReactElement, useState } from "react";
import styles from "../../styles/AdminHeader.module.css";
import { NextPageWithLayout } from "../_app";

const AdminHome: NextPageWithLayout = () => {
	return <div>Hello</div>;
};

AdminHome.getLayout = function getLayout(AdminHome: ReactElement) {
	return (
		<>
			<AdminLayout>{AdminHome}</AdminLayout>
		</>
	);
};

export function AdminLayout({ children }: React.PropsWithChildren) {
	return (
		<>
			<Header />
			<div>{children}</div>
		</>
	);
}

export function SidePanel() {
	return (
		<div className={styles.sidePanel}>
			<BurgerButton />
			<div className={styles.mainSidePanelContent}></div>
		</div>
	);
}
export function Header() {
	return (
		<>
			<div className={styles.adminHeader}>
				<div className={styles.logo}></div>
				<p>SILLAMÄE SPORDIKOMPLEKS KALEV</p>
				<p>ADMIN</p>
			</div>
			<SidePanel />
		</>
	);
}

export function BurgerButton() {
	const [isShown, setIsshown] = useState(false);
	if (isShown) {
		return (
			<div
				className={[styles.container, styles.BurgerButton].join(" ")}
				onClick={(e) => {
					e.currentTarget.classList.toggle("active");
				}}>
				<svg
					className={styles.svg}
					xmlns='http://www.w3.org/2000/svg'
					width='50'
					height='50'
					viewBox='0 0 200 200'>
					<g strokeWidth='6.5' strokeLinecap='round'>
						<path
							className={styles.path}
							d='M72 82.286h28.75'
							fill='#009100'
							fillRule='evenodd'
							stroke='#000'
						/>
						<path
							className={styles.path}
							d='M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554'
							fill='none'
							stroke='#000'
						/>
						<path
							className={styles.path}
							d='M72 125.143h28.75'
							fill='#009100'
							fillRule='evenodd'
							stroke='#000'
						/>
						<path
							className={styles.path}
							d='M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554'
							fill='none'
							stroke='#000'
						/>
						<path
							className={styles.path}
							d='M100.75 82.286h28.75'
							fill='#009100'
							fillRule='evenodd'
							stroke='#000'
						/>
						<path
							className={styles.path}
							d='M100.75 125.143h28.75'
							fill='#009100'
							fillRule='evenodd'
							stroke='#000'
						/>
					</g>
				</svg>
			</div>
		);
	} else { 
        return <></>
    }
}

export default AdminHome;
