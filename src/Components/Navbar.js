import React from 'react'
import {IoHome,IoSettings} from 'react-icons/io5';

function Navbar() {
  return (
    <>
    <div className='navbar'>
        <IoHome/>
        <div>your logo</div>
        <IoSettings/>
    </div>
    </>
  )
}

export default Navbar