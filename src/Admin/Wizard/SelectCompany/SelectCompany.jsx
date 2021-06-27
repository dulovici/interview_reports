import React from 'react';
import '../SelectCompany/selectCompany.scss';

export const SelectCompany = () => {
    return (
        <div className='companies-wr'>
            <div className='companies'>
                <p>Kupujem prodajem</p>
                <p>Kupujem prodajem</p>
                <p>Kupujem prodajem</p>
                <p>Kupujem prodajem</p>
                <p>Kupujem prodajem</p>
                <p>Kupujem prodajem</p>
            </div>
        </div>
    )
}


// Napravi komponentu Company

// U ovu komponentu se fečuje data svih kompanija i na osnovu tog niza se dinamicki kreira lista kompanija;

//U svaki <Company /> data o single kompaniji i onklik funkcija koja te informacije salje u objekat koji kreiramo.

// companies.map(e => < Company data={e} name={e.name} compId={e.compId} onClick={funkcija koja ubacuje name i id u objekat.}>)
