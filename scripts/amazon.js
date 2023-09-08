const products = [{
    image: 'images/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
        stars: 4.5,
        count: 87
    },
    priceCents: 1090
}, {
    image: 'images/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
        stars: 4,
        count: 127
    },
    priceCents: 2095
}, {
    image: 'images/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
        stars: 4.5,
        count: 56
    },
    priceCents: 799
}];

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
    <select name="" id="">
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
    <button>Add to Cart</button>
  </div>
    `;
});

const itemsBox = document.querySelector('.items-box')
itemsBox.innerHTML = productsHTML