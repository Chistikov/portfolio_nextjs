import s from "./styles.module.css";
import Image from "next/image";

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
        <div className={s.image}>
          <Image
            src="/images/avatar_image.png"
            alt="Picture of the author"
            width={500}
            height={500}
          ></Image>
        </div>
      </div>
    </div>
  );
}
