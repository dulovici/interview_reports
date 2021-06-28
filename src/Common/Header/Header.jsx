import React from 'react'
import './header.scss';
import { Link, useHistory } from 'react-router-dom';

export const Header = () => {

    const removeToken = () => {
        localStorage.removeItem('token')
    }

    let history = useHistory()

    const backToHome = () => {
        history.push('/')
    }



    return (
        <>
            {/* <div className='apl'>
                <h2>Interview Report</h2>
                <button>Log In</button>
            </div> */}


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
