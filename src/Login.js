import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';
import { auth } from "./firebase.js";

// https://blog.logrocket.com/user-authentication-firebase-react-apps/
export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [directToSignUp, setDirectToSign] = useState(undefined);
    const signInWithEmailAndPasswordHandler = (event,email, password) => {
        event.preventDefault();
        giveData(email, password);
    };

    const handleDirect = () => {
        setDirectToSign("signup");
    }

    const giveData = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
          console.log("Sign in success")
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
        });
    }

    return (
        <div>
            <h1>Sign In</h1>
            <form>
                <label htmlFor="userEmail">Email: </label>
                <input type="email" value={email} id="userEmail" placeholder="123@gmail.com" onChange={e => setEmail(e.target.value)}/>
                <label htmlFor="userPassword">Password: </label>
                <input type="password" id="userPassword" value={password} placeholder="at least 6 digits" onChange={e => setPassword(e.target.value)}/>
                <button onClick = {(e) => {signInWithEmailAndPasswordHandler(e, email, password)}}>Login</button>
                <button onClick = {handleDirect}>Sign up</button>
                {
                    directToSignUp !== undefined && <Redirect to={directToSignUp}/>
                }
            </form>


        </div>
    );
}


export default SignIn;

