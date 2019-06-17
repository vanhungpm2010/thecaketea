import { SAVE_BILL } from "../constrains";

const INITIAL_STATE=[];
function billReducer(state=INITIAL_STATE,action){
    switch(action.type){
        case SAVE_BILL:
        return [...state,action.payload];
        default:
        return state;
    }
}
export default billReducer;