/* Set the width of the side navigation to 250px */
function openNav($event) {
  document.getElementById("mySidenav").style.width = "40%";
  document.querySelector(".overlay").style.display = "block";
  $event.stopPropagation();
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector(".overlay").style.display = "none";
}


const fieldCreator = (index) => {
  const row = document.createElement("div");
  row.setAttribute("class", "field-row");
  row.setAttribute("id", `${index}`);
  row.insertAdjacentHTML(
    "beforeend",
    `
      <input class="sidebarFieldInput" placeholder="Field Name" type="text" />
      <select class="sidebarFieldInput">
        <option>Choose Data</option>
      </select>
      <label class="letterN">N</label>
      <i class="fa fa-gear" role="button" id="gear-button"></i>
      <i
        onclick="removeField(event)"
        class="fa fa-trash-o"
        style="margin-left: 20px; font-size: 20px; color: red"
      ></i>
  `
  );
  return row;
};

let = fieldArray = [];

function addfield() {
  fieldArray.push(fieldCreator(fieldArray.length));
  updateDom();
}

function removeField($event) {
  $event.target.parentNode.parentNode.removeChild($event.target.parentNode);
  fieldArray = fieldArray.filter((_, i) => i === $event.target.parentNode.id);
}

function updateDom() {
  document
    .querySelector(".field-form-container")
    .replaceChildren(...fieldArray);
}
addfield();