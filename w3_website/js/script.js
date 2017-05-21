/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

(function(){
    var elements = {
        menu : document.querySelector('.menu'),
        menuButton : document.querySelector('.togglemenu')
    };

    var app = {
        init: function(){
            elements.menu.classList.add('hide');
            elements.menu.classList.add('menushow');
        }
    };

    elements.menuButton.addEventListener('click', function(){
        if(elements.menu.getAttribute('class').includes('hide') == true){
            elements.menu.classList.remove('hide');
        } else {
            elements.menu.classList.add('hide');
        }
    });

    app.init();

})();
