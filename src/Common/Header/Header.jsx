import React from 'react'
import './header.scss';
import { Link, useHistory } from 'react-router-dom';

export const Header = (props) => {


    const { setToken } = props;

    const removeToken = () => {
        localStorage.removeItem('token')
        setToken('')
    }

    let history = useHistory()

    const backToHome = () => {
        history.push('/')
    }





    return (
        <>
            {localStorage.getItem('token')
                ?
                <div className='adm'>
                    <h2>Reports Administration</h2>
                    <div className='btns'>
                        <button onClick={() => {
                            removeToken()
                            backToHome()
                            console.log(localStorage.getItem('token'));
                        }}>Log Out</button>
                        <Link to={'/admin/create-report'}><button>Create new Report</button></Link>
                    </div>
                </div>

                :

                <div className='apl'>
                    <h2>Interview Report</h2>
                    <div className='btns'>
                        <button onClick={() => { history.push('/applicants') }}>Home</button>
                        <button onClick={() => { history.push('/login') }}>Log In</button>
                    </div>
                </div>}


            {/* <div className='adm'>
                <h2>Reports Administration</h2>
                <div className='btns'>
                    <button>Log Out</button>
                    <button>Create new Report</button>
                </div>
            </div> */}

        </>



    )
}
