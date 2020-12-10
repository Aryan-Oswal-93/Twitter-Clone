import { Avatar } from '@material-ui/core'
import React  from 'react'
import './Post.css';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';
import moment from 'moment'

function Post({
    displayName
    ,username
    ,verified
    ,timestamp
    ,text
    ,image
    ,avatar}) {
        
    return (
        <div className="post" id="post">
            <div className="post_avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {displayName}{""}
                            <span className="post_headerSpecial">
                               { verified && <VerifiedUserIcon className="post_badge">

                                </VerifiedUserIcon>}
                                {username}
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p >{text}</p>
                    </div>
                </div>
                <img src={image} alt=""/>
                <div className="timestamp">{moment(`${timestamp}`,'YYYYMMDDHH:mm').fromNow()}</div>
                <div className="post_footer">
                    <ChatBubbleIcon fontSize="small"  
                    
                    

                    />
                    
                    <RepeatIcon fontSize="small"  />
                    <FavoriteBorderIcon fontSize="small" className="like" id="like"  />
                    <PublishIcon fontSize="small"/>

                    
                </div>
                
            </div>
        </div>
    )
}

export default Post
