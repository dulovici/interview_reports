import { React } from 'react';
import '../CandidateCard/candidateCard.scss';

export const CandidateCard = (props) => {
    const { data, getCandidateData, activeId, setActiveId } = props;



    return (
        data ?
            <div onClick={() => {
                getCandidateData()
                setActiveId(data?.id)
            }} className={activeId === data?.id ? `candidate-card active` : 'candidate-card'}>
                <img src={data?.avatar} alt='img' />
                <div className='info'>
                    <p>{data?.name}</p>
                    <p>{data?.email.toLowerCase()}</p>
                </div>
            </div> : null
    )
}


