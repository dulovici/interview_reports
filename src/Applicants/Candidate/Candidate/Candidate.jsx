import React from 'react';
import '../Candidate/candidate.scss';
import '../../../Common/Header/Header';
import { Header } from '../../../Common/Header/Header';
import img from '../../../dummy.png';
import { AplReport } from '../AplReport/AplReport';

export const Candidate = (props) => {
    const { match } = props;
    const { data } = props;

    console.log(match);


    return (
        <div className='candidates'>
            <Header />

            <div className='info'>
                <img src={img} alt='img'></img>

                <div className='applicant-info'>
                    <div className='about'>
                        <p>Name:</p>
                        <h3>Zmika Peric</h3>
                    </div>
                    <div className='about'>
                        <p>Date of Birth:</p>
                        <h3>Zmika Peric</h3>
                    </div>
                    <div className='about'>
                        <p>Email:</p>
                        <h3>Zmika Peric</h3>
                    </div>
                    <div className='about'>
                        <p>Education:</p>
                        <h3>Zmika Peric</h3>
                    </div>
                </div>
            </div>

            <p>Reports</p>
            <AplReport />
            <AplReport />
            <AplReport />
            <AplReport />
        </div>

    )
}
