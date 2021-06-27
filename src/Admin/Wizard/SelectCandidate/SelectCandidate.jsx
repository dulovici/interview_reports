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
        </div>
    )
}

// Ovde ulaze svi kandidati od kojih se mapira pojedini CandidateCard u koj se prosledjuje (e) info o pojedinacnom kandidatu.

// Na svaku karticu se prosledjuje onClick funkcija koja u inicijalno prazan objekad dodaje informacije iz kartice na koju smo kliknuli.

// candidates.map(e => <CandidateCard data={e} onClick={funkcija koja ubacuje podatke o korisniku u objekat}/>)