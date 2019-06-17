import {combineReducers} from 'redux';
import typeProductReducer from './typeProductReducer';
import cart from './cart';
import billReducer from './billReducer';
export default combineReducers({
    types:typeProductReducer,
    cart:cart,
    bill:billReducer
});