import React, { useState } from 'react';
import "./CSS/LoginSignup.css";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const LoginSignup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add validation and handling logic here
        if (!name || !email || !password) {
            alert('Please fill in all fields');
            return;
        }
        if (!agree) {
            alert('You must agree to the terms and conditions');
            return;
        }
        
        console.log({ name, email, password, agree });
    };

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit} className="loginsignup-fields">
                    <input 
                        type="text" 
                        placeholder='Your Name' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input 
                        type="email" 
                        placeholder='Your Email Address' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Continue</button>
                </form>
                <p className='loginsignup-login'>
                    Already have an account? 
                    <span onClick={() => navigate('/Login')} style={{ cursor: 'pointer', color: 'blue' }}> Login here</span>
                </p>
                <div className="loginsignup-agree">
                    <input 
                        type="checkbox" 
                        checked={agree} 
                        onChange={() => setAgree(!agree)} 
                    />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
