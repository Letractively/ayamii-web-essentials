/** 
    This script file is made by Tom Schillemand from Ayamii Development.
    This file is licened under the MIT licence wich let's you free in what you want to do woth thius file
    PLEASE be kind and leave this section in while distributing to others.


    This script will let you use smooth scroll.
    In the file you include this file in you can parse these funvtion and add the element you want to use these in
    (the div id for example).   
*/ 

var scrollY = 0;
var distance = 40;
var speed = 20

function autoScrollTo(el) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScrollTo(\'' + el + '\')', speed);
    
    if(yPos > bodyHeight) {
        clearTimeout(animator);   
    } else {
        
        if(currentY < targetY - distance) {
            scrollY = currentY + distance;
            window.scroll(0, scrollY);
        } else {
            clearTimeout(animator);   
        }
        
    }
    
}

function resetScroller(el) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    var animator = setTimeout('autoScrollTo(\'' + el + '\')', speed);
    
    if(currentY > targetY) {
        scrollY = currentY - distance;  
        window.scroll(0, scrollY);
    } else {
        clearTimeout(animator);   
    }
    
}