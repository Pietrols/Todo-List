import "./style.css";

import { createlayout } from "./layout.js";

window.addEventListener("DOMContentLoaded", () => {
  createlayout(); // Create layout once

  // Select the popup overlay, add-note buttons, and close button
  const popupOverlay = document.getElementById("popup-overlay");
  const sidebarAddBtn = document.getElementById("add-note-button");
  const mainAddBtn = document.getElementById("main-add-btn");
  const closeButton = document.getElementById("form-close");

  // Function to toggle the popup visibility
  function togglePopup() {
    popupOverlay.classList.toggle("hidden"); // Show or hide the overlay
    const popupForm = document.getElementById("todo-form");
    popupForm.classList.toggle("hidden"); // Show or hide the form inside the overlay
  }

  // Attach event listeners
  sidebarAddBtn.addEventListener("click", togglePopup);
  mainAddBtn.addEventListener("click", togglePopup);

  closeButton.addEventListener("click", togglePopup);

  // Click outside the form (on overlay) to hide the popup
  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      togglePopup();
    }
  });
});
