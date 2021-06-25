import React from 'react'
import '../Report/report.scss'

export const Report = (props) => {

    const { data } = props;
    const { id } = props;
    const { getId } = props;
    const { show } = props;

    // console.log(id);

    return (
        <div className='report'>
            <div className='adm-report'>
                <p><span>Company:</span>{data.companyName}</p>
                <p><span>Name:</span>{data.candidateName}</p>
                <p><span>Date of Interview:</span>{data.interviewDate.slice(4, 16)}</p>
                <p><span>Status:</span>{data.status}</p>
                <div className='btns'>
                    <p className='see' onClick={() => {
                        getId(id)
                        show('')
                    }}>#</p>
                    <p className='close'>x</p>
                </div>
            </div>
        </div>
    )
}
