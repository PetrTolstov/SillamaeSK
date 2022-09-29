import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
	uri: "https://sportcomplex-server.sillamaesk.ee",
	//uri: "http://localhost:4000",
	cache: new InMemoryCache({ addTypename: false}),
});
