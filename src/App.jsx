import './App.scss';
import { Link, Switch, Route } from 'react-router-dom';

import { Home } from './Home'
import { AplHome } from './Applicants/Applicant_Home/Apl_Home/AplHome';
import { Candidate } from './Applicants/Candidate/Candidate/Candidate';
import { PopUp } from './Common/PopUp/PopUp'
import { Login } from './Admin/Login/Login';
import { AdminHome } from './Admin/Admin_Home/AdminHome/AdminHome';
import { CreateReport } from './Admin/Wizard/CreateReport/CreateReport';

function App() {


  return (
    <>
      {/* <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/applicants/apl-home/' component={AplHome}></Route>
        <Route path='/applicants/candidate/' component={Candidate}></Route>
      </Switch> */}

      < Home />
      {/* <PopUp /> */}


    </>

  );
}

export default App;
