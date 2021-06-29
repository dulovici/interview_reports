import React from 'react';
import '../Card/card.scss';


export const Card = (props) => {
    const { data } = props;


    return (
        <div className='card'>
            <img src={data.avatar} alt='img'></img>
            <h3>{data.name}</h3>
        </div>
    )
}
