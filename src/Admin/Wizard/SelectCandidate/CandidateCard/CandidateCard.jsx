import { React, useState, useEffect } from 'react';
import '../CandidateCard/candidateCard.scss';
import img from '../../../../dummy.png'

export const CandidateCard = (props) => {
    const { data } = props;
    const { getCandidateData } = props;
    const { activeId, setActiveId } = props;



    // console.log(data);


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


