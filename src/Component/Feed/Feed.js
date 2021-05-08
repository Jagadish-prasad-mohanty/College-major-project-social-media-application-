import React, { useEffect, useState } from 'react';
import db from '../../firebase';
import './Feed.css';
import MessageSender from './FeedComponent/MessageSender/MessageSender';
import Post from './FeedComponent/Post/Post';
import StoryReel from './FeedComponent/StoryReel/StoryReel';

function Feed() {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot(snapshot=>(
            setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
        ))
    },[])
    return (
        <div className="feed">
            {/* storReel */}
            <StoryReel/>
            {/* MessageSender */}
            <MessageSender/>

            {posts.map(post=>(
                    <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                    message={post.data.message}
                    image={post.data.image}
                />
                )
            )}
            
            
        </div>
    )
}

export default Feed
