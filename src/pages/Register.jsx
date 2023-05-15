import React from 'react'
import { AddPhotoAlternate } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

import { auth, storage, db } from '../firebase';
import "../style.scss"
import { useState } from 'react';


const Register = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        setError(null);
        const Username = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        const file = event.target[3].files[0];
        registerNewUser(Username, email, password, file)
    }

    const registerNewUser = async (name, email, password, profile) => {
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            profile && await uploadProfile(profile, name, res);
            await updateProfile(res.user, {
                displayName: name
            })
            addNewUserDoc(res);
            addUserChats(res);
            setUser(res);
            navigate('/home')
        } catch (e) {
            console.log(e)
            setUser(null);
            setError(e);
        }
    }


    const uploadProfile = (file, userName, res) => {
        console.log("uploded image", file);
        const storageRef = ref(storage, userName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            (error) => {
                setError(error)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateProfile(res.user, {
                        photoURL: downloadURL
                    })
                });
            }
        );
    }

    const addUserChats = async (res) => {
        console.log("user chats added", res);
        await setDoc(doc(db, "userChats", res.user.uid), {})
    }

    const addNewUserDoc = async (res) => {
        console.log("new user doc added", res);
        try {
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName: res.user.displayName,
                email: res.user.email,
                photoURL: res?.user?.photoURL
            });
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='formContainer'>
            <div className="formWrapper">
                <span className="logo">Chat Me</span>
                <span className="heading">Register</span>
                {error && <div className="alert" style={{ color: "red", fontWeight: "600" }}>
                    Something went wrong
                </div>}

                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type="text" placeholder='Username' />
                    <input type="email" placeholder='Email' />
                    <input type="Password" placeholder='Password' />
                    <input style={{ display: "none" }} type="file" id='file' />
                    <label htmlFor='file' >
                        <span><AddPhotoAlternate sx={{ fontSize: "2rem" }} /></span>
                        <span>Add Avatar</span>
                    </label>
                    <button type="submit"> Sign Up</button>
                </form>
                <span>Already have an account?<Link to="/login"> Login</Link></span>

            </div>
        </div>
    )
}

export default Register