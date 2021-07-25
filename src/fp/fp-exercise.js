const user = {
     name: "pranav",
     active: true,
     cart: [],
     purchases: []
}
const compose = (f, g) => (...args) => f(g(...args))
const purchase = purchaseItem(emptyCart, buyItem, applyTaxToItems, addItemToCart)(user, { name: "laptop", price: 200 });


function purchaseItem(...fns) { return fns.reduce(compose) }

function addItemToCart(user, item) {
     const updatedCart = user.cart.concat(item)
     return Object.assign({}, user, { cart: updatedCart })
}

function applyTaxToItems(user) {
     const { cart } = user;
     const taxRate = 1.3;
     const updatedCart = cart.map(({ name, price }) => {
          return { name, price: price * taxRate }
     })
     return Object.assign({}, user, { cart: updatedCart })
}

function buyItem(user) {
     return Object.assign({}, user, { purchases: user.cart })
}

function emptyCart(user) {
     return Object.assign({}, user, { cart: [] })
}

function refundItem(user) {

}

/**
 * 1. add items to cart.
 * 2. add 3% tax to items in cart.
 * 3. buy items:cart-->purchase
 * 4. empty cart
 * */