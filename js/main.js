const user = document.querySelector(".logo");
const menu = document.querySelector(".open");
const aside = document.querySelector("#aside");
const navigation = document.querySelector(".navigation");
const closeAside = document.querySelector("#close-aside");
closeAside.addEventListener("click", () => {
  aside.setAttribute("data-visible", "false");
});
user.addEventListener("click", () => {
  aside.style.animationPlayState = "running";
  const attr = aside.getAttribute("data-visible");
  if (attr == "false") {
    aside.setAttribute("data-visible", "true");
  } else {
    aside.setAttribute("data-visible", "false");
  }
});

menu.addEventListener("click", () => {
  const attrs = navigation.getAttribute("data-visible");
  if (attrs == "false") {
    navigation.setAttribute("data-visible", "true");
    menu.innerHTML = `<i class="fas fa-times fa-2x"></i>`;
  } else {
    navigation.setAttribute("data-visible", "false");
    menu.innerHTML = `<i class="fas fa-bars fa-2x"></i>`;
  }
});
