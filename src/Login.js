import React, { useState } from "react"
import "./Login.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from "./firebase"

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/")
        })
        .catch(e => alert(e.message))
    }

    const register = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push("/")
        })
        .catch(e => alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img 
                className="login__logo"
                src="https://cdn1.vectorstock.com/i/1000x1000/60/45/women-silhouette-icon-on-black-vector-23846045.jpg"
                alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button onClick={login} className="login__signInButton">Sign in</button>
                </form>
                <p>By signing-in you agree to our terms of use and privacy of service.</p>
                <button onClick={register} className="login__registerButton">Create account with us.</button>
            </div>
            
        </div>
    )
}

export default Login