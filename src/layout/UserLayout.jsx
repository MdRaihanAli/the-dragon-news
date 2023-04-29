import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../shared/Header/Header'

function UserLayout() {
  return (
    
      <div className='py-5'>
        <Outlet></Outlet>
        
      </div>
    
    
  )
}

export default UserLayout