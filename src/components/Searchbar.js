import React from 'react'
import './Searchbar.css'
import {IoSearchOutline}from "react-icons/io5";
const Searchbar = () => {
    return (
        <div className="Searchbar-container">
           <input id="searchbar"/>
           <div onClick={(e) =>{document.getElementById("searchbar")?.focus()}} className="searchbar-placeholder">
                <IoSearchOutline id="searchbar-placeholder-icon"/>
                <span>Search</span>
            </div>
        </div>
    )
}

export default Searchbar
