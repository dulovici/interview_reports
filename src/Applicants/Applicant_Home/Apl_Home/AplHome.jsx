import '../Apl_Home/aplHome.scss';
import { Card } from '../Card/Card';
import { Link } from 'react-router-dom';
import { Header } from '../../../Common/Header/Header';
import { React, useState, useEffect, useContext } from 'react'
import { tokenContext,candidatesContext,reportsContext} from '../../../App';


export const AplHome = (props) => {
    const { candidates } = useContext(candidatesContext);
    const { reports } = useContext(reportsContext);
    const { setToken } = useContext(tokenContext);
    
    const [filteredCandidates, setFilteredCandidates] = useState([]);
    const [search, setSearch] = useState('');
    

    useEffect(() => {
        setFilteredCandidates(candidates?.filter((e) => {
            return e.name.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, candidates])



    return (
        <div className='apl-home'>
            <Header setToken={setToken} />
            <div className='search'>
                <p >Candidates</p>
                <div className='search-inp'>
                    <input type='text' placeholder="Search..." onChange={(e) => { setSearch(e.target.value) }}></input>
                </div>
            </div>

            <div className='candidates-cards'>
                {filteredCandidates?.map((e) => {
                    return <Link key={e.id} to={`/applicants/candidate/${e.id}`} className='link'>
                        <Card data={e} reports={reports} />
                    </Link>
                })}
            </div>
        </div>
    )
}



