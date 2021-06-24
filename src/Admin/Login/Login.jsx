import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../Login/login.scss';


export const Login = () => {
    return (
        <div className='login'>
            <div className='login-card'>
                <p>Enter Your Email and Password:</p>
                <div className='email'>
                    <p>Email:</p>
                    <input type='text'></input>
                </div>
                <div className='Password'>
                    <p>Password:</p>
                    <input type='password'></input>
                </div>

                <Link to={`/admin`}> <button>Log In</button></Link>
            </div>
        </div >
    )
}

