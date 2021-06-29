import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../CreateReport/createReport.scss';
import { Header } from '../../../Common/Header/Header';
import { SelectCandidate } from '../SelectCandidate/SelectCandidate';
import { SelectCompany } from '../SelectCompany/SelectCompany';
import { FillReport } from '../FillReport/FillReport';



export const CreateReport = (props) => {
    const { candidates, setReports, reports, setToken } = props;

    const [stage, setStage] = useState(1)
    const [report, setReport] = useState({})
    const [searchCandidates, setSearchCandidates] = useState('')
    const [filteredCandidates, setFilteredCandidates] = useState([])
    const [searchCompanies, setSearchCompanies] = useState('')


    useEffect(() => {
        setFilteredCandidates(candidates?.filter((e) => {
            return e.name?.toLowerCase().includes(searchCandidates.toLowerCase())
        }))
    }, [searchCandidates, candidates])




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
            <Header setToken={setToken} />
            <div className='wizard'>

                <div className='stages'>
                    <div className='search-inp'>
                        <input type='text' placeholder="Search..." onChange={(e) => {
                            setSearchCandidates(e.target.value)
                            setSearchCompanies(e.target.value)
                        }}></input>
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
                                    <SelectCandidate filteredCandidates={filteredCandidates} candidates={candidates} getCandidateData={getCandidateData} report={report} />
                                    <button onClick={() => { setStage(2) }}>Next</button>
                                </div>
                            } else if (stage === 2) {
                                return <div className='btns'>
                                    <SelectCompany searchCompanies={searchCompanies} setSearchCompanies={setSearchCompanies} getCompanyData={getCompanyData} />
                                    <button onClick={() => { setStage(1) }}>Back</button>
                                    <button onClick={() => { setStage(3) }}>Next</button>
                                </div>
                            } else if (stage === 3) {
                                return <div className='btns'>
                                    <FillReport report={report} setReport={setReport} />
                                    <button onClick={() => { setStage(2) }}>Back</button>
                                    <button onClick={() => {
                                        sendReport()
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