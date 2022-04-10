import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    if (user) {
        navigate(from, { replace: true })

    }


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (user) {
        navigate('/orders');
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <form onSubmit={handleUserSignIn}>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <div className='input-group'>

                        <label htmlFor="email" required>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" />

                    </div>
                    <div className="input-group">
                        <label htmlFor="password" required>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <p style={{ color: "red" }}>{error?.message}</p>

                    {
                        loading && <p>Loading...</p>
                    }

                    <input className="form-submit" type="submit" value="Signup" />
                    <p>
                        New to Ema-john? <Link className="form-link" to="/Signup">Create New Account</Link>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default Login;