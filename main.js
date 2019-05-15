window.onload = function() {
  const sizeButtons = document.querySelectorAll('.size-btn')

  for(let i = 0; i < sizeButtons.length; i++ ) {
    sizeButtons[i].addEventListener('click', selectSizeButton)
  }

}

const selectSizeButton = function () {
  const selectedSize = document.querySelector('#selected-size')
  if(this.classList.contains('selected')) {
    clearSizeSelection()
  } else {
    clearSizeSelection()
    this.classList.add('selected')
    selectedSize.textContent = this.textContent
  }
}

const clearSizeSelection = function () {
  const selectedSize = document.querySelector('#selected-size')
  const sizeButtons = document.querySelectorAll('.size-btn')
  for(let i = 0; i < sizeButtons.length; i++ ) {
    sizeButtons[i].classList.remove('selected')
  }
  selectedSize.textContent = ''
}
