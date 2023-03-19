import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, PATCH_PRODUCT_SUCCESS } from "./actiontypes";

const initialState={
    isLoading:false,
    isError:false,
  product:[]
}


export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ADD_PRODUCT_REQUEST:return {...state,isLoading:true}
        case ADD_PRODUCT_SUCCESS:return {...state,isLoading:false}
        case ADD_PRODUCT_FAILURE:return {...state,isLoading:false,iserror:true}
      
        case GET_PRODUCT_REQUEST:return {...state,isLoading:true}
        case GET_PRODUCT_SUCCESS:return {...state,isLoading:false,product:payload}
        case GET_PRODUCT_FAILURE:return {...state,isLoading:false,iserror:true}
       
       case PATCH_PRODUCT_SUCCESS: return {...state,isLoading:false}
       
        default:return state;
    }
}