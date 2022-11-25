const classHeader = document.querySelector('.button-header')
const buttonHeader = document.querySelector(".burger__menu")


buttonHeader.addEventListener('click', () => {
    classHeader.classList.toggle('active')
})