const CART_KEY = "guest_cart";
// {
//   product: 123,
//   options: {
//     color: "#000000",
//     size: "XS"
//   },
//   quantity: 2
// }
export const getItemKey = (item) => {
  return `${item.product}-${item.options?.color || ""}-${item.options?.size || ""}`;
};

export const getCartFromLocalStorage = () => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
};


export const saveCartToLocalStorage = (newItem) => {
  if (typeof window === "undefined") return;

  const cart = getCartFromLocalStorage();
  const newItemKey = getItemKey(newItem);

  const existingIndex = cart.findIndex((item) => getItemKey(item) === newItemKey);

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += newItem.quantity;
  } else {
    cart.push(newItem);
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const updateCartItemInLocalStorage = (item) => {
  const cart = getCartFromLocalStorage();
  const itemKey = getItemKey(item);

  const updatedCart = cart.map((cartItem) =>
    getItemKey(cartItem) === itemKey
      ? { ...cartItem, quantity: item.quantity }
      : cartItem
  );

  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
};

export const deleteCartItemFromLocalStorage = (item) => {
  const cart = getCartFromLocalStorage();
  const itemKey = getItemKey(item);

  const updatedCart = cart.filter((cartItem) => getItemKey(cartItem) !== itemKey);

  localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
};


export const clearCartFromLocalStorage = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(CART_KEY);
};
