import s from "./styles.module.scss";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    function moveGradient() {
      let scrolledPx = document.documentElement.scrollTop || window.pageYOffset;
      let gradient = document.querySelector(`.${s.shadow}`);
      let headerTopHeight = document.querySelector(`.${s.topHeader}`).clientHeight;
      gradient.style.transform = `translateY(${headerTopHeight + scrolledPx - 100}px)`;
    }

    function resizeHeader() {
      let scrolledPx = document.documentElement.scrollTop || window.pageYOffset;
      let headerTop = document.querySelector(`.${s.topHeader}`);

      if (scrolledPx !== 0) {
        setTimeout(() => {
          headerTop.classList.remove(s.headerFull);
          headerTop.classList.add(`${s.headerCrop}`);
        }, 0);
      } else {
        setTimeout(() => {
          headerTop.classList.remove(s.headerCrop);
          headerTop.classList.add(s.headerFull);
        }, 0);
      }
    }

    function moveImage() {
      let scrolledPx = document.documentElement.scrollTop || window.pageYOffset;
      let image = document.querySelector(`.${s.image}`);
      image.style.bottom = -parseInt(scrolledPx / 3) + "px";
    }

    function moveText() {
      let scrolledPx = document.documentElement.scrollTop || window.pageYOffset;
      let textLayer = document.querySelector(`.${s.textLayer}`);
      let blockHeight = document.querySelector(`.${s.bottomHeader}`).offsetHeight;
      textLayer.style.top = parseInt(blockHeight / 2 + scrolledPx / 2) + 23 + "px";
    }

    resizeHeader();
    moveGradient();

    document.onscroll = () => {
      resizeHeader();
      moveGradient();
      moveImage();
      moveText();
    };
  });

  return (
    <div className={s.header}>
      <div className={s.topHeader}>
        <div className={[s.nameSurnameBlock, s.block].join(" ")}>
          CHISTIKOV <span className={s.surname}>VLADYSLAV</span>
        </div>
        {/* <div className={[s.professionBlock, s.block].join(" ")}>
          web developer&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;ux/ui designer
        </div> */}
        <span className={[s.portfolioBlock, s.block].join(" ")}>
          portfolio<span className={s.cv}> / cv</span>
        </span>
      </div>

      <div className={s.bottomHeader}>
        <div className={s.textLayer}>
          <div className={s.leftBlock}>
            web
            <div className={s.lastRow}>developer</div>
          </div>
          <div className={s.rightBlock}>
            <div className={s.firstRow}>ux/ui</div>
            designer
          </div>
        </div>
        <img src="/images/avatar_img.png" className={s.image} alt="" />
        <div className={s.shadow}></div>
      </div>
    </div>
  );
}
