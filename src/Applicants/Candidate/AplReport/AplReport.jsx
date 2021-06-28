import React from 'react';
import './aplReport.scss';

export const AplReport = (props) => {
    const { data } = props;
    const { getId } = props;
    const { shouldPopUp } = props;

    console.log(data);

    return (
        <div className='reports'>
            <div className='single-rep'>
                <p><span>Company:</span>{data.companyName}</p>
                <p><span>Date of Interview:</span> {data.interviewDate?.slice(4, 16)}</p>
                <p><span>Status:</span> {data.status}</p>
                <p className='see' onClick={() => {
                    getId(data.id)
                    shouldPopUp('')
                }}>#</p>
            </div>
        </div>
    )
}
