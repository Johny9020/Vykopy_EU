$(document).ready(function () {
  const toggleBtn = document.querySelector(".mobile_nav");
  const toggleBtnIcon = document.querySelector(".mobile_nav i");
  const dropdownMenu = document.querySelector(".dropdown_menu");

  toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle("open");
    const isOpen = dropdownMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
  };
});
