import React from 'react'
import './home.scss'
import imgPub from './public.jpg';
import imgAdm from './admin.jpg';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className='homePage'>
            <h1>Interview Reports</h1>

            <div className='links'>

                <Link to={`/applicants`}>
                    <div className='link'>
                        <img src={imgPub} alt='avatar' />
                        <h2>Applicants</h2>
                    </div>
                </Link>

                <Link to={`/login`}>
                    <div className='link'>
                        <img src={imgAdm} alt='avatar' />
                        <h2>Admin</h2>
                    </div>
                </Link>

            </div>
        </div>
    )
}
