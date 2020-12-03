import Head from "next/head";
import Link from "next/link";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preload" href="../public/fonts/Lato/Lato-Bold.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="../public/fonts/Lato/Lato-Light.ttf" as="font" crossOrigin="" />
        <link rel="preload" href="../public/fonts/Lato/Lato-Regular.ttf" as="font" crossOrigin="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
