import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <h3>Shopping cart</h3>
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/admin'}>Admin</Link>
        
    </div>
  )
}

export default Navbar
const DIV=styled.div`
    
`