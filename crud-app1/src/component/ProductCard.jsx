import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
const ProductCard = ({id,image,price,brand,discount,gender,title}) => {
  return (
    <div key={id}>
   <img src={image} alt={title} />
   <h3>{title}</h3>
   <h3>price:₹{price}</h3>
   <p>Brand:{brand}</p>
   <p> Discount:{discount}</p>
   <p>Gender:{gender}</p>
        <button>
          <Link to={`products/${id}`}>Edit</Link>
        </button>
    </div>
  )
}


const DIV=styled.div`
    border:1px
`





export default ProductCard