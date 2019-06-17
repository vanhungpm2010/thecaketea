import { SAVE_BILL, REMOVE_ALL_ITEM_IN_CARTS } from "../constrains";
import axios from 'axios';
export const saveBill=(bill)=>{
   
    return dispatch=>{
        axios.post('/api/bills/save',bill).then(res=>
            {
                dispatch({type:SAVE_BILL,payload:res.data}
                    );

                    localStorage.removeItem('state');
                dispatch({type:REMOVE_ALL_ITEM_IN_CARTS});
                    
                
            }

                    
            )
    }
}