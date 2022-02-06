// Loading Screen ========================================
$(document).ready(function() {
     // Users can skip the loading process if they want.
     $('.skip').click(function() {
         
         $('.overlay, body').addClass('loaded');
     })
     
     // Will wait for everything on the page to load.
     $(window).bind('load', function() {
         $('.overlay, body').addClass('loaded');
         setTimeout(function() {
             $('.overlay').css({'display':'none'})
            
         }, 2000)
     });
     
     // Will remove overlay after 1min for users cannnot load properly.
     setTimeout(function() {
         $('.overlay, body').addClass('loaded');
     }, 60000);
 })

function setIframeSrc(newSrc) {
    document.getElementById("MainPageContainer").src=newSrc;
    if (newSrc == "projects.html"){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } 
}

let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});

