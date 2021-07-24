const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var mouseDown = false;

var y = Math.floor(Math.random() * window.innerWidth);
var x = Math.floor(Math.random() * window.innerHeight);

console.log()

const randomNum = Math.floor(Math.random() * 90) + 20;

document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('canvas1').style.backgroundColor = randomColor();
    circle();

    const download = document.getElementById('download');

    download.addEventListener('mouseover', function(){
        this.style.color = randomColor();
    });
    download.addEventListener('mouseout', function(){
        this.style.color = 'white';
    })
    
    download.addEventListener('click', function(){
        this.setAttribute('download', 'Drawing.png');
        this.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    });

});

document.addEventListener('keydown', event =>{

    const distance = 15;

    if(event.key === 'ArrowUp'){
        x -= distance;
        circle();
    }
    else if(event.key === 'ArrowDown'){
        x += distance;
        circle();
    }
    else if(event.key === 'ArrowLeft'){
        y -= distance;
        circle();
    }
    else if(event.key === 'ArrowRight'){
        y += distance;
        circle();
    }
});

// 
document.addEventListener('mousedown', function(){
    mouseDown = true;
})

document.addEventListener('mouseup', function(){
    mouseDown = false;
})

// draw with mouse
document.addEventListener('mousemove', function(event){
    if (mouseDown === true){
        ctx.fillStyle = randomColor();
        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, randomNum, 0, 2 * Math.PI);
        ctx.fill();
    }
})

// Interact with phone
if(window.innerWidth < 800) {
    document.addEventListener('click', function() {
        ctx.fillStyle = randomColor();
        ctx.beginPath();
        ctx.arc(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerHeight), Math.floor(Math.random() * 90) + 20, 0, 2 * Math.PI);
        ctx.fill();
    })
}

function circle(){
    ctx.fillStyle = randomColor();
    ctx.beginPath();
    ctx.arc(y, x, randomNum, 0, 2 * Math.PI);
    ctx.fill();
}

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function randomColor(){
    return `rgb(${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))})`;
}

function xAxis(){
    var x = window.innerHeight;
    while(x > window.innerHeight-1){
        x = Math.floor(Math.random() * window.innerHeight);
    }
    console.log(`Height: ${window.innerHeight}, random: ${x}`);
    return x

}

function yAxis(){
    var y = window.innerWidth;
    while(y > window.innerWidth-1){
        y = Math.floor(Math.random() * window.innerWidth);
    }
    console.log(`Width: ${window.innerWidth}, random: ${y}`);
    return y

}