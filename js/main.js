const classHeader = document.querySelector('.button-header')
const buttonHeader = document.querySelector(".header__burger-btn")
const containerHeader = document.querySelector('.container.header-container')


buttonHeader.addEventListener('click', () => {
    classHeader.classList.toggle('active')
    containerHeader.classList.toggle('active')
})


const txtButtons = document.querySelectorAll('.txt-search')
const searchSelector = document.querySelector('.search-selector')
const dropDown = document.querySelector('.dropdown-menu')

let txtButton

for (txtButton of txtButtons) {
    console.log(txtButtons)
    // txtButton.forEach(function (id){
    // })

}

// txtButton.addEventListener('click' , () => {
//     dropDown.classList.toggle('open')
//     searchSelector.classList.toggle('open')
// })