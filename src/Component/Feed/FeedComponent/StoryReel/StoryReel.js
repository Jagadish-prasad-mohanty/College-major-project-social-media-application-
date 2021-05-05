import React from 'react';
import Story from './Story/Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            {/* Story */}
            <Story image="image/bg1.jpg" profileSrc="image/profile1.jpg" title="Redeye" />
            <Story image="image/bg2.jpg" profileSrc="image/profile1.jpg" title="Redeye"/>
            <Story image="image/bg3.jpg" profileSrc="image/profile1.jpg" title="Redeye"/>
            <Story image="image/bg4.jpg" profileSrc="image/profile1.jpg" title="Redeye"/>
            <Story image="image/bg5.jpg" profileSrc="image/profile1.jpg" title="Redeye"/>
        </div>
    )
}

export default StoryReel
