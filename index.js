(function() {
  function renderTableCard(table) {
    const tablesContainer = document.getElementById('tables-container');
    const tableCard = `
    <div class="table-container">
      <div class="table-header"></div>
      <div class="table-body">
        <h3 class="white-text table-heading">
          ${table.schemaName}  
          <span class="table-subheading">(MODEL for ${table.tableName})</span>
        </h3>
        ${table.definition.columns.length &&
          table.definition.columns.map((column, i) => (
            `<div class="field-container">
              <div>
                <b
                  class="field-option ${
                    column.modifiers &&
                    column.modifiers.findIndex(
                      (obj) => obj.name === "nullable"
                    ) !== -1
                      ? "active-color"
                      : ""
                  }"
                >
                  N
                </b>
                <span class="white-text">${column.name}</span>
              </div>
              <span class="white-text">${column.dataType}</span>
            </div>`
          )).join("")}
        <br />
      </div>
    </div>
    `;
    tablesContainer.innerHTML = tableCard;
  }
  renderTableCard(tablesData[0])
})()
