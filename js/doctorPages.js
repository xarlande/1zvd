const classHeader = document.querySelector('.button__header')
const buttonHeader = document.querySelector(".header__burger_btn")
const containerHeader = document.querySelector('.header__container')
const Body = document.querySelector('body')

buttonHeader.addEventListener('click', () => {
    Body.classList.toggle('nonScroll')
    classHeader.classList.toggle('active')
    containerHeader.classList.toggle('active')
})

containerHeader.addEventListener('click', (event) => {
    let target = event.target

    if (target.closest('.header__container') && target.closest('.button__header_one')) {
        let buttonOpen = target.closest('.header__container').querySelector('.contact')
        let menuClose = target.closest('.button__header')
        let burgerClose = target.closest('.header__container')
        buttonOpen.classList.add('open')
        menuClose.classList.remove('active')
        burgerClose.classList.remove('active')
    }
    if (target.closest('.contact') && target.closest('.contact__container_close')) {
        let buttonClose = target.closest('.header__container').querySelector('.contact')
        buttonClose.classList.remove('open')
        Body.classList.remove('nonScroll')
    }
    if (target.closest('.contact__opacity')) {
        let buttonClose = target.closest('.header__container').querySelector('.contact')
        buttonClose.classList.remove('open')
        Body.classList.remove('nonScroll')
    }

})