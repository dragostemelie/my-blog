import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";

import "../styles/globals.scss";
import { Preload } from "components/Preload";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="rgba(28, 28, 28, 1)" />
      <Preload>
        <Component {...pageProps} />
      </Preload>
    </>
  );
}

export default MyApp;
