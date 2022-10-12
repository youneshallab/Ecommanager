import React from 'react'
import { SidebarData } from './SidebarData';
import {Link} from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <>
        {SidebarData.map((item,index) => {
        return (
            <li key={index} className={item.cName}>
                <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            </li>
        )
    }
    )}
    </>
    
  )
}

export default Sidebar