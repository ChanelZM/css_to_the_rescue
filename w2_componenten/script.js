/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
setTimeout(function(){
    document.querySelector('.loadingscreen').hidden = true;
}, 1000);

document.querySelector('.figure').addEventListener('click', function(){
    if(document.querySelector('.figure h1').className == 'opacity'){
        document.querySelector('.figure h1').classList.remove('opacity');
        document.querySelector('figcaption').classList.remove('opacity');
        document.querySelector('body').classList.remove('colorchange');
    } else {
        document.querySelector('.figure h1').className += 'opacity';
        document.querySelector('figcaption').className += 'opacity';
        document.querySelector('body').className += 'colorchange';
    }
});