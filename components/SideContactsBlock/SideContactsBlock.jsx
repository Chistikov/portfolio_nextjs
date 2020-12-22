import s from "./styles.module.scss";
import { useEffect } from "react";
import gsap from "gsap";

export default function SideContactsBlock() {
  useEffect(() => {
    let contactBlocks = document.querySelectorAll(`.${s.contactWrapper}`);

    contactBlocks.forEach((contactBlock) => {
      contactBlock.addEventListener("mouseenter", () => {
        gsap
          .to(contactBlock.querySelector(`.${s.bg}`), {
            top: 2,
            left: 2,
            width: 66,
            height: 66,
            borderRadius: 26,
            background: "#262626",
            opacity: 1,
            duration: 0.1,
            ease: "linear",
          })
          .then(() => {
            return gsap.to(contactBlock.querySelector(`.${s.bg}`), {
              width: "auto",
              height: 66,
              top: 2,
              left: 2,
              duration: 0.25,
              ease: "linear",
            });
          })
          .then(() => {
            return gsap.to(contactBlock.querySelector(`.${s.bg}`), {
              color: "#F4F4F4",
              duration: 0.15,
            });
          });
      });

      contactBlock.addEventListener("mouseleave", () => {
        gsap
          .to(contactBlock.querySelector(`.${s.bg}`), {
            width: 66,
            height: 66,
            top: 2,
            left: 2,
            borderRadius: 26,
            duration: 0.25,
            ease: "linear",
          })
          .then(() => {
            gsap.to(contactBlock.querySelector(`.${s.bg}`), {
              width: 50,
              height: 50,
              top: 10,
              left: 10,
              borderRadius: 19,
              color: "#262626",
              background: "#BCBCBC",
              opacity: "0.14",
              duration: 0.15,
              ease: "linear",
            });
          });
      });
    });
  });

  return (
    <div className={s.SideContactsBlock}>
      <div className={s.centerBlock}>
        <div className={s.contactWrapper}>
          <div className={s.bg}>
            <a href="https://t.me/nightdev98">@nightdev98</a>
          </div>
          <div
            className={s.iconWrapper}
            style={{
              background: "linear-gradient(218.97deg, #5CD7F2 10.55%, #5A86F5 91.95%)",
            }}
          >
            <img src="images/telegram_img.svg" alt="telegram image" className={s.icon} />
          </div>
        </div>
        <div className={s.contactWrapper}>
          <div className={s.bg}>
            <a href="http://instagram.com/chistikov_98/?hl=ru">@chistikov_98</a>
          </div>
          <div
            className={s.iconWrapper}
            style={{
              background: "linear-gradient(219.22deg, #F25C5C 10.04%, #F25CA4 89.85%)",
            }}
          >
            <img src="images/instagram_img.svg" alt="instagram image" className={s.icon} />
          </div>
        </div>
        <div className={s.contactWrapper}>
          <div className={s.bg}>
            <a href="mailto:vispopro@gmail.com?subject=&body=">vispopro@gmail.com</a>
          </div>
          <div
            className={s.iconWrapper}
            style={{
              background: "linear-gradient(218.97deg, #CD5AF5 10.55%, #7A3BE0 91.95%)",
            }}
          >
            <img src="images/mail_img.png" alt="mail image" className={s.icon} />
          </div>
        </div>
      </div>
      <div className={s.menuIconContainer}>
        <div className={s.menuIcon}>
          <img src="images/menu_img.png" alt="" />
        </div>
      </div>
    </div>
  );
}
