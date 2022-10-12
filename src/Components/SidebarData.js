import React from 'react';
import { FaBoxOpen } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";

export const SidebarData = (
    {
        title : 'Produtcs',
        path : '/Produtcs',
        icon : <FaBoxOpen/>,
        cName : 'nav-text',
    },
    {
        title : 'Statistics',
        path : '/Statistics',
        icon : <IoStatsChart/>,
        cName : 'nav-text',
    },
    {
        title : 'Orders',
        path : '/Orders',
        icon : <FaCartPlus/>,
        cName : 'nav-text',
    },
    {
        title : 'Help',
        path : '/Help',
        icon : <IoIosHelpCircle/>,
        cName : 'nav-text',
    }
)