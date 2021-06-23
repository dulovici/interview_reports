import React from 'react'
import '../Report/report.scss'

export const Report = () => {
    return (
        <div className='report'>
            <dev className='adm-report'>
                <p><span>Company:</span>Google</p>
                <p><span>Name:</span>Zmika Peric</p>
                <p><span>Date of Interview:</span> 12.05.2020</p>
                <p><span>Status:</span> Passed</p>
                <div className='btns'>
                    <p>#</p>
                    <p>x</p>
                </div>
            </dev>
        </div>
    )
}
