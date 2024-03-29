import React from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import { auth } from '../firebase'


function Login() {
    const navigate= useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const signIn = e => {
   e.preventDefault();
   auth 
   .signInWithEmailAndPassword(email, password)
   .then(auth => {
    navigate('/', {replace: true})
   })
   .catch(error => alert(error.message))

    }
    const register = e => {
        e.preventDefault();
       
        auth
        .createUserWithEmailAndPassword(email, password)
        .then ((auth) => {
            //it successfully created a new user with email and password
            console.log(auth);
            if (auth) {
                // history.push('/')
            }
        })
        .catch(error => alert('error.message'))

        //do some fancy firebase register shitttttt...
    }

    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo"
            src="https://1000logos.net/wp-content/uploads/2019/07/Amazon-logo-2000%E2%80%93present.jpg" alt="" />
            </Link>
            
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    

                    <button type="Submit" className="login_signInButton" onClick={signIn}>Sign-in</button>
                </form>
                <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>
                <button className="login_registerButton" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
