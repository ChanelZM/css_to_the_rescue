/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
(function () {
    var myVariables = {
        ratingLabels: document.querySelectorAll('input[id^="rating-"]')
        , labels: document.querySelectorAll('label[for^="rating-"]')
        , backgrounds: document.getElementsByClassName('background')
    };
    console.log(myVariables.backgrounds);
    
    
    
//    myVariables.ratingLabels[0].addEventListener("click", function () {
//        if (myVariables.backgrounds == []){
//            myVariables.labels[0].setAttribute("class", "background");
//        } else {
//            myVariables.backgrounds.removeAttribute('class');
//            myVariables.labels[0].setAttribute("class", "background");
//        }
//    });
//    
//    myVariables.ratingLabels[1].addEventListener("click", function () {
//        if (myVariables.backgrounds == []){
//            myVariables.labels[1].setAttribute("class", "background");
//        } else {
//            myVariables.backgrounds.removeAttribute('class');
//            myVariables.labels[1].setAttribute("class", "background");
//        }
//    });
//    
//    myVariables.ratingLabels[2].addEventListener("click", function () {
//        if (myVariables.backgrounds == []){
//            myVariables.labels[2].setAttribute("class", "background");
//        } else {
//            myVariables.backgrounds.removeAttribute('class');
//            myVariables.labels[2].setAttribute("class", "background");
//        }
//    });
//    
//    myVariables.ratingLabels[3].addEventListener("click", function () {
//        if (myVariables.backgrounds == []){
//            myVariables.labels[3].setAttribute("class", "background");
//        } else {
//            myVariables.backgrounds.removeAttribute('class');
//            myVariables.labels[3].setAttribute("class", "background");
//        }
//    });
    
    //    for (var i = 0; i < myVariables.ratingLabels.length; i++) {
    //        myVariables.ratingLabels[i].addEventListener('click', function () {
    //            for (var i = 0; i < myVariables.labels.length; i++) {
    //                myVariables.labels[i].setAttribute("class", "background");
    //            }
    //        });
    //    }
    //    for (var i = 0; i < myVariables.ratingLabels.length; i++) {
    //        console.log(myVariables.ratingLabels[i]);
    //        
    //        myVariables.ratingLabels[i].addEventListener('click', myVariables.labels[i].setAttribute("class", "background"));
    //        
    //        myVariables.ratingLabels[i].addEventListener('click', function () {
    //            console.log(myVariables.ratingLabels[i]);
    //            myVariables.labels[i].setAttribute("class", "background");
    //                    if (myVariables.ratingLabels[i].checked === true) {
    //                        myVariables.labels[i].className = "background";
    //                    }
    //        })
})();