import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { ApolloProvider } from '@apollo/client'
import { client } from '../components/GraphQL/ApolloClient';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);
	return getLayout(
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
        
    );
}

export default MyApp;
