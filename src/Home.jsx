import React from 'react'
import './home.scss'
import { Link, Switch, Route } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='homePage'>
            <h1>Interview Reports</h1>

            <div className='links'>

                <Link to={`/applicants/apl-home`}>
                    <div className='link'>
                        <div className='img'></div>
                        <h2>Applicants</h2>
                    </div>
                </Link>

                <Link to={`/admin/login`}>
                    <div className='link'>
                        <div className='img'></div>
                        <h2>Admin</h2>
                    </div>
                </Link>

            </div>
        </div>
    )
}
