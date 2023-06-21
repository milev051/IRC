function showPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "flex";

  // var popupElement = document.querySelector(".popup");
  // popupElement.display = "flex";

  // var elements = document.getElementsByClassName("popup");
  // var popupElement = elements[0]; // Assuming you want the first matching element
  // popupElement.display = "flex";
}

function hidePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

// HAMBURGER MENU

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

var menu = document.getElementById("header-menu2");
var logo = document.getElementById("header-logo");
var hamburger = document.getElementById("header-hamburger-icon");
var header = document.getElementsByTagName("header")[0];
function toggleMenu() {
  if (menu.style.display === "flex") {
    closeMenu();
  } else {
    openMenu();
  }
}

function closeMenu() {
  menu.style.display = "none";
  logo.src = "img/icon-irc-white.png";
  hamburger.src = "img/icon-hamburger.png"
  header.style.backgroundColor = "transparent";
}
function openMenu() {
  menu.style.display = "flex";
  logo.src = "img/icon-irc.png";
  hamburger.src = "img/icon-close-button.png"
  header.style.backgroundColor = "white";
}

window.addEventListener('resize', closeHamburgerMenu);