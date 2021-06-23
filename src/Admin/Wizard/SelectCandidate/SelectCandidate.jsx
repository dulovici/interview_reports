import React from 'react'
import './selectCandidate.scss';
import { CandidateCard } from '../SelectCandidate/CandidateCard/CandidateCard';

export const SelectCandidate = () => {
    return (
        <div className='card-wr'>
            <div className='select-candidate'>
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
                <CandidateCard />
            </div>

            <div className='btns'>
                <button>Next</button>
            </div>

        </div>
    )
}
