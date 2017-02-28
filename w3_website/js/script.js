/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var elements = {
    menu : document.querySelector('.menu'),
    menuButton : document.querySelector('button')
};

elements.menu.hidden = true;

elements.menuButton.addEventListener('click', function(){
    if(elements.menu.hidden != true){
        elements.menu.hidden = true;
    } else {
        elements.menu.hidden = false;
    }
});

elements.menu.addEventListener('click', function(){
    elements.menu.hidden = true;
});