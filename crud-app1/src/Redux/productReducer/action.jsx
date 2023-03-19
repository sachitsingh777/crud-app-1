import axios from "axios"
import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, PATCH_PRODUCT_SUCCESS } from "./actiontypes"

export const addProduct=(data)=>(dispatch)=>{
    dispatch({type:ADD_PRODUCT_REQUEST})
    axios.post('http://localhost:8080/products',data)
    .then((res)=>{
        console.log(res)
        dispatch({type:ADD_PRODUCT_SUCCESS,payload:res.data.token})
    })
    .catch((error)=>dispatch({type:ADD_PRODUCT_FAILURE}))
}


export const getProducts=(paramObj)=>(dispatch)=>{
    dispatch({type:GET_PRODUCT_REQUEST})
    axios.get('http://localhost:8080/products',paramObj)
    .then((res)=>{

        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})})
    .catch((error)=>dispatch({type:GET_PRODUCT_FAILURE}))
}


export const editProduct=(dataObj,id)=>(dispatch)=>{
    dispatch({type:GET_PRODUCT_REQUEST})
  return  axios.patch(`http://localhost:8080/products/${id}`,dataObj)
    .then(()=>dispatch({type:PATCH_PRODUCT_SUCCESS}))
    .catch((error)=>dispatch({type:GET_PRODUCT_FAILURE}))
}