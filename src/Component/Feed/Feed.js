import React from 'react';
import './Feed.css';
import MessageSender from './FeedComponent/MessageSender/MessageSender';
import Post from './FeedComponent/Post/Post';
import StoryReel from './FeedComponent/StoryReel/StoryReel';

function Feed() {
    return (
        <div className="feed">
            {/* storReel */}
            <StoryReel/>
            {/* MessageSender */}
            <MessageSender/>

            <Post 
            profilePic="img/profile1.jpg"
                username="Redeye"
                timestamp="20-12-2021"
                message="hi there"
                image="image/bg1.jpg"
            />
            <Post 
            profilePic="img/profile1.jpg"
                username="Redeye"
                timestamp="20-12-2021"
                message="hi there"
            />
            <Post 
            profilePic="img/profile1.jpg"
                username="Redeye"
                timestamp="20-12-2021"
                message="hi there"
            />
            
        </div>
    )
}

export default Feed
