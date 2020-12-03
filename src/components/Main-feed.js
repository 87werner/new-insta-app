import React, { useState } from "react";
import "./Main-feed.css"
import profilePic from "../pics/profilepic.png"
import picPost from "../pics/post2.jpg"
import likepic from "../pics/likeicon.png"
import compic from "../pics/commentpic.png"
import dmpic from "../pics/dmpic.png"

class Main extends React.Component{
    
    render(){
        return (
            <div>
                <Post 
                    image={profilePic} 
                    name={"joshua"} 
                    imgPost={picPost} 
                    likes={10}
                    description={"this was a really nice sunset"}/> 
                    
                <Post 
                    image={profilePic} 
                    name={"joshua"} 
                    imgPost={picPost} 
                    likes={10}
                    description={"this was a really nice sunset"}/>     
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
                <button id="like"><img id="like" src={likepic}/></button>
                <button id="comment"><img id="comment" src={compic}/></button>
                <button id="dm"><img id="dm" src={dmpic}/></button>
            </div>
            <footer>
                <p>likes: {props.likes}</p>
                <p>{props.description}</p>
            </footer>
        </div>
    )
}
export default Main;
  