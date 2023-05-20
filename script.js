const container = document.querySelector(".container");

function createGrid(rowNum, columnNum){
    const cellWidth = (512/rowNum - 2)+ 'px';
    const cellHeight = cellWidth;

    for (r = 0; r < rowNum; r++) {

        const row = document.createElement("div");

        for(c = 0; c < columnNum; c++){
            const column = document.createElement("div");
            column.classList.add('cell');
            row.appendChild(column);
            column.setAttribute("style",`width: ${cellWidth}; height: ${cellHeight}`);
 
        }
        
        container.appendChild(row);
    }

}
let rowNum =16;
let columnNum = rowNum;
createGrid(rowNum, columnNum);

//draw when clicked on cell
const cell = document.getElementsByClassName("cell");
function draw(){
    for(i=0; i < rowNum * columnNum; i++ ){
        cell[i].addEventListener('mouseover', function(){
            this.style.backgroundColor =  'black';
        });
    }
}
draw();


//reset grid or change grid size
const reset = document.querySelector(".reset");
reset.addEventListener('click',function(){
    const x = parseInt(prompt("How many squares per side? (between 0 and 100)"));
    console.log(x);
    console.log(typeof(x));
    rowNum = x ;
    columnNum = rowNum;
    if(x>0 && x<=100){
        while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        createGrid(rowNum, columnNum);
        draw();
    }
})


//clear the cell colours
const clear = document.querySelector(".clear");
clear.addEventListener('click',function(){
    for(i=0; i < rowNum*columnNum; i++ ){    
        cell[i].style.backgroundColor =  'antiquewhite';
}
})



