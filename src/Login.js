import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import a from './twitter.png';
import {auth ,provider} from './firebase'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import './Login.css'
function Login() {
    const [ ,dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
                userImg: result.user.photoURL
            
            })
            
        }
            ).catch(error => alert(error.message))
            
    }

    

    
    return (
        <div className="login">
            <div className="login_container">
                <img
                className="img" 
                    src={a}
                    alt=""
                />
                <div className="login_text">
                    <h1>Sign in to Candy-Twitter</h1>
                </div>

                
                <Avatar className="login_avatar" onClick={signIn} src="data:image/png;base64,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"  />
                <div className="login_avatar2s"><Button className="login_button" onClick={signIn}>With Google</Button></div>
            </div>
        </div>
    )
}

export default Login
