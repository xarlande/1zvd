const classHeader = document.querySelector('.button-header')
const buttonHeader = document.querySelector(".header__burger-btn")
const containerHeader = document.querySelector('.container.header-container')


buttonHeader.addEventListener('click', () => {
    classHeader.classList.toggle('active')
    containerHeader.classList.toggle('active')
})