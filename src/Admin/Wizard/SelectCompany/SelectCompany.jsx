import { React, useState, useEffect } from 'react';
import '../SelectCompany/selectCompany.scss';
import { CompanyCard } from '../SelectCompany/CompanyCard/CompanyCard';

export const SelectCompany = (props) => {
    const { getCompanyData } = props;
    const [companyData, setCompanyData] = useState();

    useEffect(() => {
        fetch('http://localhost:3333/api/companies')
            .then(res => res.json())
            .then(data => setCompanyData(data))
    }, [])


    console.log(companyData);


    return (
        <div className='companies-wr'>
            <div className='companies'>
                {companyData?.map((e) => {
                    return <CompanyCard key={e.id} data={e} getCompanyData={getCompanyData} />
                })}
            </div>
        </div>
    )
}


// Napravi komponentu Company

// U ovu komponentu se fečuje data svih kompanija i na osnovu tog niza se dinamicki kreira lista kompanija;

//U svaki <Company /> data o single kompaniji i onklik funkcija koja te informacije salje u objekat koji kreiramo.

// companies.map(e => < Company data={e} name={e.name} compId={e.compId} onClick={funkcija koja ubacuje name i id u objekat.}>)
