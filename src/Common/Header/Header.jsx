import React from 'react'
import './header.scss';

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
                    <button>Log Out</button>
                    <button>Create new Report</button>
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
