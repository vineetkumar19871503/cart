import {
  compose,
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux';
import {
  CartReducer,
  ProductReducer,
  SalesReducer
} from '../reducers';
import {
  persistStore,
  autoRehydrate
} from 'redux-persist';
import productsData from '../data/';
import thunk from 'redux-thunk';
export default function configureStore() {
  return new Promise((resolve, reject) => {
    try {
      const rootReducer = combineReducers({
        cart: CartReducer,
        products: ProductReducer,
        sales: SalesReducer
      });
      const store = createStore(
        rootReducer, {
          products: productsData
        },
        compose(applyMiddleware(thunk), autoRehydrate())
      );

      persistStore(
        store, {
          blacklist: ['someTransientReducer']
        },
        () => resolve(store)
      );
    } catch (e) {
      reject(e);
    }
  });
}
