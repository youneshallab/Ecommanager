import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import './index.css'

function Layout(props) {
  return (
    <div className='layout'>
        <Navbar/>
        <div className='sidebar_content--container'>
            <Sidebar/>
            {props.children}
        </div>
    </div>
  )
}

export default Layout