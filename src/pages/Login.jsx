import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        sgnIn(email, password);
    }

    const sgnIn = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Chat Me</span>
                <span className="heading">Login</span>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="email" placeholder='Email' />
                    <input type="Password" placeholder='Password' />
                    <button type="submit">Login</button>
                </form>
                <span>You don't have an account?<Link to="/register"> Register</Link></span>
            </div>
        </div>
    )
}

export default Login