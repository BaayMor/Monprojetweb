import React, { useState } from 'react';
import './loginpopup.css';
import { assets } from '../../assets/frontend_assets/assets';

const LoginPopup = ({ setShowLogin }) => {
    const [currState, setCurrState] = useState("Login");
    
    return (
        <div className='login-popup'>
            <form className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currState}</h2>
                    <img 
                        onClick={() => setShowLogin(false)} 
                        src={assets.cross_icon} 
                        alt="Fermer" 
                    />
                </div>
                <div className='login-popup-inputs'>
                    {currState==="Login" ? <></> :<input type="text" placeholder='Enter your name' required />}
                    <input type="email" placeholder='Enter your email' required />
                    <input type="password" placeholder='Enter your password' required />
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" 
                    ? <p>Already have an account? <span onClick={() => setCurrState("Sign Up")}>Sign Up here</span></p>
                    : <p>Don't have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    );
};

export default LoginPopup;