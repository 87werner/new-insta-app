import React from 'react'
import {FiHeart} from "react-icons/fi";
import {FiCamera } from "react-icons/fi";
import {MdHome} from "react-icons/md";
import {IoSearchOutline}from "react-icons/io5";
import {IoPersonOutline}from "react-icons/io5";

import './Footer.css'
// import Heart from './Heart'


const Footer = () => {
    
    return (
            <div>
                <div className="navbar-container">
                    <div className="navbar">
                            <div className="searchbar-section">
                              
                            </div>
                            <div className="action-section"> 
                                <ul className="footer-placeholder-ul">
                                    <li><MdHome className="home-icon"/></li>
                                    <li><IoSearchOutline className="search-icon"/></li>
                                    <li><FiCamera className="camera-icon"/></li>
                                    <li><FiHeart className="heart-placeholder-icon"/></li>
                                    <li><IoPersonOutline className="person-icon"/></li>
                                </ul>
                               
                            </div>
                        </div>
                </div>
                <div className="content-container"></div>
            </div>
            
            


    )
}

export default Footer