// eslint-disable-next-line no-unused-vars
import React from "react";
import {BiBookAlt, BiHome, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle } from "react-icons/bi";
import "../styles/sidebar.css";

const Sidebar = () => {
    return(
        <div className="menu">
            <div className="logo">
                <BiBookAlt className='icon'/>
                <h2>EduFlex</h2>
            </div>
            <div className="menu--list">
                <a href="#" className="item active">
                    <BiHome  className='icon'/>
                    Dashboard
                </a>
                <a href="#" className="item">
                    <BiTask className='icon'/>
                    Assignment
                </a>
                <a href="#" className="item">
                    <BiSolidReport className='icon'/>
                    Report
                </a>
                <a href="#" className="item">
                    <BiStats className='icon'/>
                    Stats
                </a>
                <a href="#" className="item">
                    <BiMessage className='icon'/>
                    Message
                </a>
                <a href="#" className="item">
                    <BiHelpCircle className='icon'/>
                    Help
                </a>
            </div>
        </div>
    )
}

export default Sidebar;