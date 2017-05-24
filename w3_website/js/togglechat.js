/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

(function(){
    var chat = document.querySelector('.chat'),
        chatButton = document.querySelector('.togglechat'),
        body = document.querySelector('body'),
        main = document.querySelector('main'),
        header = document.querySelector('header'),
        closeChat = document.querySelector('.chat > button'),
        footer = document.querySelector('body > footer');

    chat.classList.add('hide');
    chat.classList.add('showchat');

    chatButton.addEventListener('click', function(){
        if(chat.getAttribute('class').includes('hide') == true){
            chat.classList.remove('hide');
            main.classList.add('blur');
            header.classList.add('blur');
            chatButton.classList.add('hide');

            body.style.overflow = 'hidden';
        }

        closeChat.addEventListener('click', function(){
            chat.classList.add('hide');
            chatButton.classList.remove('hide');
            main.classList.remove('blur');
            header.classList.remove('blur');

            body.style.overflow = 'initial';
        });
    });

})();
