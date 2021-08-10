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

    // Hide photos
    saroyan.style.display = 'none';
    bigBook.style.display = 'none';
    brezina.style.display = 'none';
    smallBook.style.display = 'none';

    document.getElementById('book1').addEventListener('click', function(){
        if (saroyan.style.display === 'none'){
            hidePictures()
            hideText()
            saroyan.style.display = 'block';
            hideMenu();
            document.getElementById('text1').style.display = 'block';
            document.getElementById('menu1').style.top = '1rem';
            if (window.innerHeight > 779) {
                document.body.scrollTop = saroyan.offsetTop-62;
                document.documentElement.scrollTop = saroyan.offsetTop-62;
            }
        }
        else {
            hideText()
            saroyan.style.display = 'none';
        }
    });

    document.getElementById('book2').addEventListener('click', function(){
        if (bigBook.style.display === 'none'){
            hidePictures()
            hideText()
            bigBook.style.display = 'block';
            hideMenu();
            document.getElementById('text2').style.display = 'block';
            document.getElementById('menu2').style.top = '1rem';
            if (window.innerHeight > 779) {
                document.body.scrollTop = bigBook.offsetTop-62;
                document.documentElement.scrollTop = bigBook.offsetTop-62;
            }
        }
        else {
            hideText()
            bigBook.style.display = 'none';
        }
    });

    document.getElementById('book3').addEventListener('click', function(){
        if (brezina.style.display === 'none'){
            hidePictures()
            hideText()
            brezina.style.display = 'block';
            hideMenu();  
            document.getElementById('text3').style.display = 'block';
            document.getElementById('menu3').style.top = '1rem';
            if (window.innerHeight > 779) {
                document.body.scrollTop = brezina.offsetTop-62;
                document.documentElement.scrollTop = brezina.offsetTop-62;
            }
        }
        else {
            hideText()
            brezina.style.display = 'none';
        }
    });

    document.getElementById('book4').addEventListener('click', function(){
        if (smallBook.style.display === 'none'){
            hidePictures()
            hideText()
            smallBook.style.display = 'block';
            hideMenu();
            document.getElementById('text4').style.display = 'block';
            document.getElementById('menu4').style.top = '1rem';
            if (window.innerHeight > 779) {
                document.body.scrollTop = smallBook.offsetTop-62;
                document.documentElement.scrollTop = smallBook.offsetTop-62;
            }
        }
        else {
            hideText()
            smallBook.style.display = 'none';
        }
    });
})

function hideMenu() {
    document.getElementById('menu1').style.top = '-50rem';
    document.getElementById('menu2').style.top = '-50rem';
    document.getElementById('menu3').style.top = '-50rem';
    document.getElementById('menu4').style.top = '-50rem';
}

function hidePictures() {
    document.getElementById('saroyan').style.display = 'none';
    document.getElementById('bigBook').style.display = 'none';
    document.getElementById('brezina').style.display = 'none';
    document.getElementById('smallBook').style.display = 'none';
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

function hideText() {
    document.getElementById('text1').style.display = 'none';
    document.getElementById('text2').style.display = 'none';
    document.getElementById('text3').style.display = 'none';
    document.getElementById('text4').style.display = 'none';
}