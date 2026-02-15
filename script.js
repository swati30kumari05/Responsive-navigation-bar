const openBtn = document.getElementById("openMenu");
const closeBtn = document.getElementById("closeMenu");
const menu = document.getElementById("mobileMenu");

openBtn.addEventListener("click", () => {
  menu.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
});

