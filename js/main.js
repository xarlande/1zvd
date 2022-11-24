const buttonHeader = document.querySelector('.button-header')

buttonHeader.addEventListener('click', () => {
    buttonHeader.classList.add('active')
    buttonHeader.classList.remove('active')
})