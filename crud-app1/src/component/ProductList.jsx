import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { getProducts } from '../Redux/productReducer/action'
import ProductCard from './ProductCard'

const ProductList = () => {
    const [searchParams,setsearchParams]=useSearchParams();
    const dispatch=useDispatch()
    const {product}=useSelector(store=>store.productReducer)
  const location=useLocation()

 let obj={
    params:{
        gender:searchParams.getAll("category"),
         _sort:searchParams.get("order")&&"price",
         _order:searchParams.get("order")
      }
 }



  useEffect(()=>{
    dispatch(getProducts(obj))
  },[location.search])
    return (
    <div>
        {product?.map((item)=><ProductCard key={item.id}{...item}/>)}
    </div>
  )
}

export default ProductList