import React from 'react'
import './header.scss';
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <>
            {/* <div className='apl'>
                <h2>Interview Report</h2>
                <button>Log In</button>
            </div> */}


            <div className='adm'>
                <h2>Reports Administration</h2>
                <div className='btns'>
                    <Link to={'/'}><button>Log Out</button></Link>
                    <Link to={'/admin/create-report'}><button>Create new Report</button></Link>
                </div>
            </div>

            {/* <div className='adm'>
                <h2>Reports Administration</h2>
                <div className='btns'>
                    <button>Log Out</button>
                    <button>Create new Report</button>
                </div>
            </div> */}

        </>



    )
}
