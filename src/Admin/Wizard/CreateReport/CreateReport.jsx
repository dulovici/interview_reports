import { React, useState } from 'react';
import '../CreateReport/createReport.scss';
import { Header } from '../../../Common/Header/Header';
import { SelectCandidate } from '../SelectCandidate/SelectCandidate';
import { SelectCompany } from '../SelectCompany/SelectCompany';
import { FillReport } from '../FillReport/FillReport';



export const CreateReport = () => {
    const [stage, setStage] = useState(1)


    return (
        <div className='create-report'>
            <Header />
            <div className='wizard'>

                <div className='stages'>
                    <div className='search-inp'>
                        <input type='text' placeholder="Search..."></input>
                    </div>

                    <p>1. Select Candidate</p>
                    <p>2. Select Company</p>
                    <p>3. Fill Report Details</p>
                </div>

                <hr></hr>

                <div className='stage'>
                    {
                        (() => {
                            if (stage === 1) {
                                return <div className='btns'>
                                    <SelectCandidate />
                                    <button onClick={() => { setStage(2) }}>Next</button>
                                </div>
                            } else if (stage === 2) {
                                return <div className='btns'>
                                    <SelectCompany />
                                    <button onClick={() => { setStage(1) }}>Back</button>
                                    <button onClick={() => { setStage(3) }}>Next</button>
                                </div>
                            } else if (stage === 3) {
                                return <div className='btns'>
                                    <FillReport />
                                    <button onClick={() => { setStage(2) }}>Back</button>
                                    <button>Submit</button>
                                </div>

                            }
                        })()
                    }
                </div>

            </div>

        </div >
    )
}
