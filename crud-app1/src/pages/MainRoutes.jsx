import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Homepages from './Homepages'
import Login from './Login'
import PrivateRoute from '../component/PrivateRoute'
import EditPage from '../component/EditPage'
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepages/>} />
        <Route path="/login" element={
        <Login/>} />
        <Route path="/admin" element={
      <PrivateRoute>
        <Admin/></PrivateRoute>
        } />

<Route path="/products/:id" element={<EditPage/>} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
   
   
    </Routes>
  )
}

export default MainRoutes