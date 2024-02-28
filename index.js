let menuBurger = document.querySelector('.burger');
let closeMenu = document.querySelector('.close');
let burgerMenuAnim = document.querySelector('.burger-menu-anim');
let arrowOne = document.querySelector('.arrow-one');
let arrowTwo = document.querySelector('.arrow-two');
let featuresContent =document.querySelector('.features-content');
let companyContent =document.querySelector('.company-content');

menuBurger.addEventListener('click', function() {
    burgerMenuAnim.setAttribute("style", "transform : translate3d(190px, 0, 0)");
    document.body.setAttribute("style", "background-color: hsla(0, 0%, 8%, 0.8)");
});

closeMenu.addEventListener('click', function() {
    burgerMenuAnim.setAttribute("style", "transform: translate3d(-335px, 0, 100px)");
    document.body.setAttribute("style", "opacity: 1");
})

arrowOne.addEventListener('click', function() {
    featuresContent.classList.toggle('hidden-burger');
});

arrowTwo.addEventListener('click', function() {
    companyContent.classList.toggle('hidden-burger');
});