const classHeader = document.querySelector('.button-header')
const buttonHeader = document.querySelector(".header__burger-btn")
const containerHeader = document.querySelector('.container.header-container')


buttonHeader.addEventListener('click', () => {
    classHeader.classList.toggle('active')
    containerHeader.classList.toggle('active')
})


const txtButton = document.querySelector('.txt-search')
const searchSelector = document.querySelector('.search-selector')
const dropDown = document.querySelector('.dropdown-menu')

txtButton.addEventListener('click' , () => {
    dropDown.classList.toggle('open')
    searchSelector.classList.toggle('open')
})