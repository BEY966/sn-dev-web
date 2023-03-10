import React from 'react';
import "./Login.css";

function Login() {
  return (
    <div className='login'>
        <div className='login-container'>
            <img className='login-logo' src='./whatsapp-logo.png' alt=''/>
            <p className='login-name'>Whatsapp Web</p>
            <button className='login-btn' >
                <img src='./google-logo.png' alt='login with google'/>
                Login with Google
            </button>
        </div>
    </div>
  );
}


export default Login;
