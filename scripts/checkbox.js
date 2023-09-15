const box = document.getElementById('check')
const order = document.getElementById('order')
const button = document.querySelector('.order')
const credit = document.querySelector('.credit')
const paypalLogo = document.querySelector('.paypal-logo')

box.addEventListener('click', () => {
    if (box.checked) {
        button.innerHTML = `<img src="../images/pngwing.com.png" alt="">`
        credit.classList.add('active')
        paypalLogo.classList.add('active')
    } else {
        button.innerHTML = 'Place your Order'
        credit.classList.remove('active')
        paypalLogo.classList.remove('active')
    }
})