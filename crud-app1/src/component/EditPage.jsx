import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { editProduct } from '../Redux/productReducer/action'
import styled from "styled-components"
const EditPage = () => {
    const [success,setSuccess]=useState(false)
    const {id}=useParams()
const [data,setData]=useState("");
 const {product}=useSelector(store=>store.productReducer)
 const dispatch=useDispatch()
 const handleChange=(e)=>{
    const {name,value}=e.target;
    setData(prev=>{
        return {...prev,[name]:value}
    })
 }

 const handleSubmit=(e)=>{
    e.preventDefault()
  dispatch(editProduct(data,id)).then(()=>setSuccess(true))
 }

useEffect(()=>{
 const data=product.find((el)=>el.id==+id)
 setData(data)
},[])


  return (
    <DIV>
        <h3>Edit Product : ${id}</h3>
       {success?<h3>success</h3>:<h3>Failed</h3>}
        <form obSubmit={handleSubmit}>
    <input type="text" name={"image"} value={data.image} onChange={handleChange} />
    <input type="text" name={"brand"}   value={data.brand}  onChange={handleChange} />
    <input type="number"  name={"price"}  value={data.price}  onChange={handleChange}/>
    <input type="text" name={"title"}  value={data.title} onChange={handleChange} />
    
    <input type="number"  name={"discount"}  value={data.discount} onChange={handleChange}  />  
    <select value={data.gender}  name='gender' onChange={handleChange}>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
            <option value="female">Women</option>
                <option value="kids">Kids</option>
            </select>

        <button type="submit">Submit</button>

</form>
    </DIV>
  )
}
const DIV=styled.div`
width:400px;
margin : 40px auto;
border :1px solid gray;


form{
    display:flex;
    flex-direction:column;
    gap:15px;
}

input {
    width: 80;
    height:40px;
   font-size:large
}

button {
    width:20%;
    height:35px;
}
`
export default EditPage