document.addEventListener('DOMContentLoaded', function(){
 
    const saroyan = document.getElementById('saroyan')
    const bigBook = document.getElementById('bigBook')
    const brezina = document.getElementById('brezina')
    const smallBook = document.getElementById('smallBook')

    for (i = 0; i < 5; i++){
        var image = document.createElement('IMG')
        image.src = `media/saroyan/${i}.jpg`;
        saroyan.appendChild(image);
    }

    for (i = 0; i < 23; i++){
        var image = document.createElement('IMG')
        image.src = `media/bigBook/${i}.jpg`;
        bigBook.appendChild(image);
    }

    for (i = 0; i < 5; i++){
        var image = document.createElement('IMG')
        image.src = `media/brezina/${i}.jpg`;
        brezina.appendChild(image);
    }

    for (i = 0; i < 39; i++){
        var image = document.createElement('IMG')
        image.src = `media/smallBook/${i}.jpg`;
        smallBook.appendChild(image);
    }
})