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
const btnOpacity = document.querySelector(".opacity");

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
function drawOpacity(){
    for(i=0; i < rowNum * columnNum; i++ ){
        let opacity = 200;
        cell[i].addEventListener('mouseover', function(){
            opacity -= 20; 
            let col = `rgb(${opacity},${opacity},${opacity})`;
            console.log(col);
            this.style.backgroundColor =  col;
        });
    }
    
}

btnBlack.addEventListener('click',function(){
    
    btnBlack.setAttribute('style','background-color: #f78f5c; transform: scale(0.95);box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);');
    btnRandomColor.setAttribute('style','');
    btnOpacity.setAttribute('style','');

    btnBlack.classList.add('active');
    btnRandomColor.classList.remove('active');
    btnOpacity.classList.remove('active');

    if(btnBlack.classList.contains('active')){
        drawBlack();
    }
})
btnRandomColor.addEventListener('click',function(){
    btnRandomColor.setAttribute('style','background-color: #f78f5c; transform: scale(0.95);box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);');
    btnBlack.setAttribute('style','');
    btnOpacity.setAttribute('style','');

    btnRandomColor.classList.add('active');
    btnOpacity.classList.remove('active');
    btnBlack.classList.remove('active');

    if(btnRandomColor.classList.contains('active')){
        drawRandom();
    }
})
btnOpacity.addEventListener('click',()=>{
    btnBlack.setAttribute('style','');
    btnRandomColor.setAttribute('style','');
    btnOpacity.setAttribute('style','background-color: #f78f5c; transform: scale(0.95);box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);');
    
    btnOpacity.classList.add('active');
    btnBlack.classList.remove('active');
    btnRandomColor.classList.remove('active');

    if(btnOpacity.classList.contains('active')){
        drawOpacity();
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



