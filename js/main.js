const classHeader = document.querySelector('.button-header')
const buttonHeader = document.querySelector(".header__burger-btn")


buttonHeader.addEventListener('click', () => {
    classHeader.classList.toggle('active')
})