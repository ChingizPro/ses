(function(){
    let menu = document.querySelector('.menu');
    let closer = document.querySelector('.close');
    let opener = document.querySelector('.mobilenavbtn');

    opener.addEventListener('click', function(){
        menu.classList.add('showmenu');
    });

    closer.addEventListener('click', function(){
        menu.classList.remove('showmenu');
    });
})();