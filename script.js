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
const btnBlack = document.querySelector('.black');
const btnRandomColor = document.querySelector('.random-color');

function drawBlack(){
    for(i=0; i < rowNum * columnNum; i++ ){
        cell[i].addEventListener('mouseover', function(){
            this.style.backgroundColor =  'black';
        });
    }
}
let randomColor;
function generateRandomColor() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    randomColor = `rgb(${x},${y},${z})`;
    return randomColor;
    }

function drawRandom(){
    for(i=0; i < rowNum * columnNum; i++ ){
        cell[i].addEventListener('mouseover', function(){
            generateRandomColor();
            this.style.backgroundColor =  randomColor;
        });
    }
    
}

btnBlack.addEventListener('click',function(){
    
    btnBlack.setAttribute('style','background-color: #f78f5c; transform: scale(0.95);box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);');
    btnRandomColor.setAttribute('style','');
    btnBlack.classList.add('blackActive');
    if(btnBlack.classList.contains('blackActive')){
        drawBlack();
    }
})
btnRandomColor.addEventListener('click',function(){
    btnRandomColor.setAttribute('style','background-color: #f78f5c; transform: scale(0.95);box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);');
    btnBlack.setAttribute('style','');
    btnRandomColor.classList.add('randomActive');
    if(btnRandomColor.classList.contains('randomActive')){
        drawRandom();
    }
})





//reset grid or change grid size
const reset = document.querySelector(".reset");
reset.addEventListener('click',function(){
    const x = parseInt(prompt("How many squares per side? (between 0 and 100)"));
    rowNum = x ;
    columnNum = rowNum;
    btnBlack.setAttribute('style','');
    btnRandomColor.setAttribute('style','');
    if(x>0 && x<=100){
        while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
        createGrid(rowNum, columnNum);
    }
})


//clear the cell colours
const clear = document.querySelector(".clear");
clear.addEventListener('click',function(){
    for(i=0; i < rowNum*columnNum; i++ ){    
        cell[i].style.backgroundColor =  'antiquewhite';
}
})



