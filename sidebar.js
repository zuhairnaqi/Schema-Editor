/* Set the width of the side navigation to 250px */
function openNav($event) {
  document.getElementById("mySidenav").style.width = "50%";
  document.querySelector(".overlay").style.display = "block";
  $event.stopPropagation();
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".overlay").style.display = "none";
}
