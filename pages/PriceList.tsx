import type { NextPage } from "next";

import Layout from "../components/Layout";
import AppIsBeingBuilt from "../components/Temporary/AppIsBeingBuilt";
import { useGetPriceListQuery } from "../graphqlGenerated/graphql";

const PriceList: NextPage = () => {
	const { loading, error, data } = useGetPriceListQuery();
	return (
		<Layout>
			<AppIsBeingBuilt isEst={true} />
			<div>
				{loading ? <p>Loading...</p> : <></>}
				{data?.GetPriceList.map((el) => (
					<div key={el?._id}>
						<h1>{el?.name.ENG}</h1>
						<h1>{el?.name.EST}</h1>
						<h1>{el?.name.RUS}</h1>
					</div>
				))}
			</div>
		</Layout>
	);
};

export default PriceList;
