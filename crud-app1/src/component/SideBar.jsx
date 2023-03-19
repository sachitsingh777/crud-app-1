import React,{useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'

const SideBar = () => {
    const [searchParams,setSearchParams]=useSearchParams([])
  const initialCategory=searchParams.getAll("category")
   
  const initialSort=searchParams.getAll("order")
  const [order,setOrder]=useState(initialSort||"")

    const [category,setCategory]=useState(initialCategory||[])

 const handleChange=(e)=>{
    let newCategory=[...category]
    const value=e.target.value;
 if(newCategory.includes(value)){
    newCategory=newCategory.filter((el)=>el!==value)
 }else{
    newCategory.push(value)
 }

     setCategory(newCategory);
 }


  const handleSort=(e)=>{
   setOrder(e.target.value)
  }


 useEffect(()=>{
    let params={
        category
    }
    order&&(params.order=order);
    setSearchParams(params)
 },[category,order])

  return (
    <div>
        <h3>Filter by</h3>
        <div>
           <input type="checkbox" name="" value={"male"} onChange={handleChange} checked={category.includes("male")} />
        <label >Men</label> 
        </div>

        <div>
           <input type="checkbox" name="" value={"female"}  onChange={handleChange} checked={category.includes('female')}  />
        <label >Women</label> 
        </div>

        <div>
           <input type="checkbox" name="" value={"kids"}  onChange={handleChange} checked={category.includes("kids")}  />
        <label >Kids</label> 
        </div>
        <br />
        <br />
          <h3>Sort Based on Price</h3>
        <div onChange={handleSort}>

         <input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"}  />
         <label >Asc</label>
         <input type="radio" name="order" value={"desc"} defaultChecked={order==="desc"}  />
         <label >desc</label>
        </div>
        
    </div>
  )
}

export default SideBar