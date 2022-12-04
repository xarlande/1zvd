const classHeader = document.querySelector('.button__header')
const buttonHeader = document.querySelector(".header__burger_btn")
const containerHeader = document.querySelector('.container.header__container')


buttonHeader.addEventListener('click', () => {
    classHeader.classList.toggle('active')
    containerHeader.classList.toggle('active')
})


const searchSelectors = document.querySelectorAll('.search__selector')
const borderSearch = document.querySelector('.border-search')


borderSearch.addEventListener('click', (event) => {
    let target = event.target

    if (target.closest('.search__selector') && target.closest('LI')) {
        let txtSearch = target.closest('.search__selector').querySelector('.txt-search')
        txtSearch.textContent = target.textContent
        txtSearch.dataset.id = target.dataset.id
    }
    if (target.closest('.search__selector')) {
        let txtSearch = target.closest('.search__selector')
        for (let i of searchSelectors ) {
            if(!txtSearch.closest('.open')){
                i.classList.remove('open')
            }
        }
        txtSearch.classList.toggle('open')
    }

})

// txtButtons.forEach((elem, index) => {
//     elem.addEventListener('click', () => {
//         for (let i of searchSelectors ) {
//             i.classList.remove('open')
//         }
//         for (let i of dropsDown) {
//             i.classList.remove('open')
//         }
//         searchSelectors[index].classList.toggle('open')
//         dropsDown[index].classList.toggle('open')
//     })
// })


const buttonSort = document.querySelector('.button__sort')
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

