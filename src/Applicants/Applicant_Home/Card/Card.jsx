import React from 'react';
import '../Card/card.scss';
import img from '../../../dummy.png';
import { Link } from 'react-router-dom'

export const Card = () => {
    return (
        <div className='card'>
            <img src={img} alt='img'></img>
            <h3>Zmika Peric</h3>
            <p>zmika@hotmail.com</p>
        </div>
    )
}
