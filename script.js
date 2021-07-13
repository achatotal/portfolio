document.addEventListener('DOMContentLoaded', function(){

    // Change design If portfolio is viewed on ipad or phone
    if (window.innerWidth > 780){
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
    
        const books = document.getElementById('books');
        books.addEventListener('mouseover', function(){
            this.style.background = `rgb(${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))})`;
        });
        books.addEventListener('mouseout', function(){
            this.style.background = 'none';
        });
    
        const anthropocene = document.getElementById('anthropocene');
        anthropocene.addEventListener('mouseover', function(){
            this.style.background = `rgb(${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))},${(Math.floor(Math.random() * 255))})`;
        });
        anthropocene.addEventListener('mouseout', function(){
            this.style.background = 'none';
        });

        anthropocene.style.display = 'none';
        books.style.display = 'none';
    
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