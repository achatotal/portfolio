document.addEventListener('DOMContentLoaded', function(){
    const typingTest = document.getElementById('typingTest');
    typingTest.addEventListener('mouseover', function(){
        this.style.background = `rgb(${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))})`;
    });
    typingTest.addEventListener('mouseout', function(){
        this.style.background = 'none';
    });

    const gameOfLife = document.getElementById('gameOfLife');
    gameOfLife.addEventListener('mouseover', function(){
        this.style.background = `rgb(${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))})`;
    });
    gameOfLife.addEventListener('mouseout', function(){
        this.style.background = 'none';
    });

    const drawingGame = document.getElementById('drawingGame');
    drawingGame.addEventListener('mouseover', function(){
        this.style.background = `rgb(${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))})`;
    });
    drawingGame.addEventListener('mouseout', function(){
        this.style.background = 'none';
    });
});