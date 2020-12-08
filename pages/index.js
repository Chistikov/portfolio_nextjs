import Head from "next/head";
import s from "../styles/Home.module.css";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CHISTIKOV VLAD | PORTFOLIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.wrapper}>
        <Header></Header>
        <section className={s.fastReview}>
          <h2 className={s.title}>fast review</h2>
          <div className={s.works}>
            <div className={s.work}>
              <div className={s.content}>
                <img
                  src="https://images.unsplash.com/photo-1563351672-62b74891a28a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className={s.work}>
              <div className={s.content}>
                <img
                  src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className={s.work}>
              <div className={s.content}>
                <img
                  src="https://images.unsplash.com/photo-1462804993656-fac4ff489837?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className={s.work}>
              <div className={s.content}>
                <img
                  src="https://images.unsplash.com/photo-1495874418447-4a9bab856d0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=931&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className={s.work}>
              <div className={s.content}>
                <img
                  src="https://images.unsplash.com/photo-1593360322032-a8008d029c41?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className={s.work}>
              <div className={s.content}>
                <img
                  src="https://images.unsplash.com/photo-1441123100240-f9f3f77ed41b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className={s.work}>
              <div className={s.content}>
                <img
                  src="https://images.unsplash.com/photo-1593944769525-806dbf25df6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1028&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className={s.work}>
              <div className={s.content}>
                <img
                  src="https://images.unsplash.com/photo-1583843364289-0d1b2978874c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                  alt=""
                />
              </div>
              <div rel="stylesheet" href="#" className={s.darkBg}>
                <div>more</div>
                <img src="/images/arrow.svg" alt="" />
              </div>
            </div>
            {/* <div className={s.moreBtn}>
              <div className={s.content}>more</div>
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
