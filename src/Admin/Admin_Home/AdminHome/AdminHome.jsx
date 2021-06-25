import React, { useState, useEffect } from 'react';
import '../AdminHome/adminHome.scss';
import '../../../Common/Header/Header'
import { Header } from '../../../Common/Header/Header';
import { Report } from '../Report/Report'


export const AdminHome = (props) => {
    const { reports } = props;
    const [singleReport, setSingleReport] = useState(null)
    const [showPopUp, setShowPopUp] = useState('hidden')

    const [search, setSearch] = useState('');
    const [filteredReports, setFilteredReports] = useState([])

    useEffect(() => {
        setFilteredReports(reports?.filter((e) => {
            return e.candidateName.toLowerCase().includes(search.toLowerCase()) || e.companyName.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, reports])




    const getId = (par) => {
        setSingleReport(reports?.find((e) => e.id == par))
    }
    const show = (arg) => {
        setShowPopUp(arg)
    }


    return (
        <>
            <div className='adm-home'>
                <Header />
                <div className='search-inp'>
                    <input type='text' placeholder="Search..." onChange={(e) => setSearch(e.target.value)}></input>
                </div>

                {filteredReports?.map((e) => {
                    return <Report data={e} key={e.id} id={e.id} getId={getId} show={show} />
                })}

            </div>


            {singleReport && <div className={`popUp ${showPopUp}`}>
                <div className="content">
                    <div className='hdr'>
                        <h2>{singleReport?.candidateName}</h2>
                        <div className='close'>
                            <p onClick={() => setShowPopUp('hidden')}>X</p>
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
                                <h3>{singleReport?.interviewDate.slice(4, 16)}</h3>
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
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rerum ad, aliquid inventore cupiditate praesentium amet rem? Architecto provident exercitationem veniam, laudantium ipsum soluta omnis distinctio, excepturi praesentium est repellat. Voluptates cumque nemo exercitationem, soluta reiciendis quas ipsum. Libero dolor corporis unde. Sunt quos iusto saepe odio quidem mollitia perferendis.
                        </p>
                        </div>
                    </div>


                </div>
            </div>}
        </>
    )
}
