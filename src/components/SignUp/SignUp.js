import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confrimPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate('/shop')

    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confrimPassword) {
            setError('your two passwords did not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

            })
    }


    return (
        <form onSubmit={handleCreateUser}>
            <div className='form-container'>
                <div>
                    <h2 className='form-title' required>Signup</h2>
                    <div className='input-group'>

                        <label htmlFor="email" required>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" />

                    </div>
                    <div className="input-group">
                        <label htmlFor="password" >Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confiem-password" required>Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" />
                    </div>
                    <p style={{ color: "red" }}>{error}</p>
                    <input className="form-submit" type="submit" value="Login" />
                    <p>
                        Already Have An Account? <Link className="form-link" to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default SignUp;