const container = document.querySelector(".container");

function createGrid(rowNum, columnNum){
    for (r = 0; r < rowNum; r++) {
        const row = document.createElement("div");
        row.setAttribute("style","display : flex;");

        for(c = 0; c < columnNum; c++){
            const column = document.createElement("div");
            row.appendChild(column).className = "gridColumn";
        }
        container.appendChild(row).className = "gridRow";
    };
}
createGrid(16,16);

