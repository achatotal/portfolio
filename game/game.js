const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var y = 100;
var x = 100;

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('canvas1').style.backgroundColor = randomColor();
    circle();
});

document.addEventListener('keydown', event =>{

    const distance = 15;

    if(event.key === 'ArrowUp'){
        y -= distance;
        circle();
    }
    else if(event.key === 'ArrowDown'){
        y += distance;
        circle();
    }
    else if(event.key === 'ArrowLeft'){
        x -= distance;
        circle();
    }
    else if(event.key === 'ArrowRight'){
        x += distance;
        circle();
    }
});

function circle(){
    ctx.fillStyle = randomColor();
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fill();
}

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function randomColor(){
    return `rgb(${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))})`;
}