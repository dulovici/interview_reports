import React from 'react'
import '../PopUp/popUp.scss'

export const PopUp = () => {
    return (
        <div className='popUp'>
            <div className="content">
                <div className='hdr'>
                    <h2>Zmika Peric</h2>
                    <div className='close'>
                        <p>X</p>
                    </div>
                </div>
                <hr></hr>

                <div className="info">
                    <div className="data">
                        <div className="data-info">
                            <p>Company</p>
                            <h3>Google</h3>
                        </div>
                        <div className="data-info">
                            <p>Interview Date</p>
                            <h3>20.05.2021</h3>
                        </div>
                        <div className="data-info">
                            <p>Phase</p>
                            <h3>Tehnical Interview</h3>
                        </div>
                        <div className="data-info">
                            <p>Status</p>
                            <h3>Passed</h3>
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
        </div>
    )
}
