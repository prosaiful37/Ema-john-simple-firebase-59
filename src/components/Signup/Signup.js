import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Signup.css';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const emailHandlerBlur = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandlerBlur = event => {
        setPassword (event.target.value);
    }

    const confirmPasswordHandlerBlur = event => {
        setConfirmPassword (event.target.value);
    }

    if(user){
        navigate('/shop');
    }

    const handleForm = event => {

        event.preventDefault();

        if(password !== confirmPassword){
            setError('You two password did not match');
            return;
        }
        if(password.length < 6 ){
            setError('password must be 6 character');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    
        
    }

    return (
        <div className='from-container'>
            
            <div>
                <form onSubmit={handleForm} action="">
                    <h2 className='from-title'> Sign Up</h2>
                    <div className="input-group">
                        <label htmlFor="Eamil">Email</label>
                        <input onBlur={emailHandlerBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={passwordHandlerBlur} type="password" name="password" id="" required />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="confirm password">Confirm Password</label>
                        <input onBlur={confirmPasswordHandlerBlur} type="password" name="confirm password" id="" required />
                    </div>
                        <p style={{color: 'red'}}>{error}</p>
                        <input className='form-submit' type="submit" value="Sign Up" />
                    <p className='form-link-title'>
                    Already have an account? <Link to={'/login'} className="form-link">Login</Link>
                    </p>
                    <div className='line'>
                        <hr />
                            <p>or</p>
                        <hr />
                    </div>
                    <button>
                        <img src="google.png" alt="" /> 
                        <p>Continue with Google</p>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;