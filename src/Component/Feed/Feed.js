import React from 'react';
import './Feed.css';
import StoryReel from './FeedComponent/StoryReel/StoryReel'

function Feed() {
    return (
        <div className="feed">
            {/* storReel */}
            <StoryReel/>
            {/* MessageSender */}
        </div>
    )
}

export default Feed
