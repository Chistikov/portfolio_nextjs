import s from "./styles.module.css";

export default function ReviewMyWorksBlock() {
  return (
    <section className={s.ReviewMyWorksBlock}>
      <h2 className={s.blockTitle}>review my works</h2>
      <div className={s.worksWrapper}>
        <div className={s.workWrapper}>
          <div className={s.content}>
            <img
              src="https://cdn.dribbble.com/users/1644453/screenshots/14627517/media/350223c4a575786b834926412cef14ad.png?compress=1&resize=1600x1200"
              alt="design"
            />
          </div>
        </div>
        <div className={s.workWrapper}>
          <div className={s.content}>
            <img
              src="https://cdn.dribbble.com/users/1615584/screenshots/14340346/media/40e8056eda183eada80ec9ccfa70dfe4.jpg?compress=1&resize=1600x1200"
              alt="design"
            />
          </div>
        </div>
        <div className={s.workWrapper}>
          <div className={s.content}>
            <img
              src="https://cdn.dribbble.com/users/1644453/screenshots/14672307/media/bff865549f746e0922b7e283da591c80.png?compress=1&resize=1600x1200"
              alt="design"
            />
          </div>
        </div>
        <div className={s.workWrapper}>
          <div className={s.content}>
            <img
              src="https://cdn.dribbble.com/users/1259559/screenshots/14671619/media/5429de465370851011db50f21b591c2b.jpg?compress=1&resize=1200x900"
              alt="design"
            />
          </div>
        </div>
        <div className={s.workWrapper}>
          <div className={s.content}>
            <img
              src="https://cdn.dribbble.com/users/2227807/screenshots/14712733/media/3f29bd7d11444ef258e14ebda87c399d.png?compress=1&resize=1200x900"
              alt="design"
            />
          </div>
        </div>
        <div className={s.workWrapper}>
          <div className={s.content}>
            <img
              src="https://cdn.dribbble.com/users/13307/screenshots/10722982/media/3fa892a8a9108cfb074ff2cc162b06e0.jpg?compress=1&resize=1200x900"
              alt="design"
            />
          </div>
        </div>

        <div className={s.workWrapper}>
          <div className={s.content}>
            <img
              src="https://cdn.dribbble.com/users/5261465/screenshots/14203075/media/bca51e8dfe991c28a0b12082d9e5e983.jpg?compress=1&resize=1200x900"
              alt="design"
            />
          </div>
        </div>
        <div className={s.workWrapper}>
          <div className={s.content}>
            <img
              src="https://cdn.dribbble.com/users/374494/screenshots/11653898/media/0ae10bd994cac65a9ffa3564893b9944.png?compress=1&resize=1200x900"
              alt="design"
            />
          </div>
          <a className={s.moreBtn} href="#">
            more
            <img src="/images/arrow.svg" alt="" />
          </a>
        </div>
        {/* <div className={`${s.workWrapper} ${s.moreBtn}`}>
          <div className={s.content}></div>
        </div> */}
      </div>
    </section>
  );
}
