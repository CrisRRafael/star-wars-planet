// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle from "../shared/styles/GlobalStyles";
import AppLayout from "../shared/Layout";
import { PlanetSearchContextProvider } from "../context/PlanetSearchContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <PlanetSearchContextProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </PlanetSearchContextProvider>
    </AppLayout>
  );
}
