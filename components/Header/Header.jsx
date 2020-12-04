import s from "./styles.module.scss";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.topHeader}>
        <div className={[s.nameSurnameBlock, s.block].join(" ")}>
          CHISTIKOV <span className={s.surname}>VLADYSLAV</span>
        </div>
        <div className={[s.professionBlock, s.block].join(" ")}>
          ux/ui designer&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;web
          developer&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;photographer
        </div>
        <span className={[s.portfolioBlock, s.block].join(" ")}>portfolio / cv</span>
      </div>
      <div className={s.bottomHeader}>
        <img src="/images/avatar_image.png" className={s.image} alt="" />
      </div>
    </div>
  );
}
