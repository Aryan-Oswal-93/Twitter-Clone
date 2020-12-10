import React ,{useState} from 'react'
import './TweetBox.css'
import {Avatar , Button} from '@material-ui/core';
import db from './firebase';
import firebase  from 'firebase';


function TweetBox() {
    


    const[tweetMessage ,setTweetMessage] = useState("")
    const[tweetImage ,setTweetImage] = useState("")

    
    var user = firebase.auth().currentUser;
var names, photoUrl, emailVerified;
if (user != null) {
  names = user.displayName
  photoUrl = user.photoURL
  emailVerified = user.emailVerified

}


var regex = /\d+/g;
var time =  Date();

var matches = time.match(regex);  
var time3 = matches[1] + 11 + matches[0] + matches[2] + ":" +matches[3] 
if (matches){
  // No Digits found in the string.
}

 

    
    const sendTweet = e => {
        e.preventDefault();
        if( tweetMessage !== "" ){
        
        db.collection('posts').add({
            displayName: names,
            username: "@"+names.toString().toLowerCase(),
            verified: emailVerified,
            text: tweetMessage,
            image: tweetImage,
            avatar: photoUrl,
            timestamp: time3,
            
            
        });
        
        
     
        
        }
        
    }

    

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src={photoUrl}/>
                     <input   onChange ={e => setTweetMessage(e.target.value)}  value={tweetMessage} placeholder="What's happening?"   />
                
                
                </div>


            
             
            
             </form>
             <div className="tweetBox_input2">
             <input   onChange={e => setTweetImage(e.target.value)} value = {tweetImage} placeholder=" Enter image URL" />
</div> 

					
             <Button onClick={sendTweet}  type ="submit" className="tweetBox_button">Tweet</Button>

             
        </div>
    )
}
export function incrementLikes(){
    
}
export default TweetBox
