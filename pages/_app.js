import Head from "next/head";
import "../style/main.css";

function Application({ Component, pageProps }) {
  return (
    <section>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />;
    </section>
  );
}

export default Application;
