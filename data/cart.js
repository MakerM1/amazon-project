export const cart = []

export function addToCart(productId, itemQauntityValue) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem
      }
    })
  
    if (matchingItem) {
      matchingItem.quantity += Number(itemQauntityValue);
    } else {
      cart.push({
        productId: productId,
        quantity: Number(itemQauntityValue)
      })
    }
  }