import { SessionProvider } from "next-auth/react";
import { ThemeContextProvider } from "../src/components/store/theme-context";
import Layout from "../src/components/Layout";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </SessionProvider>
  );
}
