function switchColor(element) {
  element.classList.toggle('dark-style')
}

Array.from(document.getElementsByClassName('button-container'))
  .forEach(element => {
    element.addEventListener('click', () => switchColor(element))
  })
