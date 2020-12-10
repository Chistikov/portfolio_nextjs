import gsap from "gsap";

export default function tabSwitcher(s) {
  let buttons = document.querySelectorAll(`.${s.mySkillsBlock} .${s.btn}`);
  let tabs = document.querySelectorAll(`.${s.mySkillsBlock} .${s.skillsBlock}`);
  let container = document.querySelector(`.${s.skillsWrapper}`);
  let lastActiveDataLInk = 0;

  buttons.forEach((btn) => {
    btn.onclick = () => {
      let data_link = +btn.getAttribute("data-link");
      if (lastActiveDataLInk !== data_link) {
        makeAllButtonsDisabled();
        btn.classList.add(s.active);
        let lastContainerHeight = tabs[lastActiveDataLInk].offsetHeight;
        container.style.height = lastContainerHeight + "px";
        hideAllTabs()
          .then(() => {
            return gsap.to(tabs[data_link], {
              display: "block",
              opacity: 0,
              position: "static",
              duration: 0,
            });
          })
          .then(() => {
            let newContainerHeight = tabs[data_link].offsetHeight;
            return gsap.fromTo(
              container,
              { height: lastContainerHeight + "px" },
              { height: "auto", duration: 0.5 }
            );
          })
          .then(() => {
            return gsap.to(tabs[data_link], { display: "flex", opacity: 0, duration: 0 });
          })
          .then(() => {
            gsap.to(tabs[data_link], { opacity: 1, duration: 0.5 });
          });

        lastActiveDataLInk = data_link;
      }
    };
  });

  function makeAllButtonsDisabled() {
    buttons.forEach((btn) => {
      if (btn.classList.contains(s.active)) {
        btn.classList.remove(s.active);
      }
    });
  }

  function hideAllTabs() {
    let promArr = [];
    tabs.forEach((tab) => {
      promArr.push(
        gsap.to(tab, { opacity: "0", duration: 0.5 }).then(() => {
          gsap.to(tab, { position: "absolute", zIndex: "-999", display: "none", duration: 0 });
        })
      );
    });

    return Promise.all(promArr);
  }
}
