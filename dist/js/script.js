//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNow = header.offsetTop;
    
    if (window.pageYOffset > fixedNow) {
        header.classList.add('navbar-fix');
        
    } 
}
//Hamburger
const hamburger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function() {
 hamburger.classList.toggle('burger-active');
 navMenu.classList.toggle('hidden');
})
