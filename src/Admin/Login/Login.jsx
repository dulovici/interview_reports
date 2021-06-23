import React from 'react';
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

                <button>Submit</button>
            </div>
        </div>
    )
}
