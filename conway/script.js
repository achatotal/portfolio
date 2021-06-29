const rows = 52;
const cellInRow = 106;
const cells = rows*cellInRow;

let Binarytable = new Array(rows);
for (var i = 0; i <= rows; i++) {
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
    })
});


// When window resizes
window.addEventListener('resize', () =>{
    canvas.height = 10.99*rows;
    canvas.width = 10.99*cellInRow;
    const ctx = canvas.getContext('2d');
    table(ctx);
})

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