import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CHISTIKOV VLAD | PORTFOLIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header></Header>
        Portfolio
      </main>
    </div>
  );
}
