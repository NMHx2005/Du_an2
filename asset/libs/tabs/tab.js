const tabs = document.querySelectorAll(".tab:not(.disabled)");
const panes = document.querySelectorAll(".tab-panel");

tabs.forEach((tab, index) => {
  const panel = panes[index];

  tab.onclick = function () {
    document.querySelector(".tab.active").classList.remove("active");
    document.querySelector(".tab-panel.active").classList.remove("active");

    this.classList.add("active");
    panel.classList.add("active");
  };
});