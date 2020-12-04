import React from 'react'
import {FiHeart,FiNavigation} from "react-icons/fi";
import {MdHome} from "react-icons/md";
import {AiOutlineCompass} from "react-icons/ai";
import Searchbar from './Searchbar';
import {FiCamera } from "react-icons/fi";
import './nav.css'



const Nav = () => {
    
    return (
            <div>
                <div className="navbar-container">
                    <div className="navbar">
                   
                        <div className="logo-section"><FiCamera className="camera-icon"/>Instagram <FiNavigation className="arrow-icon"/></div>
                            <div className="searchbar-section">
                                <Searchbar/>
                            </div>
                            <div className="action-section"> 
                                <ul>
                                   
                                    <li><MdHome/></li>
                                    <li><FiNavigation/></li>
                                    <li><AiOutlineCompass/></li>
                                    <li><FiHeart className="heart-placeholder-icon"/></li>
                                </ul>
                               
                            </div>
                        </div>
                </div>
                <div className="content-container"></div>
            </div>
            
            


    )
}

export default Nav


