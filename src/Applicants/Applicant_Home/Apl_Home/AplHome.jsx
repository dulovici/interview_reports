import '../Apl_Home/aplHome.scss';
import { Header } from '../../Header/Header';
import { Search } from '../../../Common/Search/Search';
import { Card } from '../Card/Card';

import React from 'react'

export const AplHome = () => {
    return (
        <div className='apl-home'>
            <Header />
            <div className='search'>
                <p>Candidates</p>
                <Search />
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
