import { React, useState } from 'react';
import '../Candidate/candidate.scss';
import '../../../Common/Header/Header';
import { Header } from '../../../Common/Header/Header';
import img from '../../../dummy.png';
import { AplReport } from '../AplReport/AplReport';

export const Candidate = (props) => {
    const [repId, setRepId] = useState()
    const [popUp, setPopUp] = useState('hidden')

    const { match } = props;
    const { reports } = props;
    const { candidates } = props;
    console.log(candidates);

    const id = Number(match.params.id);
    const reportsForPerson = reports.filter((e) => e.candidateId === id);
    const candidate = candidates.find((e) => e.id === id);
    const singleReport = reportsForPerson.find(e => e.id == repId)


    const getId = (repId) => {
        setRepId(repId)
    }

    const shouldPopUp = (arg) => {
        setPopUp(arg)
    }

    // renderuj samo sa uslovom da ima kandidata 
    return (
        <div className='candidates'>
            <Header />

            <div className='info'>
                <img src={img} alt='img'></img>

                <div className='applicant-info'>
                    <div className='about'>
                        <p>Name:</p>
                        <h3>{candidate?.name}</h3>
                    </div>
                    <div className='about'>
                        <p>Date of Birth:</p>
                        <h3>{candidate?.birthday?.slice(4, 16)}</h3>
                    </div>
                    <div className='about'>
                        <p>Email:</p>
                        <h3>{candidate?.email.toLowerCase()}</h3>
                    </div>
                    <div className='about'>
                        <p>Education:</p>
                        <h3>{candidate?.education}</h3>
                    </div>
                </div>
            </div>

            <p>Reports</p>

            {reportsForPerson?.map((e) => <AplReport data={e} key={e.id} getId={getId} shouldPopUp={shouldPopUp} />)}

            <div className={`popUp ${popUp}`}>
                <div className="content">
                    <div className='hdr'>
                        <h2>{candidate?.name}</h2>
                        <div className='close' onClick={() => setPopUp('hidden')}>
                            <p>X</p>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="info">
                        <div className="data">
                            <div className="data-info">
                                <p>Company</p>
                                <h3>{singleReport?.companyName}</h3>
                            </div>
                            <div className="data-info">
                                <p>Interview Date</p>
                                <h3>{singleReport?.interviewDate?.slice(4, 16)}</h3>
                            </div>
                            <div className="data-info">
                                <p>Phase</p>
                                <h3>{singleReport?.phase}</h3>
                            </div>
                            <div className="data-info">
                                <p>Status</p>
                                <h3>{singleReport?.status}</h3>
                            </div>
                        </div>
                        <div className="note">
                            <p><span>Notes</span></p>
                            <p className='text'>
                                {singleReport?.note}
                            </p>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    )
}

