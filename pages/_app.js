import "@/style/main.css";
import Head from "next/head";

function Application({ Component, pageProps }) {
  return (
    <section>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </section>
  );
}

export default Application;
