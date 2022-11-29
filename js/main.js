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


for (const txtButton of txtButtons) {

    txtButton.addEventListener('click', () => {

        for (const searchSelector of searchSelectors) {
            searchSelector.classList.toggle('open')
        }
        for (const dropDown of dropsDown) {
            dropDown.classList.toggle('open')
        }
    })

}

// txtButton.addEventListener('click' , () => {
//     dropDown.classList.toggle('open')
//     searchSelector.classList.toggle('open')
// })