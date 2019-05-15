const minicart = {
  "ClassicTee": {
     "Quantities": {"S": 0, "M": 0, "L": 0 },
     "Prices": {"S": 7500, "M": 7500, "L": 7500 }
   }
}

window.onload = function() {
  const sizeButtons = document.querySelectorAll('.size-btn')
  const viewCartButton = document.querySelector('#view-cart-btn')
  const addToCartButton = document.querySelector('#add-to-cart-btn')
  for(let i = 0; i < sizeButtons.length; i++ ) {
    sizeButtons[i].addEventListener('click', selectSizeButton)
  }

  viewCartButton.addEventListener('click', toggleCart)
  addToCartButton.addEventListener('click', addToCart)

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

const toggleCart = function () {
  const viewCartButton = document.querySelector('#view-cart-btn')
  const minicartContainer = document.querySelector('#mini-cart-container')
  viewCartButton.classList.toggle('active-cart-btn')
  minicartContainer.classList.toggle('hidden')
}

const addToCart = function () {
  const minicartContainer = document.querySelector('#mini-cart-container')
  const productCount = document.querySelector('#cart-product-count')
  const selectedSize = document.querySelector('#selected-size')
  const errorMessage = document.querySelector('#error-message')
  if(selectedSize.textContent == "") {
    errorMessage.textContent = "Select a size to add an item to your cart."
    return
  } else {
    errorMessage.textContent = ""
    const size = selectedSize.textContent[0]
    minicart["ClassicTee"]["Quantities"][size] += 1
    productCount.textContent = (Number(productCount.textContent) + 1)

    if (minicart["ClassicTee"]["Quantities"][size] == 1) {
        const miniProductWindow = document.createElement("div")
        miniProductWindow.classList.add('mini-product-window')
        const miniProductImage = document.createElement("img")
        miniProductImage.src = "./img/classic-tee.jpg"
        miniProductImage.classList.add('mini-product-image')
        const miniProductData = document.createElement("div")
        miniProductData.classList.add("mini-product-data")
        const miniProductTitle = document.createElement("p")
        miniProductTitle.textContent = "Classic Tee"
        miniProductTitle.classList.add('mini-product-header')
        const miniProductPrice = document.createElement("p")
        miniProductPrice.classList.add('mini-product-header')
        miniProductPrice.classList.add(`mini-product-price-${size}`)
        miniProductPrice.textContent = `${minicart["ClassicTee"]["Quantities"][size]} x $${(minicart["ClassicTee"]["Prices"][size] / 100).toFixed(2)}`
        const miniProductSizing = document.createElement("p")
        miniProductSizing.textContent = `Size: ${size}`
        miniProductSizing.classList.add('mini-product-header')

        miniProductWindow.appendChild(miniProductImage)
        miniProductData.appendChild(miniProductTitle)
        miniProductData.appendChild(miniProductPrice)
        miniProductData.appendChild(miniProductSizing)
        miniProductWindow.appendChild(miniProductData)
        minicartContainer.appendChild(miniProductWindow)
    } else {
      const price = document.querySelector(`.mini-product-price-${size}`)
      price.textContent = `${minicart["ClassicTee"]["Quantities"][size]} x $${(minicart["ClassicTee"]["Prices"][size] / 100).toFixed(2)}`
    }
  }
}

const detectMobile = function () {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}
