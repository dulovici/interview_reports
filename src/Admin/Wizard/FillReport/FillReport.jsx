import { React, useState } from 'react';
import DatePicker from 'react-datepicker'
import '../FillReport/fillReport.scss';
import "react-datepicker/dist/react-datepicker.css";





export const FillReport = (props) => {
    const { report, setReport } = props;

    // eslint-disable-next-line no-unused-vars
    const [startDate, setStartDate] = useState(new Date())






    return (
        <>
            <div className='fill-report'>
                <div className='select'>
                    <p>Date</p>
                    <DatePicker selected={startDate} onChange={(date) => setReport({ ...report, interviewDate: `${date}` })} maxDate={Date.now()} />
                    <p>Phase</p>
                    <select name="phase" id="phase" onClick={(e) => { setReport({ ...report, phase: e.target.value }) }}>
                        <option value="CV">CV</option>
                        <option value="HR">HR</option>
                        <option value="Tech">Tech</option>
                        <option value="Final">Final</option>
                    </select>
                    <p>Status</p>
                    <select name="phase" id="phase" onClick={(e) => setReport({ ...report, status: e.target.value })}>
                        <option value="Passed">Passed</option>
                        <option value="Declined">Declined</option>
                    </select>
                </div>
                <textarea placeholder='Write report here.' onChange={(e) => setReport({ ...report, note: e.target.value })}></textarea>

            </div>


        </>
    )
}
