import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='from-container'>
            
            <div>
                <form action="">
                    <h2 className='from-title'> Login</h2>
                    <div className="input-group">
                        <label htmlFor="Eamil">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
                    </div>
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