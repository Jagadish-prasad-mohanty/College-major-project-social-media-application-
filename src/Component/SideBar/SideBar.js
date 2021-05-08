import React from 'react';
import './SideBar.css';
import SidebarRow from './SideBarRow/SidebarRow';
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLiabraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from '../../StateProvider/StateProvider';


function SideBar() {
    const [state,dispatch]= useStateValue();
    return (
        <div className="sidebar">
            {/* <SidebarRow src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F458733912030160084%2F&psig=AOvVaw2Zyp9OyOmDtcx4zy5LdlAK&ust=1620284649773000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPiJ_Ov8sfACFQAAAAAdAAAAABAD" title="Redeye"/> */}
            <SidebarRow src={state.user.photoURL} title={state.user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID_19 Information center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLiabraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreIcon} title="more"/>
        </div>
    )
}

export default SideBar
