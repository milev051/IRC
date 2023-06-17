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

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}