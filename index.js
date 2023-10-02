const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".nav_dropdown_links");
const dropdown_menu = document.querySelector(".dropdown_menu");
const body = document.body; // Get the body element

let isOpen = false; // Initialize the dropdown state as closed

toggleBtn.addEventListener("click", function () {
  isOpen = !isOpen; // Toggle the dropdown state
  dropdown_menu.classList.toggle("open", isOpen); // Toggle the "open" class

  // Change the icon based on the dropdown state
  if (isOpen) {
    toggleBtnIcon.src = "images/icon-close.svg"; // Set the close icon
    body.classList.add("no-scroll");
  } else {
    toggleBtnIcon.src = "images/icon-hamburger.svg"; // Set the open icon
    body.classList.remove("no-scroll");
  }
});

// Add an event listener to close the menu when an option is clicked
const menuItems = document.querySelectorAll(".dropdown_menu ul li a");
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", function () {
    isOpen = false; // Set the dropdown state to closed
    dropdown_menu.classList.remove("open"); // Remove the "open" class
    toggleBtnIcon.src = "images/icon-hamburger.svg"; // Set the open icon
    body.classList.remove("no-scroll"); // Remove class to enable scrolling
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
