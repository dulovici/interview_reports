import { React, useState, useEffect } from 'react';
import '../CandidateCard/candidateCard.scss';
import img from '../../../../dummy.png'

export const CandidateCard = (props) => {
    const { data } = props;
    const { getCandidateData } = props;


    const [isActive, setIsActive] = useState('');
    // const [id, setId] = useState(null);





    return (
        <div onClick={() => {
            getCandidateData()
            // setId(data.id)
            setIsActive('active')
        }} className={`candidate-card ${isActive}`}>
            <img src={img} alt='img' />
            <div className='info'>
                <p>{data.name}</p>
                <p>{data.email.toLowerCase()}</p>
            </div>
        </div>
    )
}


