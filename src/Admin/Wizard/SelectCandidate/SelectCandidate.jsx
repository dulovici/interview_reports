import { React, useState } from 'react'
import './selectCandidate.scss';
import { CandidateCard } from '../SelectCandidate/CandidateCard/CandidateCard';

export const SelectCandidate = (props) => {

    const { candidates, filteredCandidates } = props;
    const { getCandidateData } = props;
    const { report } = props;
    const [activeId, setActiveId] = useState(0);

    console.log(filteredCandidates);


    // console.log(id);

    return (
        <div className='card-wr'>
            <div className='select-candidate'>
                {filteredCandidates?.map((e) => {
                    return <CandidateCard activeId={activeId} setActiveId={setActiveId} report={report} data={e} key={e.id} getCandidateData={() => {
                        getCandidateData(e.name, e.id)
                    }} />
                })}
            </div>
        </div>
    )
}

// Ovde ulaze svi kandidati od kojih se mapira pojedini CandidateCard u koj se prosledjuje (e) info o pojedinacnom kandidatu.

// Na svaku karticu se prosledjuje onClick funkcija koja u inicijalno prazan objekad dodaje informacije iz kartice na koju smo kliknuli.

// candidates.map(e => <CandidateCard data={e} onClick={funkcija koja ubacuje podatke o korisniku u objekat}/>)