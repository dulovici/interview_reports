import React from 'react';
import '../CandidateCard/candidateCard.scss';
import img from '../../../../dummy.png'

export const CandidateCard = () => {
    return (
        <div className='candidate-card'>
            <img src={img} alt='img' />
            <div className='info'>
                <p>Irfan Ibrovic</p>
                <p>stefanosirozza@hoteleuropa.com</p>
            </div>
        </div>
    )
}


