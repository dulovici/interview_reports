import { React, useState } from 'react'
import './selectCandidate.scss';
import { CandidateCard } from '../SelectCandidate/CandidateCard/CandidateCard';

export const SelectCandidate = (props) => {
    const { filteredCandidates, getCandidateData, report } = props;

    const [activeId, setActiveId] = useState(0);


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

