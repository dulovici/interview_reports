import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { Home } from './Home'
import { AplHome } from './Applicants/Applicant_Home/Apl_Home/AplHome';
import { Candidate } from './Applicants/Candidate/Candidate/Candidate';
import { Login } from './Admin/Login/Login';
import { AdminHome } from './Admin/Admin_Home/AdminHome/AdminHome';
import { CreateReport } from './Admin/Wizard/CreateReport/CreateReport';


function App() {
  const [candidates, setCandidates] = useState([])
  const [reports, setReports] = useState([])
  const [token, setToken] = useState(localStorage.getItem('token'))

  useEffect(() => {
    fetch('http://localhost:3333/api/candidates')
      .then(res => res.json())
      .then(data => setCandidates(data))
  }, [reports])


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
          <AplHome candidates={candidates} reports={reports} setToken={setToken} />
        </Route>

        <Route
          path='/applicants/candidate/:id'
          render={(r) => (
            <Candidate {...r} reports={reports} candidates={candidates} />
          )}
        ></Route>



        <Route path='/login'>
          <Login setToken={setToken} token={token} />
        </Route>

        <Route exact path='/admin'>
          {token ?
            <AdminHome reports={reports} setReports={setReports} setToken={setToken} /> : <Redirect to={'/login'} />
          }
        </Route>

        <Route path='/admin/create-report' >
          {token ?
            <CreateReport candidates={candidates} reports={reports} setReports={setReports} setToken={setToken} /> : <Redirect to={'/'} />}
        </Route>
      </Switch>




    </>

  );
}

export default App;
