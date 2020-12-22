import s from "./styles.module.scss";
import { useEffect, useState } from "react";

import tabSwitcher from "./helpers/tabSwitcher.js";

export default function MySkillsBlock() {
  let [getContent, setContent] = useState(0);

  useEffect(tabSwitcher.bind(null, s));

  return (
    <section className={s.mySkillsBlock}>
      <span className={s.title}>My skills</span>
      <div className={s.buttonsBlock}>
        <div className={`${s.btn} ${s.active}`} data-link="0">
          programming
        </div>
        <div className={`${s.btn}`} data-link="1">
          ux/ui design
        </div>
      </div>
      <div className={s.skillsWrapper}>
        <div className={`${s.skillsBlock} `} data-link="0">
          <div className={s.horisontalWrapper}>
            <div className={s.skillsContainer}>
              <h3 className={s.skillsContainerTitle}>About me</h3>
              <h4 className={s.skillsContainerSkill}>Cloud Works - 11 months of experience</h4>
              <h4 className={s.skillsContainerSkill}>1.5 year of freelance</h4>
              <h4 className={s.skillsContainerSkill}>
                Graduated NTU KHPI (speciality computer science)
              </h4>
              <h4 className={s.skillsContainerSkill}>
                Graduated KCTC NTU KHPI (software engineering)
              </h4>
            </div>

            <div className={s.skillsContainer}>
              <h3 className={s.skillsContainerTitle}>SKILLS</h3>
              <h4 className={s.skillsContainerSkill}>JavaScript</h4>
              <h4 className={s.skillsContainerSkill}>Vue.js + Vuex</h4>
              <h4 className={s.skillsContainerSkill}>ReactJS + Redux</h4>
              <h4 className={s.skillsContainerSkill}>HTML + CSS (SASS, SCSS)</h4>
              <h4 className={s.skillsContainerSkill}>FlexBox model + Grid layout</h4>
              <h4 className={s.skillsContainerSkill}>Bootstrap</h4>
              <h4 className={s.skillsContainerSkill}>Adaptive layout</h4>
            </div>
          </div>
          <div className={s.horisontalWrapper}>
            <div className={s.skillsContainer}>
              <h3 className={s.skillsContainerTitle}>SOFT SKILLS</h3>
              <h4 className={s.skillsContainerSkill}>Ability to work with information</h4>
              <h4 className={s.skillsContainerSkill}>Glad to learn new technologies</h4>
              <h4 className={s.skillsContainerSkill}>Always try to improve my skills</h4>
              <h4 className={s.skillsContainerSkill}>Friendly and polite</h4>
              <h4 className={s.skillsContainerSkill}>Communication skills</h4>
              <h4 className={s.skillsContainerSkill}>Creative skills</h4>
            </div>

            <div className={s.skillsContainer}>
              <h3 className={s.skillsContainerTitle}>I HAD EXPERIENCE with</h3>
              <h4 className={s.skillsContainerSkill}>Node.js (Express framework)</h4>
              <h4 className={s.skillsContainerSkill}>MySql</h4>
              <h4 className={s.skillsContainerSkill}>JQuery</h4>
              <h4 className={s.skillsContainerSkill}>БЭМ</h4>
              <h4 className={s.skillsContainerSkill}>PHP</h4>
              <h4 className={s.skillsContainerSkill}>Python (Flask & Django frameworks)</h4>
            </div>
          </div>
        </div>

        <div className={`${s.skillsBlock} ${s.hide}`} data-link="1">
          Soon something will be here :)
        </div>
      </div>
    </section>
  );
}
