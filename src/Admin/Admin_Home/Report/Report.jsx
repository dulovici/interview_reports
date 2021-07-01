import React from 'react'
import '../Report/report.scss'
import { MdRemoveRedEye, MdHighlightOff } from "react-icons/md";

export const Report = (props) => {
    const { data, id, getId, show, reports, setReports } = props;


    const deleteReport = () => {
        fetch(`http://localhost:3333/api/reports/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(() => setReports([...reports].filter((e) => e?.id !== id)))
    }


    return (
        <div key={id} className='report'>
            <div className='adm-report'>
                <p><span>Company:</span>{data?.companyName}</p>
                <p><span>Name:</span>{data?.candidateName}</p>
                <p><span>Date of Interview:</span>{data.interviewDate?.slice(4, 16)}</p>
                <p><span>Status:</span>{data?.status}</p>
                <div className='btns'>
                    <p className='see' onClick={() => {
                        getId(id)
                        show('')
                    }}><MdRemoveRedEye /></p>
                    <p className='close' onClick={deleteReport}><MdHighlightOff /></p>
                </div>
            </div>
        </div>
    )
}
