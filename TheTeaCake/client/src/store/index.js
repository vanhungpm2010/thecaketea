import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import { loadState, saveState } from '../localStorage';
import throttle from 'lodash.throttle'
const persistedState = loadState();
const store=createStore(
    rootReducer,
    persistedState,
    applyMiddleware(logger,thunk)
)
//json.stringify thường được gọi liên tục, để khắc phục điều đó ta sử dụng throttle (function này giúp cho hàm sẽ chỉ gọi 1 lần mỗi x giây)
  store.subscribe(throttle(() => {
    saveState({
        cart: store.getState().cart
    });
  }, 1000));
export default store;