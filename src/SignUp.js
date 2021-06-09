import React, { useState } from "react";
import { auth } from "./firebase.js";
import "firebase/auth";
import { BrowserRouter, Route, Switch, Link, Redirect, NavLink } from 'react-router-dom';


// https://blog.logrocket.com/user-authentication-firebase-react-apps/
export function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [directToLogin, setDirectToLogin] = useState(undefined);

    const createUserWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
        setDirectToLogin("/");
        giveData(email, password);
        setEmail("");
        setPassword("");
      };
    
    const giveData = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <label htmlFor="userEmail">Email: </label>
            <input type="email" name="userEmail" value={email} id="userEmail" onChange={e => setEmail(e.target.value)}/>
            <label htmlFor="userPassword">Password: </label>
            <input type="password" name="userPassword" value={password} id="userPassword" onChange={e => setPassword(e.target.value)}/>
            <button onClick={(e) => createUserWithEmailAndPasswordHandler(e, email, password)}>Sign up</button>
            {
                directToLogin !== undefined && <Redirect to={directToLogin}/>
            }
        </div>
    );


}

export default SignUp;