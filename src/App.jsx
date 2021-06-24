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

  const data = 'kurcina';

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}></Route>

        <Route exact path='/applicants'>
          <AplHome />
        </Route>

        <Route
          path='/applicants/candidate/:id'
          render={(r) => (
            <Candidate {...r} data={data} />
          )}
        ></Route>

        <Route path='/login' component={Login}></Route>
        <Route exact path='/admin' component={AdminHome}></Route>
        <Route path='/admin/create-report' component={CreateReport}></Route>
      </Switch>

      {/* < Candidate />
      <PopUp /> */}


    </>

  );
}

export default App;
