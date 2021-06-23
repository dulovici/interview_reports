import React from 'react';
import '../CreateReport/createReport.scss';
import { Header } from '../../../Common/Header/Header';
import { SelectCandidate } from '../SelectCandidate/SelectCandidate';
import { SelectCompany } from '../SelectCompany/SelectCompany';
import { FillReport } from '../FillReport/FillReport';



export const CreateReport = () => {
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
                    <SelectCandidate />
                    {/* <SelectCompany /> */}
                    {/* <FillReport /> */}
                </div>
            </div>

        </div>
    )
}
