const body = document.querySelector('body');
const menuIcon = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const bodyItems = document.querySelectorAll(".nav-header__link")

menuIcon.addEventListener('click', (e) => {
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    body.classList.toggle('_active');
    bodyItems.forEach((e) => {
        e.classList.add("link-1")
    })
})


