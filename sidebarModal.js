const gearButton = document.getElementById("gear-button");
const modal = document.getElementById("config-modal");
const closeButton = document.getElementById("config-modal-close");
let open = false;

function toggle() {
  if (open) {
    close();
  } else {
    modal.classList.add("show");
  }
  open = !open;
}

function close() {
  modal.classList.remove("show");
}

gearButton.addEventListener("click", toggle);
closeButton.addEventListener("click", toggle);
