import { React } from 'react';
import '../CompanyCard/companyCard.scss';

export const CompanyCard = (props) => {
    const { data, getCompanyData, activeCompanyId, setActiveCompanyId } = props;




    return (
        <div className={activeCompanyId === data.id ? `company-card active` : 'company-card'} onClick={() => {
            getCompanyData(data.name, data.id)
            setActiveCompanyId(data.id)
        }}>
            <p>{data.name}</p>
        </div>
    )
}
