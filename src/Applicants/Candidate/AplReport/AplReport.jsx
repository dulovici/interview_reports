import React from 'react';
import './aplReport.scss';
import { MdRemoveRedEye } from "react-icons/md";

export const AplReport = (props) => {
    const { data, getId, shouldPopUp } = props;



    return (
        <div className='reports'>
            <div className='single-rep'>
                <p><span>Company:</span>{data.companyName}</p>
                <p><span>Date of Interview:</span> {data.interviewDate?.slice(4, 16)}</p>
                <p><span>Status:</span> {data.status}</p>
                <p className='see' onClick={() => {
                    getId(data.id)
                    shouldPopUp('')
                }}><MdRemoveRedEye /></p>
            </div>
        </div>
    )
}
