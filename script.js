const container = document.querySelector("#container");

const content = document.querySelector(".content");

let divRows = "";
let divColumns = "";

function gridRowsColumns(rows, column) {
    for (let i = 0; i < column; i++) {
        divColumns = document.createElement("div");

        container.appendChild(divColumns).className = "makeColumns";
    }

    for (let j = 0; j < rows; j++) {
        divRows = document.createElement("div");

        container.appendChild(divRows).className = "makeRows";
    }
}

gridRowsColumns(16, 16);

const rows = document.querySelectorAll(".makeRows");
const columns = document.querySelectorAll(".makeColumns");

function randomizeColor() {
    rows.forEach((row) => {
        row.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "red";
        });
    });

    columns.forEach((column) => {
        column.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "red";
        });
    });
}

const toReset = document.querySelector("#reset");

function resetGrid() {
    toReset.addEventListener("click", () => {
        rows.forEach((row) => {
            row.style.backgroundColor = "white";
        });
    });

    toReset.addEventListener("click", () => {
        columns.forEach((cell) => {
            cell.style.backgroundColor = "white";
        });
    });
}

randomizeColor();
resetGrid();
