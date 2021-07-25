const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var mouseDown = false;
const randomGreen = `rgb(${(Math.floor(Math.random() * 50))},${(Math.floor(Math.random() * 205)+50)},${(Math.floor(Math.random() * 150))})`;

document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('canvas1').style.backgroundColor = 'rgb(60, 46, 255)';

    document.addEventListener('mousemove', (event)=>{
        ctx.fillStyle = randomGreen;
        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, Math.floor(Math.random() * 30)+10, 0, 2 * Math.PI);
        ctx.fill();
    });
    interval = setInterval(function () {
        if (true) {
            for(var i = 0; i < 1000; i++){
                ctx.fillStyle = randomColor();
                ctx.fillRect(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerWidth), 1, 1);
            }
        }
    },1);

    interval = setInterval(function () {
        if (true) {
            for(var i = 0; i < 100; i++){
                ctx.fillStyle = 'blue';
                ctx.fillRect(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerWidth), 1, 1);
            }
        }
    },10);

});

function randomColor(){
    return `rgb(${(Math.floor(Math.random() * 50))},${(Math.floor(Math.random() * 205)+50)},${(Math.floor(Math.random() * 150))})`;
}