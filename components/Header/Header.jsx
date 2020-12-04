import s from "./styles.module.css";

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.topHeader}>
        <span className={s.name}>CHISTIKOV VLADYSLAV</span>
        <span className={s.profession}>
          ux/ui designer&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;web
          developer&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;photographer
        </span>
        <span className={s.portfolio}>portfolio</span>
      </div>
      <div className={s.bottomHeader}>
        <img src="/images/avatar_image.png" className={s.image} alt="" />
      </div>
    </div>
  );
}
