/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

(function(){
    var elements = {
        menu : document.querySelector('.menu'),
        menuButton : document.querySelector('.togglemenu'),
        chat : document.querySelector('.chat'),
        chatButton : document.querySelector('.togglechat'),
        body : document.querySelector('body'),
        main : document.querySelector('main'),
        header : document.querySelector('header'),
        closeChat : document.querySelector('.chat > button')
    };

    var app = {
        init: function(){
            elements.menu.classList.add('hide');
            elements.menu.classList.add('showmenu');
            elements.chat.classList.add('hide');
            elements.chat.classList.add('showchat');
        }
    };

    elements.menuButton.addEventListener('click', function(){
        if(elements.menu.getAttribute('class').includes('hide') == true){
            elements.menu.classList.remove('hide');
        } else {
            elements.menu.classList.add('hide');
        }
    });

    elements.chatButton.addEventListener('click', function(){
        if(elements.chat.getAttribute('class').includes('hide') == true){
            elements.chat.classList.remove('hide');
            elements.main.classList.add('blur');
            elements.header.classList.add('blur');
            elements.chatButton.classList.add('hide');

            elements.body.style.overflow = 'hidden';
            elements.body.style.position = 'fixed';
        }

        elements.closeChat.addEventListener('click', function(){
            elements.chat.classList.add('hide');
            elements.chatButton.classList.remove('hide');
            elements.main.classList.remove('blur');
            elements.header.classList.remove('blur');

            elements.body.style.overflow = 'initial';
            elements.body.style.position = 'relative';
        });
    });

    app.init();

})();
