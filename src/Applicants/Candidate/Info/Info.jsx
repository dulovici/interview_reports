import React from 'react';
import '../Info/info.scss';
import img from '../../../dummy.png';

export const Info = () => {
    return (
        <div className='info'>
            <img src={img} alt='img'></img>
            <div className='applicant-info'>
                <div className='about'>
                    <p>Name:</p>
                    <h3>Zmika Peric</h3>
                </div>
                <div className='about'>
                    <p>Date of Birth:</p>
                    <h3>Zmika Peric</h3>
                </div>
                <div className='about'>
                    <p>Email:</p>
                    <h3>Zmika Peric</h3>
                </div>
                <div className='about'>
                    <p>Education:</p>
                    <h3>Zmika Peric</h3>
                </div>
            </div>
        </div>
    )
}
