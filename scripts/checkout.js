const box = document.getElementById('check')
const order = document.getElementById('order')
const button = document.querySelector('.order')
const credit = document.querySelector('.credit')
const paypalLogo = document.querySelector('.paypal-logo')

box.addEventListener('click', () => {
    if (box.checked) {
        button.innerHTML = '<i class="fa-brands fa-paypal"></i> PayPal'
        credit.classList.add('active')
        paypalLogo.classList.add('active')
    } else {
        button.innerHTML = 'Place your Order'
        credit.classList.remove('active')
        paypalLogo.classList.remove('active')
    }
})

const amountOfItems = document.getElementById('amount')
const reviewItems = document.querySelector('.riview')

if (amountOfItems.innerHTML === '0') {
    reviewItems.innerHTML = ` <h1>Review your order</h1>
    <p>Your cart is empty.</p>
    <a href="../index.html"><button>View products</button></a>`
}

import { cart } from "../data/cart.js"
import { products } from "../data/products.js"
import { formatPrice } from "./utils/money.js"

let cartSummaryHtml = ''

cart.forEach((cartItem) => {
    const productId = cartItem.productId

    let matchingProduct;

    products.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product
        }
    })

   cartSummaryHtml += `
    <div class="item-review">
    <h1>Delivery date: Tuesday, September 26</h1>
    <div class="item-info">
      <div class="item-info-left">
        <img src="../${matchingProduct.image}" alt="" />
        <div class="text">
          <h3>${matchingProduct.name}</h3>
          <p class="price">$${formatPrice(matchingProduct.priceCents)}</p>
          <p class="quantity">Quantity: ${cartItem.quantity}</p>
          <p class="update">Update</p>
          <p class="delete">Delete</p>
        </div>
      </div>
      <div class="item-info-right">
        <h3>Choose a delivery option:</h3>
        <li>
          <ul>
            <input type="radio" name="deliveryOption${matchingProduct.id}" checked />
            <div class="delivery-info">
              <p class="delivery-time">Tuesday, September 26</p>
              <p class="shipping">FREE Shipping</p>
            </div>
          </ul>
          <ul>
            <input type="radio" name="deliveryOption${matchingProduct.id}" />
            <div class="delivery-info">
              <p class="delivery-time">Wednesday, September 20</p>
              <p class="shipping">$4.99 - Shipping</p>
            </div>
          </ul>
          <ul>
            <input type="radio" name="deliveryOption${matchingProduct.id}" />
            <div class="delivery-info">
              <p class="delivery-time">Monday, September 18</p>
              <p class="shipping">$9.99 - Shipping</p>
            </div>
          </ul>
        </li>
      </div>
    </div>
  </div>
    `;
})

console.log(cartSummaryHtml)

reviewItems.innerHTML = cartSummaryHtml