import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/types/generated/styles/globalStyles";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloSetting>
      <>
      <Global styles={globalStyles}/>
      <Layout>
        <Component {...pageProps} />
      </Layout></>
    </ApolloSetting>
  );
}
