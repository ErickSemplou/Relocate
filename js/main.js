/* BURGER MENU */

// link in button
let menu = document.getElementById("nav__toggle");

// add all elements
let elements = document.querySelectorAll("#nav__toggle, #nav");

//status
let isActive = false;

// add event listener "click"
menu.addEventListener("click", function() {

  if (isActive) {
    elements.forEach(function(element) {
      element.classList.remove("active");
    });
    isActive = false;
  } else {
      elements.forEach(function(element) {
      element.classList.add("active");
    });
    isActive = true;
  }
});
