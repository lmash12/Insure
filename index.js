const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".nav_dropdown_links");
const dropdown_menu = document.querySelector(".dropdown_menu");

let isOpen = false; // Initialize the dropdown state as closed

toggleBtn.addEventListener("click", function () {
  isOpen = !isOpen; // Toggle the dropdown state
  dropdown_menu.classList.toggle("open", isOpen); // Toggle the "open" class
  console.log("clicks");

  // Change the icon based on the dropdown state
  if (isOpen) {
    toggleBtnIcon.src = "images/icon-close.svg"; // Set the close icon
  } else {
    toggleBtnIcon.src = "images/icon-hamburger.svg"; // Set the open icon
  }
});
