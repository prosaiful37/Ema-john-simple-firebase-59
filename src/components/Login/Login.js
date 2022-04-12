import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const emailHandlerBlur = event => {
        setEmail(event.target.value);
    }

    const passwordHandlerBlur = event => {
        setPassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }

    const handleUserSignIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='from-container'>
            
            <div>
                <form onSubmit={handleUserSignIn}>
                    <h2 className='from-title'> Login</h2>
                    <div className="input-group">
                        <label htmlFor="Eamil">Email</label>
                        <input onBlur={emailHandlerBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={passwordHandlerBlur} type="password" name="password" id="" required />
                    </div>
                    <p style={{color: 'red'}}>{error?.message}</p>
                    {
                        loading && <p>loading...</p>
                    }
                        <input className='form-submit' type="submit" value="Login" />
                    <p className='form-link-title'>
                       New to Ema-john? <Link to={'/signup'} className="form-link">Create New Account</Link>
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

export default Login;