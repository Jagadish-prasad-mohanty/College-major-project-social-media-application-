import { Avatar } from '@material-ui/core'
import React, { useState } from 'react';
import './MessageSender.css';
import Videocamicon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
    const [input,setInput]=useState("");
    const [imageUrl,setImageUrl]=useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();

        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messageSender">
        <div className="messageSender__top">
            <Avatar/>
            <form>
                <input 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className="messageSender__input" 
                type="text" 
                placeholder="What's on your mind"/>
                <input 
                value={imageUrl}
                onChange={(e)=>setImageUrl(e.target.value)}
                type="text" 
                placeholder="image URL (Optional)"/>
                <button 
                type="submit" 
                onClick={handleSubmit}>Hidden submit</button>
            
            </form>
        </div>

        <div className="messageSender__bottom">
            <div className="messageSender__option">
                <Videocamicon style={{color:'red'}}/>
                <h3>Live Video</h3>
            </div>
            <div className="messageSender__option">
                <PhotoLibraryIcon style={{color:'green'}}/>
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender__option">
                <InsertEmoticonIcon style={{color:'orange'}}/>
                <h3>Feeling/Activity</h3>
            </div>
        </div>
            
        </div>
    )
}

export default MessageSender
