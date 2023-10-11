// JavaScript to toggle the navigation menu
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.toggle("show-menu");
  });

// JavaScript to close the menu when a menu item is clicked
document.querySelectorAll(".nav-menu a").forEach(function (item) {
  item.addEventListener("click", function () {
    document.querySelector(".nav-menu").classList.remove("show-menu");
  });
});
