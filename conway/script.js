const rows = 52;
const cellInRow = 110;
const cells = rows*cellInRow;

// let storing table with cells
let Binarytable = new Array(rows-1);

for (var i = 0; i < rows; i++) {
    Binarytable[i] = new Array(cellInRow);
}

for(let r = 0; r < rows; r++){
    for (let c = 0; c < cellInRow; c++){
        Binarytable[r][c] = false;
    }
}

var eraser = false;

var mouseUp = true;

window.addEventListener('load', () =>{

    const canvas = document.getElementById('canvas');

    canvas.addEventListener('mousedown', function(e) {
        mouseUp = false;
        getCursorPosition(canvas, e);
    });

    document.addEventListener('mouseup', function(){
        mouseUp = true;
    });

    canvas.addEventListener('mousemove', function(e){
        getCursorPosition(canvas, e);
    });

    const ctx = canvas.getContext('2d');

    // resizing
    canvas.height = 10.99*rows;
    canvas.width = 10.991*cellInRow;

    table(ctx);

    document.getElementById('eraser').addEventListener('click', function(){
        eraserTool();
    });

    document.addEventListener('keydown', event => {
        if(event.key === 'n'){
            newGeneration();
        }
    });

    // New generation button
    document.getElementById('newGeneration').addEventListener('click', newGeneration);

    // Play button
    document.getElementById('play').addEventListener('click', play);

    // Clean button
    document.getElementById('clean').addEventListener('click', clean);

});


// When window resizes
window.addEventListener('resize', () =>{
    canvas.height = 10.99*rows;
    canvas.width = 10.99*cellInRow;
    const ctx = canvas.getContext('2d');
    table(ctx);
})

// create table with cells
function table(ctx){
    
    var row = 0;
    var whichCell = 0;
    var beg = 1;

    for(var cell = 0; cell < cells; cell++){

        // Count row
        if((cell%cellInRow) === 0 && cell != 0){
            row = rows-((cells-cell)/cellInRow);
        }

        // Count cellinrow
        if(cell%cellInRow === 0 && row != 0){
            whichCell = 0;
        }

        else if(cell%cellInRow === 1 || cell === 1){
            beg = 11;
        }

        if(Binarytable[Math.floor(rows-((cells-cell)/cellInRow))][cell%cellInRow] === true){
            ctx.fillStyle = 'black';
        }

        else{
            ctx.fillStyle = 'white';
        }

        if(whichCell === 0){
            ctx.fillRect(0, 11*row, 10, 10);
        }

        else{
            ctx.fillRect((beg)*whichCell, 11*row, 10, 10);

        }

        whichCell += 1;
    }
}

function getCursorPosition(canvas, event) {
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if(mouseUp === false){
        if(eraser === false){
            ctx.fillStyle = 'black';
            Binarytable[(y-(y%11))/11][(x-(x%11))/11] = true;
        }
        else{
            ctx.fillStyle = 'white';       
            Binarytable[(y-(y%11))/11][(x-(x%11))/11] = false;     
        }
        ctx.fillRect(x-(x%11),y-(y%11), 10, 10);
    }
}

// Access pointer, brush or eraser with keyboard
document.addEventListener('keydown', event => {

    if(event.key === 'e'){
        eraserTool();
    }

})

function eraserTool(){
    if(eraser === false){
        eraser = true;
    }
    else{
        eraser = false;
    }
}

// create new generation of cells
function newGeneration() {
    
    let newTable = new Array(rows-1);

    for (var i = 0; i < rows; i++) {
        newTable[i] = new Array(cellInRow);
    }

    
    for(let r = 0; r < rows; r++){
        for (let c = 0; c < cellInRow; c++){
            newTable[r][c] = false;
        }
    }

    neighbor = 0;

    for (var row = 0; row < rows; row++){
        for (var cell = 0; cell < cellInRow; cell++){

            // left neighbor
            if (cell != 0 && Binarytable[row][cell-1] != false){
                neighbor += 1;
            }

            // left top neighbor
            if  (cell != 0 && row != 0 && Binarytable[row-1][cell-1] != false){
                neighbor += 1;
            }

            // top neighbor
            if  (row != 0 && Binarytable[row-1][cell] != false){
                neighbor += 1;
            }
            
            // top right neighbor
            if  (cell != cellInRow-1 && row != 0 && Binarytable[row-1][cell+1] != false){
                neighbor += 1;
            }
            // right neighbor
            if  (cell != cellInRow-1 && Binarytable[row][cell+1] != false){
                neighbor += 1;
            }

            // bottom right neighbor
            if  (cell != cellInRow-1 && row != rows-1 && Binarytable[row+1][cell+1] != false){
                neighbor += 1;
            }

            // bottom neighbor
            if  (row != rows-1 && Binarytable[row+1][cell] != false){
                neighbor += 1;
            }

            // bottom left neighbor
            if  (cell != 0 && row != rows-1 && Binarytable[row+1][cell-1] != false){
                neighbor += 1;
            }

            // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
            if (neighbor < 2 && Binarytable[row][cell] != false){
                newTable[row][cell] = false;
            }

            // Any live cell with more than three live neighbours dies, as if by overcrowding.
            if (neighbor > 3){
                newTable[row][cell] = false;
            }    

            // Any live cell with two or three live neighbours lives on to the next generation.
            if (neighbor >= 2 && neighbor <= 3 && Binarytable[row][cell] != false){
                newTable[row][cell] = true;
            }

            // Any dead cell with exactly three live neighbours becomes a live cell.
            if (neighbor == 3 && Binarytable[row][cell] == false){
                newTable[row][cell] = true;
            }

            neighbor = 0;
        }
    }

    for (row = 0; row < rows; row++){
        for (cell = 0; cell < cellInRow; cell++){
            Binarytable[row][cell] = newTable[row][cell];
        }
    }

    const ctx = canvas.getContext('2d');

    table(ctx);

}

interval = null;

// Generate generations repeatedly
function play() {

    newGeneration();
    if (document.getElementById( "hidElem" ).value == 'f'){
        document.getElementById('play').innerHTML = 'stop'
        document.getElementById( "hidElem" ).value = 't';
        var i = 0;
        interval = setInterval(function () {
            newGeneration();
            if (sum() === 0) {
                document.getElementById('play').innerHTML = 'play'
                document.getElementById( "hidElem" ).value = 'f';
                clearInterval(interval);
            }
        }, 100);
    }
    else {
        document.getElementById('play').innerHTML = 'play'
        document.getElementById( "hidElem" ).value = 'f';
        clearInterval(interval);
    }

}

function clean(){
    for(let r = 0; r < rows; r++){
        for (let c = 0; c < cellInRow; c++){
            Binarytable[r][c] = false;
        }
    }

    const ctx = canvas.getContext('2d');
    
    table(ctx)
}