import {
  getItem
} from './Products';
const initialState = {
  items: []
};
export default function cart(state = initialState, action = {}) {
  switch (action.type) {
    case 'ADD':
      return addToCart(state, action.payload);
    case 'REMOVE':
      return removeFromCart(state, action.payload);
    case 'UPDATE_QTY':
      return updateQty(state, action.payload);
    case 'EMPTY':
      return {
        items: []
      };
    default:
      return state;
  }
}

//handlers
function addToCart(state, payload) {
  let items = [],
    exists = false;
  state.items.map(function (e) {
    if (e.id == payload.id) {
      exists = true;
      e.qty = payload.qty;
    }
    items.push(e);
  })
  if (!exists) {
    items.push(payload);
  }
  return {
    items: items
  };
}

function updateQty(state, payload) {
  let items = state.items.map(function (e) {
    if (e.id == payload.id) {
      e.qty = payload.qty;
    }
    return e;
  })
  return {
    items: items
  };
}

function removeFromCart(state, payload) {
  let items = state.items;
  let filteredItems = items.filter(function (e) {
    return e.id != payload.id;
  })
  return {
    items: filteredItems
  };
}

//selector methods
export function getCartItems(state) {
  return state.cart.items.map((product) => getItem(state, product));
}

export function getTotal(items) {
  let totalCost = 0,
    totalItems = 0;
  items.map(i => {
    totalItems += i.qty;
    totalCost += parseFloat(i.price * i.qty);
  })
  return {
    totalItems: totalItems,
    totalCost: totalCost
  };
}
