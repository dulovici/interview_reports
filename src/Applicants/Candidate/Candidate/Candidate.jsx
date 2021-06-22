import React from 'react';
import '../Candidate/candidate.scss';
import '../../Header/Header';
import { Header } from '../../Header/Header';
import { Info } from '../Info/Info'
import { AplReport } from '../AplReport/AplReport';

export const Candidate = () => {
    return (
        <div className='candidates'>
            <Header />

            <div className='candidate-wr'>
                <Info />
                <p>Reports</p>
                <AplReport />
                <AplReport />
                <AplReport />
                <AplReport />
            </div>
        </div>
    )
}
