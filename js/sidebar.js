const refs = {
  openMenu: document.querySelector("[data-menu-open]"),
  closeMenu: document.querySelector("[data-menu-close]"),
  container: document.querySelector(".sidebar__container"),
};

refs.openMenu.addEventListener("click", openMenu);
refs.closeMenu.addEventListener("click", closeMenu);

function openMenu() {
  refs.container.classList.add("sidebar__container--shown");
}

function closeMenu() {
  refs.container.classList.remove("sidebar__container--shown");
}
