import React  from 'react'
import './SideBar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SideBarOption from './SideBarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import firebase from 'firebase'


function SideBar() {
    
    var user = firebase.auth().currentUser;
    var names, photoUrl;
    
    if (user != null) {
      names = user.displayName;
      photoUrl = user.photoURL;
    
    }
 
    return (
        <div className="sidebar">
        <div className="name">
            <TwitterIcon className="icon-twitter"/>
            
                
            
            </div>
            <SideBarOption active Icon={HomeIcon} text='Home' src2=''/>
            <SideBarOption Icon={SearchIcon} text='Explore' src2=''/>
            <SideBarOption  Icon={NotificationsNoneIcon} text='Notifications' src2='' />
            <SideBarOption Icon={MailOutlineIcon} text='Messages' src2=''/>

            <SideBarOption Icon={BookmarkBorderIcon} text='Bookmarks' src2='' />
            <SideBarOption Icon={ListAltIcon} text='Lists' src2=''/>
            <SideBarOption Icon={MoreHorizIcon} text='More' src2='' />
            <SideBarOption Icon={Avatar} text={names} src2={photoUrl} />
           
            
        </div>
    )
}

export default SideBar
