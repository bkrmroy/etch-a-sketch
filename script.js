const container = document.querySelector(".container");
console.log(container.clientWidth)


function createGrid(rowNum, columnNum){
    for (r = 0; r < rowNum; r++) {
        const row = document.createElement("div");
        row.setAttribute("style","display : flex; flex-shrink: 0;");

        for(c = 0; c < columnNum; c++){
            const column = document.createElement("div");
            row.appendChild(column).className = "gridColumn";
        }
        container.appendChild(row).className = "gridRow";
    }
}
createGrid(16, 16);

const singleGrid = document.getElementsByClassName("gridColumn");


for(i=0; i < 256; i++ ){

    singleGrid[i].addEventListener('mousedown', function(){
        this.style.backgroundColor =  'black';
    });
}



