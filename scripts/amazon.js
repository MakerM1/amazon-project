let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="item">
    <img
      src="${product.image}"
      alt=""
      class="img-placeholder"
    />
    <p class="item-name">
      ${product.name}
    </p>
    <div class="stars">
      <img src="images/rating-${product.rating.stars * 10}.png" alt="" />
      <p class="ratings">${product.rating.count}</p>
    </div>
    <p class="price">$${(product.priceCents / 100).toFixed(2)}</p>
    <select name="" id="" class="product-cuantity-${product.id}">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <div class="button-div">
    <div class="added-message added-message-${product.id}"><i class="fa-solid fa-circle-check" style="color: #067d62;"></i> <p class="added">Added</p></div>
      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id='${product.id}'>Add to Cart</button>
    </div>
  </div>
    `;
});

const itemsBox = document.querySelector('.items-box')
itemsBox.innerHTML = productsHTML

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId

    let matchingItem;
    
const itemQauntityValue = document.querySelector(`.product-cuantity-${productId}`).value
console.log(itemQauntityValue)

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item
      }
    })

    let timeInterval;
    const added = document.querySelectorAll(`.added-message-${productId}`)
    added.forEach((added) => {
      added.classList.add('active')
      timeInterval = setInterval(() => {
        added.classList.remove('active')
        clearInterval(timeInterval)
      }, 1000)
    })

    if (matchingItem) {
      matchingItem.quantity += Number(itemQauntityValue);
    } else {
      cart.push({
        productId: productId,
        quantity: Number(itemQauntityValue)
      })
    }

    let cartQuantity = 0

    cart.forEach((item) => {
      cartQuantity += item.quantity
    })

    const totalCartQuantity = document.getElementById('cart-quantity')

    console.log(cart)

    totalCartQuantity.innerHTML = cartQuantity

    if (totalCartQuantity.innerHTML > 9) {
      totalCartQuantity.style.left = '25px'
    }

    if (totalCartQuantity.innerHTML > 99) {
      totalCartQuantity.style.fontSize = '12px'
      totalCartQuantity.style.top = '9px'
      totalCartQuantity.style.left = '24px'
    }
  })
})


document.querySelectorAll('.js-add-to-cart').forEach((button) => {
  button.addEventListener('touchstart', () => {
    const productId = button.dataset.productId

    let matchingItem;
    
const itemQauntityValue = document.querySelector(`.product-cuantity-${productId}`).value
console.log(itemQauntityValue)

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item
      }
    })

    let timeInterval;
    const added = document.querySelectorAll(`.added-message-${productId}`)

    added.style.opacity = '1'

    clearTimeout(timeInterval)

    timeInterval = setTimeout(() => {
      added.style.opacity = '0'
    }, 1000)

    if (matchingItem) {
      matchingItem.quantity += Number(itemQauntityValue);
    } else {
      cart.push({
        productId: productId,
        quantity: Number(itemQauntityValue)
      })
    }

    let cartQuantity = 0

    cart.forEach((item) => {
      cartQuantity += item.quantity
    })

    const totalCartQuantity = document.getElementById('cart-quantity')

    console.log(cart)

    totalCartQuantity.innerHTML = cartQuantity
    console.log(totalCartQuantity)

    if (totalCartQuantity.innerHTML > 9) {
      totalCartQuantity.style.left = '25px'
    }

    if (totalCartQuantity.innerHTML > 99) {
      totalCartQuantity.style.fontSize = '12px'
      totalCartQuantity.style.top = '9px'
      totalCartQuantity.style.left = '24px'
    }
  })
})