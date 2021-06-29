import { React, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import '../Login/login.scss';


export const Login = (props) => {
    const { token, setToken } = props;

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let history = useHistory()

    const backToHome = () => {
        history.push('/')
    }



    const logIn = () => {
        fetch('http://localhost:3333/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json())
            .then(data => {
                localStorage.setItem('token', data.accessToken)
                setToken(data.accessToken)
            })
    }


    return (
        token ? <Redirect to='/admin' /> :
            <div className='login'>
                <div className='login-card'>
                    <p>Enter Your Email and Password:</p>
                    <div className='email'>
                        <p>Email:</p>
                        <input type='text' onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>
                    <div className='Password'>
                        <p>Password:</p>
                        <input type='password' onChange={(e) => { setPassword(e.target.value) }}></input>
                    </div>

                    <button onClick={logIn}> Log In</button>
                    <button onClick={backToHome}>Home</button>
                </div>
            </div >
    )
}

