import './App.scss';
import { Link } from 'react-router-dom';

import { AplHome } from './Applicants/Applicant_Home/Apl_Home/AplHome';
import { Candidate } from './Applicants/Candidate/Candidate/Candidate';
import { PopUp } from './Common/PopUp/PopUp'

function App() {
  return (
    // <div className='homePage'>
    //   <h1>Interview Reports</h1>

    //   <div className='links'>

    //     <Link to={`/Applicants/AplHome`}>
    //       <div className='link'>
    //         <div className='img'></div>
    //         <h2>Applicants</h2>
    //       </div>
    //     </Link>

    //     <Link to={`/Admin/Login`}>
    //       <div className='link'>
    //         <div className='img'></div>
    //         <h2>Admin</h2>
    //       </div>
    //     </Link>

    //   </div>
    // </div>

    // <AplHome />
    <>
      <Candidate />
      <PopUp />
    </>

  );
}

export default App;
