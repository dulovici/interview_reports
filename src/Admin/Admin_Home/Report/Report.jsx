import React from 'react'
import '../Report/report.scss'

export const Report = (props) => {

    const { data } = props;
    const { id } = props;
    const { getId } = props;
    const { show } = props;
    const { reports } = props;
    const { setReports } = props;

    const deleteReport = () => {
        console.log(id);
        console.log(localStorage.getItem('token'));
        fetch(`http://localhost:3333/api/reports/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(() => setReports([...reports].filter((e) => e?.id !== id)))
    }
    console.log(reports);


    return (
        <div className='report'>
            <div className='adm-report'>
                <p><span>Company:</span>{data?.companyName}</p>
                <p><span>Name:</span>{data?.candidateName}</p>
                <p><span>Date of Interview:</span>{data.interviewDate?.slice(4, 16)}</p>
                <p><span>Status:</span>{data?.status}</p>
                <div className='btns'>
                    <p className='see' onClick={() => {
                        getId(id)
                        show('')
                    }}>#</p>
                    <p className='close' onClick={deleteReport}>x</p>
                </div>
            </div>
        </div>
    )
}
