import React from 'react';
import '../AdminHome/adminHome.scss';
import '../../../Common/Header/Header'
import { Header } from '../../../Common/Header/Header';
import { Report } from '../Report/Report'


export const AdminHome = () => {
    return (
        <div className='adm-home'>
            <Header />
            <div className='search-inp'>
                <input type='text' placeholder="Search..."></input>
            </div>

            <Report />
            <Report />
            <Report />
            <Report />

        </div>
    )
}
