import React from 'react'
import styled from 'styled-components'
import ProductList from '../component/ProductList'
import SideBar from '../component/SideBar'

const Homepages = () => {
  return (
    <div>
      <div className='sidebar'>
         <SideBar />
      </div>
      <div className='productlist'>
         <ProductList/>
      </div>
      
     
    </div>
  )
}

const DIV=styled.div`
  display:flex;
  .sidebar{
    width:15%
    
  }
  .productlist{
    width:85%
  }
`
export default Homepages