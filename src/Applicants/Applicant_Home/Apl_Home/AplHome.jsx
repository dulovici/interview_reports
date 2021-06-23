import '../Apl_Home/aplHome.scss';
import { Header } from '../../../Common/Header/Header';
import { Card } from '../Card/Card';

import React from 'react'

export const AplHome = () => {
    return (
        <div className='apl-home'>
            <Header />
            <div className='search'>
                <p>Candidates</p>
                <div className='search-inp'>
                    <input type='text' placeholder="Search..."></input>
                </div>
            </div>

            <div className='candidates-cards'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}


