import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from '../../firebase';
import {useStateValue} from '../../StateProvider/StateProvider';
import {actionTypes} from '../../reducer';

function Login() {
    const [state,dispatch]= useStateValue()
    const signIn= ()=>{
        console.log("hii from loigin");
        auth.signInWithPopup(provider)
        .then(result=>{
            console.log(result.user);
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user
            })
        }).catch(err=>alert(err))
    }
    return (
        <div className="login">
            <div className="login__logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="facebook logo"/>
            <img src="image/facebook1.jpg" alt="facebook"/>
            </div>
            <Button type='submit' onClick={()=>signIn()}>
                Sign in 
            </Button>

        </div>
    )
}

export default Login
