const container = document.querySelector("#container");

const content = document.querySelector(".content");
const toReset = document.querySelector("#reset");

function gridRowsColumns(size) {
    for (let i = 0; i < size; i++) {
        const divColumns = document.createElement("div");

        container.appendChild(divColumns).className = "makeColumns";
    }

    for (let j = 0; j < size; j++) {
        const divRows = document.createElement("div");

        container.appendChild(divRows).className = "makeRows";
    }

    const rows = document.querySelectorAll(".makeRows");
    const columns = document.querySelectorAll(".makeColumns");

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

gridRowsColumns(16);

function resetGrid() {
    toReset.addEventListener("click", () => {
        document.querySelectorAll(".makeRows").forEach((row) => {
            row.style.backgroundColor = "";
        });
    });

    toReset.addEventListener("click", () => {
        document.querySelectorAll(".makeColumns").forEach((cell) => {
            cell.style.backgroundColor = "";
        });
    });
}

function createNewGrid() {
    const create = document.querySelector("#create");

    create.addEventListener("click", () => {
        const inputGridSize = parseInt(
            prompt("Set a size. Between 2-100: ", 10)
        );

        if (inputGridSize >= 2 && inputGridSize <= 100) {
            container.replaceChildren();
            gridRowsColumns(inputGridSize);
        } else {
            alert("Please enter a number between 2-100");
        }
    });
}

createNewGrid();
resetGrid();
