import './App.scss';
import { Link, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { Home } from './Home'
import { AplHome } from './Applicants/Applicant_Home/Apl_Home/AplHome';
import { Candidate } from './Applicants/Candidate/Candidate/Candidate';
import { PopUp } from './Common/PopUp/PopUp'
import { Login } from './Admin/Login/Login';
import { AdminHome } from './Admin/Admin_Home/AdminHome/AdminHome';
import { CreateReport } from './Admin/Wizard/CreateReport/CreateReport';

function App() {
  const [candidates, setCandidates] = useState([])
  const [reports, setReports] = useState([])

  useEffect(() => {
    fetch('http://localhost:3333/api/candidates')
      .then(res => res.json())
      .then(data => setCandidates(data))
  }, [])


  useEffect(() => {
    fetch('http://localhost:3333/api/reports')
      .then(res => res.json())
      .then(data => setReports(data))
  }, [])




  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}></Route>

        <Route exact path='/applicants'>
          <AplHome candidates={candidates} reports={reports} />
        </Route>

        <Route
          path='/applicants/candidate/:id'
          render={(r) => (
            <Candidate {...r} reports={reports} candidates={candidates} />
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
