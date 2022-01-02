/* Set the width of the side navigation to 250px */
function openSchemaForm($event, table) {
  document.getElementById("mySidenav").style.width = "40%";
  document.querySelector(".overlay").style.display = "block";
  if ($event) {
    $event.stopPropagation();
  }

  const nameField = document.getElementById("schema-form-name");
  const fieldContainer = document.getElementById("field-form-container");
  if (table) {
    nameField.value = table.schemaName;
    fieldContainer.innerHTML = table.columns
      .map(
        (col) =>
          `
      <div class="field-row">
        <input class="sidebarFieldInput" placeholder="Field Name" type="text" value="${
          col.name
        }" />
        <select class="sidebarFieldInput">
          <option>Choose Data</option>
          ${Object.entries(DATA_TYPES).map(
            ([key, value]) => `<option value=${key}>${value}</option>`
          )}
        </select>
        <label class="letterN">N</label>
        <i class="fa fa-gear" role="button" id="gear-button"></i>
        <i
          onclick="removeField(event)"
          class="fa fa-trash-o"
          style="margin-left: 20px; font-size: 20px; color: red"
        ></i>
      </div>
    `
      )
      .join("");
  } else {
    nameField.value = "";
    fieldContainer.innerHTML = `
    <div class="field-row">
      <input class="sidebarFieldInput" placeholder="Field Name" type="text" />
      <select class="sidebarFieldInput">
        <option>Choose Data</option>
        ${Object.entries(DATA_TYPES).map(
          ([key, value]) => `<option value=${key}>${value}</option>`
        )}
      </select>
      <label class="letterN">N</label>
      <i class="fa fa-gear" role="button" id="gear-button"></i>
      <i
        onclick="removeField(event)"
        class="fa fa-trash-o"
        style="margin-left: 20px; font-size: 20px; color: red"
      ></i>
    </div>
    `;
  }
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
        ${Object.entries(DATA_TYPES).map(
          ([key, value]) => `<option value=${key}>${value}</option>`
        )}
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
    .querySelector("#field-form-container")
    .replaceChildren(...fieldArray);
}
addfield();
