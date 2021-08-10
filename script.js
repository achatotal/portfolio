document.addEventListener('DOMContentLoaded', function(){

    // Change design If portfolio is viewed on ipad or phone
    if (window.innerWidth > 780){
    
    }
    else {

        // Hide Typing Test since it is not designed for mobile
        const typingTest = document.getElementById('typingTest');
        typingTest.style.display = 'none';

        const gameOfLife = document.getElementById('gameOfLife');
        gameOfLife.style.backgroundImage = 'url("design/gameOfLife.gif")';
        gameOfLife.style.backgroundRepeat = 'no-repeat';


        const drawingGame = document.getElementById('drawingGame');
        drawingGame.style.backgroundImage = 'url("design/drawing.gif")';
        drawingGame.style.backgroundRepeat = 'no-repeat';
    }
});