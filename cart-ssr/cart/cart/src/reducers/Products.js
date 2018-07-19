export default function products(state = []) {
  return state;
}

//selector methods
export function getProducts(state) {
  return state.products;
}

export function getItem(state, props) {
  let item = {};
  state.products.map(function(e) {
    if (e.id == props.id) {
      e.qty = props.qty;
      item = e;
      return false;
    }
  });
  return item;
}

export function checkCartExistence(state, props) {
  let cartItems = state.cart.items,
    exists = false;
  if (props.product) {
    let id = props.product.id;
    cartItems.map(function(e) {
      if (e.id == id) {
        exists = true;
      }
    })
    return exists;
  }
  return true;
}
