const mobileBtnOpen = document.getElementById("mobile-cta");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtnOpen.addEventListener("click", () => {
  nav.classList.add("menu-btn");
  document.getElementById("home-link").focus()
});

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
  document.getElementById("mobile-cta").focus()
});
