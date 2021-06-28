import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../CreateReport/createReport.scss';
import { Header } from '../../../Common/Header/Header';
import { SelectCandidate } from '../SelectCandidate/SelectCandidate';
import { SelectCompany } from '../SelectCompany/SelectCompany';
import { FillReport } from '../FillReport/FillReport';



export const CreateReport = (props) => {
    const { candidates } = props;
    const { reports } = props;
    const { setReports } = props;

    const [stage, setStage] = useState(1)
    const [report, setReport] = useState({})
    const token = localStorage.getItem('token')

    let history = useHistory()

    const backToHome = () => {
        history?.push('/admin')
    }


    const getCandidateData = (name, id) => {
        setReport({ ...report, candidateName: name, candidateId: id })
    }

    const getCompanyData = (companyName, companyId) => {
        setReport({ ...report, companyName: companyName, companyId: companyId })
    }

    const sendReport = () => {
        fetch('http://localhost:3333/api/reports', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(report)
        }).then(res => res.json()).then(data => setReports([...reports, report]))
    }





    return (
        <div className='create-report'>
            <Header />
            <div className='wizard'>

                <div className='stages'>
                    <div className='search-inp'>
                        <input type='text' placeholder="Search..."></input>
                    </div>
                    <p className={stage === 1 ? 'bold' : null}>1. Select Candidate</p>
                    <p className={stage === 2 ? 'bold' : null}>2. Select Company</p>
                    <p className={stage === 3 ? 'bold' : null}>3. Fill Report Details</p>
                </div>

                <hr></hr>

                <div className='stage'>
                    {
                        (() => {
                            if (stage === 1) {
                                return <div className='btns'>
                                    <SelectCandidate candidates={candidates} getCandidateData={getCandidateData} report={report} />
                                    <button onClick={() => { setStage(2) }}>Next</button>
                                </div>
                            } else if (stage === 2) {
                                return <div className='btns'>
                                    <SelectCompany getCompanyData={getCompanyData} />
                                    <button onClick={() => { setStage(1) }}>Back</button>
                                    <button onClick={() => { setStage(3) }}>Next</button>
                                </div>
                            } else if (stage === 3) {
                                return <div className='btns'>
                                    <FillReport report={report} setReport={setReport} />
                                    <button onClick={() => { setStage(2) }}>Back</button>
                                    <button onClick={() => {
                                        token ? sendReport() : alert('please log in')
                                        backToHome()
                                    }}>Submit</button>
                                </div>

                            }
                        })()
                    }
                </div>
            </div>
        </div >
    )
}


// Napravi stejt cija ce inicijalna vrednost biti prazan objekat u formi spremnoj za post metod.