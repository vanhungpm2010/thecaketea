import { GET_TYPE_PRODUCT } from "../constrains";

const INITIAL_STATE=[];

function typeProductReducer(state=INITIAL_STATE,action){
    switch(action.type){
        case GET_TYPE_PRODUCT:
        return action.payload;
        default:
        return state;
    }
}
export default typeProductReducer;