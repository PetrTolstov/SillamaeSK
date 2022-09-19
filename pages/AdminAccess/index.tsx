import React, { ReactElement } from "react";
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
export function Header() {
	return (
		<div className={styles.adminHeader}>
			<div className={styles.logo}></div>
		</div>
	);
}

export default AdminHome;
