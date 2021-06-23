import React from 'react';
import '../FillReport/fillReport.scss';


export const FillReport = () => {
    return (
        <>
            <div className='fill-report'>
                <div className='select'>
                    <p>Date</p>
                    <input type="date" />
                    <p>Date</p>
                    <select name="phase" id="phase">
                        <option value="CV">CV</option>
                        <option value="HR">HR</option>
                        <option value="Tech">Tech</option>
                        <option value="Final">Final</option>
                    </select>
                    <p>Date</p>
                    <select name="phase" id="phase">
                        <option value="Passed">Passed</option>
                        <option value="Declined">Declined</option>
                    </select>
                </div>
                <textarea placeholder='Write report here.'></textarea>

            </div>

            <div className='btns'>
                <button>Back</button>
                <button>Submit</button>
            </div>
        </>
    )
}
