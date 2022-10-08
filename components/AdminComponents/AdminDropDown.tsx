import { ChangeEvent, useEffect, useState } from "react";
import { SimplePage } from "../../graphqlGenerated/graphql";

export const AdminDropDown = ({
	pages,
	currentPage,
	updateCurrentPage,
}: {
	pages: SimplePage[];
	currentPage: SimplePage;
	updateCurrentPage: (page: SimplePage) => void;
}) => {
	// useEffect(() => {
	// 	updateCurrentPage(pages[0] ?? "");
	// }, []);
	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const newCurrentPage = pages?.find((el) => el._id == e.currentTarget.value);
		updateCurrentPage(newCurrentPage!);
	};
	return (
		<>
			<select value={currentPage?._id} onChange={handleChange}>
				{pages?.map((el) => (
					<option key={el._id} value={el._id}>
						{el.pageName}
					</option>
				))}
			</select>
		</>
	);
};
