const classHeader = document.querySelector('.button-header')
const buttonHeader = document.querySelector(".header__burger-btn")
const containerHeader = document.querySelector('.container.header-container')


buttonHeader.addEventListener('click', () => {
    classHeader.classList.toggle('active')
    containerHeader.classList.toggle('active')
})


const txtButtons = document.querySelectorAll('.txt-search')
const searchSelectors = document.querySelectorAll('.search-selector')
const dropsDown = document.querySelectorAll('.dropdown-menu')


txtButtons[0].addEventListener('click', () =>{
    searchSelectors[0].classList.toggle('open')
    dropsDown[0].classList.toggle('open')
})

txtButtons[1].addEventListener('click', () =>{
    searchSelectors[1].classList.toggle('open')
    dropsDown[1].classList.toggle('open')
})

txtButtons[2].addEventListener('click', () =>{
    searchSelectors[2].classList.toggle('open')
    dropsDown[2].classList.toggle('open')
})

txtButtons[3].addEventListener('click', () =>{
    searchSelectors[3].classList.toggle('open')
    dropsDown[3].classList.toggle('open')
})

const buttonSort = document.querySelector('.button__sort')
const sortAfter = document.querySelector('.button__sort-btn')
const sortDropdown = document.querySelector('.button__sort-dropdown-menu')

buttonSort.addEventListener('click', () => {
    sortAfter.classList.toggle('open')
    sortDropdown.classList.toggle('open')
})


// txtButtons.forEach((btn) => {
//     console.log(btn)
//     btn.addEventListener('click', () =>{
//         console.log('hello')
//     })
//     searchSelectors.forEach((openSelector) => {
//
//     })
// })


// txtButton.addEventListener('click' , () => {
//     dropDown.classList.toggle('open')
//     searchSelector.classList.toggle('open')
// })

