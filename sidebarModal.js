const gearButton = document.getElementById("gear-button");
const modal = document.getElementById("config-modal");
const closeButton = document.getElementById("config-modal-close");

// This const selects every DOM element inside modal window (for ex. forms, text, 
// options, etc.)

const modalChild = Array.from(document.querySelectorAll("#config-modal *"));

// Modal window for GEAR

document.addEventListener("click", function(e) {
  
// If we clicked on "gear icon"

    if (e.target.classList.contains("fa-gear")) {

      // show our configuration modal window

      modal.classList.add("show");

      // But if we clicked anywhere EXCEPT our modal window, hide modal window

    } else if (!modalChild.includes(e.target)) {
      modal.classList.remove("show")
    }
  });