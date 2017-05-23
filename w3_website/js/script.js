/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

(function(){
    var elements = {
        menu : document.querySelector('.menu'),
        menuButton : document.querySelector('.togglemenu'),
        footer : document.querySelector('body > footer'),
        overlayDiv : ''
    };

    var app = {
        init: function(){
            elements.menu.classList.add('hide');
            elements.menu.classList.add('showmenu');

            createOverlayDiv();
        }
    };

    function createOverlayDiv(){
        var div = document.createElement('DIV');
        div.className = 'overlay hide';
        elements.footer.insertAdjacentElement('beforebegin', div);

        elements.overlayDiv = document.querySelector('.overlay');
    };

    elements.menuButton.addEventListener('click', function(){
        if(elements.menu.getAttribute('class').includes('hide') == true){
            elements.menu.classList.remove('hide');
            elements.overlayDiv.classList.remove('hide');
        } else {
            elements.menu.classList.add('hide');
            elements.overlayDiv.classList.add('hide');
        }
    });

    app.init();

})();
