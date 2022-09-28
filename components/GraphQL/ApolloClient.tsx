import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
	uri: "https://sillamae-sk.herokuapp.com",
	// uri: "http://localhost:4000",
	cache: new InMemoryCache({ addTypename: false}),
});
