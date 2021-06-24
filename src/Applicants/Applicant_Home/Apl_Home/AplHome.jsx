import React from 'react'
import '../Apl_Home/aplHome.scss';
import { Header } from '../../../Common/Header/Header';
import { Card } from '../Card/Card';
import { Link } from 'react-router-dom'



export const AplHome = (props) => {
    const { candidates } = props;
    const { reports } = props;

    // console.log(candidates);
    // console.log(reports);

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
                {candidates.map((e) => {
                    return <Link to={`/applicants/candidate/${e.id}`}>
                        <Card data={e} reports={reports} />
                    </Link>
                })}
            </div>
        </div>
    )
}



