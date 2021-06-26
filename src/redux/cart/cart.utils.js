export const addItemToCart = (cartItems, cartitemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartitemToAdd.id)

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartitemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
  }

  return [...cartItems, { ...cartitemToAdd, quantity: 1 }]
}
