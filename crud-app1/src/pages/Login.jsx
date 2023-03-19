import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useLocation, useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { login } from '../Redux/authReducer/action'
const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  
  const location=useLocation()
  
  const navigate=useNavigate()
    const dispatch=useDispatch()
   const {auth}=useSelector((store)=>store.authReducer)
    const handleSubmit=(e)=>{
        e.preventDefault()
        const userData={
            email,password
        }
        dispatch(login(userData)).then(()=>{
          navigate(location.state,{replace:true})
        })
        // dispatch(login(userData))
        setEmail('')
        setPassword('')
    }
   
  return (
    <DIV>
        <h3>{auth?'success':'failed'}</h3>
        <form onSubmit={handleSubmit}>
         <input type="email" name="email" value={email} 
         onChange={(e)=>setEmail(e.target.value)}
         placeholder='email' />
         <input 
          onChange={(e)=>setPassword(e.target.value)}
         type="password" name="password" value={password} placeholder='password' />
         <button type="submit">Log In</button>
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

export default Login