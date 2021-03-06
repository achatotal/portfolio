import { texts } from './texts.js';

//Variable that stores index of current char
var chars = 0;

var mistakes = 0;
var correct = 0;

// Variables for colors
var correctColor = 'rgb(105,150,255)';
var mistakeColor = 'rgb(236, 114, 32)';
var highlite = 'rgb(217, 228, 238)';
var nextColor = 'rgb(22, 26, 75)';

// false === writing is not finished / true === writing is finished
var end = false;

// t0 === time when writing was started / t1 === time when writing was finished
var t0 = 0;
var t1 = 0;

const randomNu = Math.floor(Math.random() * texts.length);

var text = texts[randomNu].t;

// Array storing correct keystrokes and mistakes
var missOrCorr = new Array(text.length);

document.addEventListener('DOMContentLoaded', function() {

    // Create interactive text
    createText();

    // Restart button
    document.getElementById('restart').addEventListener('click', function() {
        restart();
    });

    // change arrow picture on hover
    var arrow = document.getElementById('arrow');

    arrow.addEventListener('mouseover', function(){
        this.setAttribute('src', 'design/arrow2.svg')
    });

    arrow.addEventListener('mouseout', function(){
        this.setAttribute('src', 'design/arrow.svg')
    });

});

// Check if right key was pressed
document.addEventListener('keydown', event => {

    // Start measuring time
    if(chars === 1){
        t0 = performance.now();
    }

    var lastChar;
    var currentChar;
    var nextChar;

    // String of letters that could appear in text
    var letters = 'aábcčdďeéěfghchiíjklmnňoópqrřsštťuúůvwyýxzž,.-!? )¨§´=+;"":';

    // Last char, current char and next char
    lastChar = document.getElementById(`${chars-1}`);
    currentChar = document.getElementById(`${chars}`);
    nextChar = document.getElementById(`${chars+1}`);

    // Go back with backspace
    if (event.key === "Backspace" && chars > 0 && chars < text.length) {
        if(missOrCorr[chars-1] === false){
            mistakes = mistakes -  1;
            document.getElementById('mistake').innerHTML = mistakes;
        }

        currentChar.style.backgroundColor = 'initial';
        currentChar.style.color = 'rgb(161, 161, 161)';

        lastChar.style.backgroundColor = highlite;
        lastChar.style.color = nextColor;
        chars -= 1;
    }
    else{
        for (var z = 0; z < letters.length; z++){

            if (event.key.toLocaleLowerCase() === letters[z] && chars < text.length){
                
                // If correct key was pressed
                if(event.key === text[chars]){
                    correct += 1;
                    missOrCorr[chars] = true;
                    currentChar.style.color = correctColor;
                    currentChar.style.backgroundColor = 'initial';
                    if(chars < text.length - 1){
                        nextChar.style.color = nextColor;
                        nextChar.style.backgroundColor = highlite;
                    }
                    chars += 1;
                    break
                }
                // If wrong key was pressed
                else{
                    mistakes += 1;
                    missOrCorr[chars] = false;
                    document.getElementById('mistake').innerHTML = mistakes;
                    if(text[chars] === ' '){
                        currentChar.style.backgroundColor = 'rgb(255, 174, 81)';
                    }
                    else{
                        currentChar.style.backgroundColor = 'initial';
                        currentChar.style.color = mistakeColor;
                    }

                    if(chars < text.length - 1){
                        nextChar.style.color = nextColor;
                        nextChar.style.backgroundColor = highlite;
                    }
                    chars += 1;
                    break
                }
            }
        }
    }

    // Show how many keystrokes were correct in percents
    if (Math.round(1000-(mistakes/(chars-1))*1000)/10 > 0){
        document.getElementById('correct').innerHTML = Math.round(1000-(mistakes/(chars-1))*1000)/10;
    }
    else{
        document.getElementById('correct').innerHTML = 0;
    }

    // Show speed – char per minute
    if (chars > 10){
        document.getElementById('speed').innerHTML = Math.round((correct/((t1-t0)/1000))*60);
    }

    if(chars <= text.length && end === false){
        t1 = performance.now();
    }

    // When writing is finished show conclusion message
    if(chars === text.length && end === false){
        document.getElementById('end').style.color = 'black';
        document.getElementById('authorWork').innerHTML = `${texts[randomNu].author} / ${texts[randomNu].work}`;
        end = true;
    }
});

function createText(){

    for(var z = 0; z < text.length; z++){

        var p = document.getElementById('text');
        var span = document.createElement("SPAN");

        span.innerHTML = text[z];
        span.id = `${z}`;
        p.appendChild(span);

    }
    document.getElementById(`${0}`).style.color = nextColor;
    document.getElementById(`${0}`).style.backgroundColor = highlite;
};

function restart(){
    location = window.location;
}