import Link from "next/link";
import { useRouter } from "next/router";
import { ButtonAdmin } from "./ButtonAdmin";

export const GoBackPage = () => {
	const router = useRouter();
	return (
		<div>
			<h1>Te pole sisse logitud</h1>
			<a>
				<ButtonAdmin
					border
					action={() => {
						router.push("/AdminAccess");
					}}
					label={"Mine tagasi"}
				/>
			</a>
		</div>
	);
};
