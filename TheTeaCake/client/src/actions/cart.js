import { ADD_TO_CART, REMOTE_FROM_CART } from "../constrains";

export const addToCart=(name,price,amount,_id)=>({
    type:ADD_TO_CART,
    payload:{
        _id,name,price,amount
    }
})
export const removeFromCart=(_id)=>({
    type:REMOTE_FROM_CART,
    payload:_id
})
