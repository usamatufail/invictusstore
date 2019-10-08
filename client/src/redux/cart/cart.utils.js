export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.find(
    cartItem => cartItem._id === cartItemToAdd._id
  );

  if (existingCartItems) {
    return cartItems.map(cartItem =>
      cartItem._id === cartItemToAdd._id
        ? { ...cartItem, itemQuantity: cartItem.itemQuantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemToAdd, itemQuantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem._id === cartItemToRemove._id
  );

  if (existingCartItem.itemQuantity === 1) {
    return cartItems.filter(cartItem => cartItem._id !== cartItemToRemove._id);
  }

  return cartItems.map(cartItem =>
    cartItem._id === cartItemToRemove._id
      ? { ...cartItem, itemQuantity: cartItem.itemQuantity - 1 }
      : cartItem
  );
};
