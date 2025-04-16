const navBar = document.querySelector('#header');

document.addEventListener('scroll', ()=> {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
        navBar.classList.add('rolar')
    }else{
        navBar.classList.remove('rolar')
    }
})

/*===========================SCROLL TEXT========== */
const scrollingText = document.querySelector('.scrolling-text');

scrollingText.addEventListener('mouseover', () => {
    scrollingText.style.animationPlayState = 'paused';
});

scrollingText.addEventListener('mouseout', () => {
    scrollingText.style.animationPlayState = 'running';
});


/*================================  HEADER MENU ===============================*/
document.querySelectorAll('header a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition - headerHeight;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
/*================================== MENU MOBILE =======================================*/
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let over = document.getElementById('overmenu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

over.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})


/*================================== Email.js =======================================*/
