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
const borderSearch =document.querySelector('.border-search')


borderSearch.addEventListener('click', (event) =>{
    let target = event.target
    if(target.closest('.search-selector') && target.closest('LI')){
        let txtSearch = target.closest('.search-selector').querySelector('.txt-search')
        txtSearch.textContent = target.textContent
        txtSearch.dataset.id = target.dataset.id
        let removeDropDown = target.closest('.search-selector').querySelector('.dropdown-menu')
        let removeSearchSelector = target.closest('.search-selector')
        removeDropDown.classList.remove('open')
        removeSearchSelector.classList.remove(`open`)
    }

})

txtButtons.forEach((elem, index) =>{
    elem.addEventListener('click', () =>{
        for (let i of searchSelectors){
            i.classList.remove('open')
        }
        for (let i of dropsDown){
            i.classList.remove('open')
        }
    searchSelectors[index].classList.toggle('open')
     dropsDown[index].classList.toggle('open')
 })
})


const buttonSort = document.querySelector('.button__sort-btn')
const sortDropdown = document.querySelector('.button__sort-dropdown-menu')

buttonSort.addEventListener('click', () => {
    buttonSort.classList.toggle('open')
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

