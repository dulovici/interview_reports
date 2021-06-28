import { React, useState } from 'react';
import '../CompanyCard/companyCard.scss';

export const CompanyCard = (props) => {
    const { data } = props;
    const { getCompanyData } = props;

    const [isActive, setIsActive] = useState('')



    return (
        <div className={`company-card ${isActive}`} onClick={() => {
            getCompanyData(data.name, data.id)
            setIsActive('active')
        }}>
            <p>{data.name}</p>
        </div>
    )
}
