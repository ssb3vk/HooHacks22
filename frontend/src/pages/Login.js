import React from "react";
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from 'react-router-dom';

function Login({setIsAuth}) {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
           localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/"); // redirect user to home page after logging in
        })
    }

    return (
        <div className="loginPage">
            <p>Sign in with Google to Continue</p>
            <button className="login-wth-google-btn" onClick={signInWithGoogle}>
                Sign in with Google
            </button>
        </div>
    );
}

export default Login;