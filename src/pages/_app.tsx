import type { AppProps } from "next/app";
import GlobalStyle from "../shared/styles/GlobalStyles";
import AppLayout from "../shared/Layout";
import { PlanetSearchContextProvider } from "../context/PlanetSearchContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <PlanetSearchContextProvider>
          <Component {...pageProps} />
        </PlanetSearchContextProvider>
      </AppLayout>
    </>
  );
}
