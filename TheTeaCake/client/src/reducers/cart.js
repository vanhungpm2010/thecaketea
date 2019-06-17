import { ADD_TO_CART, REMOTE_FROM_CART, REMOVE_ALL_ITEM_IN_CARTS } from "../constrains";


const INITIAL_STATE=[];

const addToCart=(state,payload)=>{
    var newState;
    var tag=0;
   if(state.length!=0){
    newState= state.map(cart=>{
        if(cart._id==payload._id){
            tag=1;
            return {
                _id:payload._id,
                name:payload.name,
                price:payload.price,
                amount:payload.amount+cart.amount
            }
        }
        else
        {
            return cart;
        }
    })
    
      
   }
  if(tag==1){
    return newState;
  }
  else
    return [...state,payload];
    
 

   
   
}
function cart(state=INITIAL_STATE,action){
    switch(action.type){
        case ADD_TO_CART:
        return addToCart(state,action.payload);
        case REMOTE_FROM_CART:
        return state.filter(item=>item._id!=action.payload);
        case REMOVE_ALL_ITEM_IN_CARTS:
        return [];
        default:
        return state;

    }
}
export default cart;