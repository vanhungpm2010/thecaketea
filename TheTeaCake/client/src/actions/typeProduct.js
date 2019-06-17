import axios from 'axios';
import { GET_TYPE_PRODUCT } from '../constrains';
export const getTypeProduct=()=>{
    return dispatch=>{
        axios.get('/api/products/getType').then(res=>{dispatch({type:GET_TYPE_PRODUCT,payload:res.data})})
    }
}