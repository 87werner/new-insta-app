import React, { useState } from "react";
import "./Main-feed.css"
import profilePic from "../pics/profilepic.png"
import likepic from "../pics/likeicon.png"
import compic from "../pics/commentpic.png"
import dmpic from "../pics/dmpic.png"

import picPost1 from "../pics/post1.jpg"
import picPost2 from "../pics/post2.jpg"
import picPost3 from "../pics/post3.jpg"
import {FiHeart,FiNavigation} from "react-icons/fi";
import {IoChatbubbleOut} from "react-icons/io5";

class Main extends React.Component{
    
    render(){
        return (
            <div>
                <Post 
                    image={profilePic} 
                    name={"Joshua"} 
                    imgPost={picPost1} 
                    likes={147}
                    description={"this was a really nice sunset"}/>                     
                <Post 
                    image={profilePic} 
                    name={"Tom"} 
                    imgPost={picPost2} 
                    likes={125}
                    description={"france was so nice "}/>   
                <Post 
                    image={profilePic} 
                    name={"Rose"} 
                    imgPost={picPost3} 
                    likes={97}
                    description={"mount everest is so big"}/>    
            </div>
        )
    }

}
const Post = (props) => {
    return(
        <div id="posts">
            <header class="header">   
                <div id="headleft">
                    <img id="profilePic" src={props.image}/>       
                    <h4 id="name">{props.name}</h4>
                </div> 
                <button id="options">•••</button>
            </header>
            
            <img id="picPost" src={props.imgPost}/>
            
            <div id="buttons">
                <button id="like"><FiHeart id="like"/></button>
                <button id="comment"><img id="comment" src={compic}/></button>
                <button id="dm"><FiNavigation id="dm"/></button>
            </div>
            <footer>
                <p>likes: {props.likes}</p>
                <p>{props.description}</p>
            </footer>
        </div>
    )
}
export default Main;
  