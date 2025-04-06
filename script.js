document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".header_right--mobile img");
  const menuList = document.querySelector(".header_right--mobile--list");
  const menuListClose = document.querySelector(
    ".header_right--mobile--list--close"
  );

  const openThankYouPopup = document.querySelectorAll(
    ".main_fifth--cards--el--btn"
  );
  const thankYouPopup = document.querySelector(".popup");
  const popupClose = document.querySelector(".popup_close img");

  const explorePopupOpen = document.querySelector(".main_eighth--btn");
  const explorePopupClose = document.querySelector(".explore_popup--close img");

  const explorePopup = document.querySelector(".explore_popup");

  openThankYouPopup.forEach((button) => {
    button.addEventListener("click", () => {
      thankYouPopup.classList.add("active");
    });
  });
  popupClose.addEventListener("click", function () {
    thankYouPopup.classList.remove("active");
  });

  explorePopupOpen.addEventListener("click", function () {
    explorePopup.classList.add("active");
  });

  explorePopupClose.addEventListener("click", function () {
    explorePopup.classList.remove("active");
  });

  menuButton.addEventListener("click", function (event) {
    menuList.style.transform = "translateX(0)";
    event.stopPropagation();
  });

  document.addEventListener("click", function (event) {
    if (
      (!menuList.contains(event.target) &&
        !menuButton.contains(event.target)) ||
      menuListClose.contains(event.target)
    ) {
      menuList.style.transform = "translateX(100%)";
    }
  });

  document.addEventListener("click", function (event) {
    if (
      thankYouPopup.classList.contains("active") &&
      !thankYouPopup.querySelector(".popup_info").contains(event.target) &&
      !event.target.classList.contains("main_fifth--cards--el--btn")
    ) {
      thankYouPopup.classList.remove("active");
    }
  });
});
