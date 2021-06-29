const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var y = 100;
var x = 100;
var rgb = 'rgb(255, 216, 218)'

document.addEventListener('DOMContentLoaded', function(){
    circle();
});

document.addEventListener('keydown', event =>{

    const distance = 15;

    console.log(event.key);
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
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fill();
}

function resize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}