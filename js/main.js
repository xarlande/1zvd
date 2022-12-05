const classHeader = document.querySelector('.button__header')
const buttonHeader = document.querySelector(".header__burger_btn")
const containerHeader = document.querySelector('.header__container')
const buttonSort = document.querySelector('.button__sort')
const sortDropdown = document.querySelector('.sort__dropdownMenu')
const searchSelectors = document.querySelectorAll('.search__selector')
const borderSearch = document.querySelector('.border__search')


buttonHeader.addEventListener('click', () => {
    classHeader.classList.toggle('active')
    containerHeader.classList.toggle('active')
})

containerHeader.addEventListener('click', (event) => {
    let target = event.target

    if (target.closest('.header__container')&&target.closest('.button__header_one')) {
        let buttonOpen = target.closest('.header__container').querySelector('.contact')
        buttonOpen.classList.add('open')

    }
    if (target.closest('.contact')&&target.closest('.contact__container_close')) {
        let buttonClose = target.closest('.header__container').querySelector('.contact')
        buttonClose.classList.remove('open')
    }
    if (target.closest('.contact__opacity')){
        let buttonClose = target.closest('.header__container').querySelector('.contact')
        buttonClose.classList.remove('open')
    }

})


borderSearch.addEventListener('click', (event) => {
    let target = event.target

    if (target.closest('.search__selector') && target.closest('LI')) {
        let txtSearch = target.closest('.search__selector').querySelector('.txt__search')
        let inputSearch = target.closest('.search__selector').querySelector('INPUT')
        txtSearch.textContent = target.textContent
        inputSearch.value = target.dataset.id
    }
    if (target.closest('.search__selector')) {
        let txtSearch = target.closest('.search__selector')
        for (let i of searchSelectors) {
            if (!txtSearch.closest('.open')) {
                i.classList.remove('open')
            }
        }
        txtSearch.classList.toggle('open')
    }

})

buttonSort.addEventListener('click', () => {
    buttonSort.classList.toggle('open')
    sortDropdown.classList.toggle('open')
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
