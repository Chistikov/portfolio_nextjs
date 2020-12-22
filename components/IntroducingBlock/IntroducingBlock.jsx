import s from "./style.module.scss";

export default function IntroducingBlock() {
  return (
    <div className={s.block}>
      <div className={s.wrapper}>
        <img src="images/overlay.svg" alt="overlay" className={s.overlay} />
        <div className={s.textContainer}>
          <div className={s.t1}>HI,</div>
          <div className={s.t2}>i`m Vlad, web-developer & ux/ui designer</div>
          <div className={s.divider}></div>
          <div className={s.t3}>
            <div>Мy total experience in web development is over 5 years.</div>
            <div>During this time i accumulated a lot of experience.</div>
            <div>I always try to improve my skills.</div>
            <div>I`m open to work and i will be happy to cooperate with you.</div>
            <div>My skills list and works you can see below.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
