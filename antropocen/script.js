const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const randomGreen = `rgb(${(Math.floor(Math.random() * 50))},
                         ${(Math.floor(Math.random() * 205)+50)}
                        ,${(Math.floor(Math.random() * 150))})`;

// Start script when website is loaded
document.addEventListener('DOMContentLoaded', function(){

    // Make backround of canvas with random blue color
    document.getElementById('canvas1').style.backgroundColor = `rgb(${(Math.floor(Math.random() * 40))},${(Math.floor(Math.random() * 80))},${(Math.floor(Math.random() * 205)+50)})`;

    // Create circles on mouse move
    document.addEventListener('mousemove', (event)=>{
        ctx.fillStyle = randomGreen;
        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, Math.floor(Math.random() * 30)+10, 0, 2 * Math.PI);
        ctx.fill();
    });

    // Change color of random pixels
    interval = setInterval(function () {
        if (true) {
            for(var i = 0; i < 1000; i++){
                ctx.fillStyle = randomColor();
                ctx.fillRect(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerWidth), 1, 1);
            }
        }
    },1);

    // Change color of random pixels
    interval = setInterval(function () {
        if (true) {
            for(var i = 0; i < 100; i++){
                ctx.fillStyle = 'rgb(13, 0, 201)';
                ctx.fillRect(Math.floor(Math.random() * window.innerWidth), Math.floor(Math.random() * window.innerWidth), 1, 1);
            }
        }
    },10);

});


// Random green color
function randomColor(){
    return `rgb(${(Math.floor(Math.random() * 50))},${(Math.floor(Math.random() * 205)+50)},${(Math.floor(Math.random() * 150))})`;
}