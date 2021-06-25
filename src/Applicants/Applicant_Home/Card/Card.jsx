import React from 'react';
import '../Card/card.scss';
import img from '../../../dummy.png';


export const Card = (props) => {
    const { data } = props;
    // const { reports } = props;




    return (
        <div className='card'>
            <img src={img} alt='img'></img>
            <h3>{data.name}</h3>
        </div>
    )
}
