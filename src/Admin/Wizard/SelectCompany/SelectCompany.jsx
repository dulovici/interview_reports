import { React, useState, useEffect } from 'react';
import { CompanyCard } from '../SelectCompany/CompanyCard/CompanyCard';
import '../SelectCompany/selectCompany.scss';

export const SelectCompany = (props) => {
    const { getCompanyData, searchCompanies } = props;

    const [companyData, setCompanyData] = useState();
    const [activeCompanyId, setActiveCompanyId] = useState(0)
    const [filteredCompanies, setFilteredCompanies] = useState([])



    useEffect(() => {
        fetch('http://localhost:3333/api/companies')
            .then(res => res.json())
            .then(data => {
                setCompanyData(data)
                setFilteredCompanies(data)
            })
    }, [])

    useEffect(() => {
        setFilteredCompanies(companyData?.filter((e) => {
            return e.name?.toLowerCase().includes(searchCompanies.toLowerCase())
        }))
    }, [searchCompanies, companyData])




    return (
        <div className='companies-wr'>
            <div className='companies'>
                {filteredCompanies?.map((e) => {
                    return <CompanyCard activeCompanyId={activeCompanyId} setActiveCompanyId={setActiveCompanyId} key={e.id} data={e} getCompanyData={getCompanyData} />
                })}
            </div>
        </div>
    )
}

