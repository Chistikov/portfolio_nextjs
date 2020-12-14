import s from "./styles.module.css";
import { useEffect } from "react";
import gsap from "gsap";

export default function SideContactsBlock() {
  useEffect(() => {
    let contactBlocks = document.querySelectorAll(`.${s.contactWrapper}`);

    contactBlocks.forEach((contactBlock) => {
      contactBlock.addEventListener("mouseenter", () => {
        gsap
          .to(contactBlock.querySelector(`.${s.bg}`), {
            top: 0,
            left: 0,
            width: 70,
            height: 70,
            borderRadius: 26,
            background: "#262626",
            opacity: 1,
            duration: 0.1,
            ease: "linear",
          })
          .then(() => {
            return gsap.to(contactBlock.querySelector(`.${s.bg}`), {
              width: "auto",
              height: 70,
              top: 0,
              left: 0,
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
            width: 70,
            height: 70,
            top: 0,
            left: 0,
            borderRadius: 26,
            duration: 0.25,
            ease: "linear",
          })
          .then(() => {
            gsap.to(contactBlock.querySelector(`.${s.bg}`), {
              width: 54,
              height: 54,
              top: 8,
              left: 8,
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
          <div className={s.bg}>@chistikov</div>
          <div
            className={s.iconWrapper}
            style={{
              background: "linear-gradient(218.97deg, #5CD7F2 10.55%, #5A86F5 91.95%)",
            }}
          >
            <img src="images/telegram_img.svg" alt="" className={s.icon} />
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
            <img src="images/instagram_img.svg" alt="" className={s.icon} />
          </div>
        </div>
        <div className={s.contactWrapper}>
          <div className={s.bg}>vispopro@gmail.com</div>
          <div
            className={s.iconWrapper}
            style={{
              background: "linear-gradient(218.97deg, #CD5AF5 10.55%, #7A3BE0 91.95%)",
            }}
          >
            <img src="images/mail_img.png" alt="" className={s.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}
