document.addEventListener('DOMContentLoaded', function(){
    const typingTest = document.getElementById('typingTest');
    typingTest.addEventListener('mouseover', function(){
        this.style.background = 'red';
    });
    typingTest.addEventListener('mouseout', function(){
        this.style.background = 'none';
    });

    const gameOfLife = document.getElementById('gameOfLife');
    gameOfLife.addEventListener('mouseover', function(){
        this.style.background = 'green';
    });
    gameOfLife.addEventListener('mouseout', function(){
        this.style.background = 'none';
    });

    const drawingGame = document.getElementById('drawingGame');
    drawingGame.addEventListener('mouseover', function(){
        this.style.background = 'blue';
    });
    drawingGame.addEventListener('mouseout', function(){
        this.style.background = 'none';
    });
});