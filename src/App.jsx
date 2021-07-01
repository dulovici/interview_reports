import './App.scss';
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { Home } from './Home'
import { AplHome } from './Applicants/Applicant_Home/Apl_Home/AplHome';
import { Candidate } from './Applicants/Candidate/Candidate/Candidate';
import { Login } from './Admin/Login/Login';
import { AdminHome } from './Admin/Admin_Home/AdminHome/AdminHome';
import { CreateReport } from './Admin/Wizard/CreateReport/CreateReport';

export const tokenContext = React.createContext();
export const candidatesContext = React.createContext();
export const reportsContext = React.createContext();

const TokenProvider = tokenContext.Provider;
const CandidatesProvider = candidatesContext.Provider;
const ReportProvider = reportsContext.Provider;



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
    <Switch>
      <CandidatesProvider value={{ candidates, setCandidates }}>
        <ReportProvider value={{ reports, setReports }}>
          <TokenProvider value={{ token, setToken }}>

            <Route exact path='/' component={Home}></Route>

            <Route exact path='/applicants' component={AplHome} />

            <Route
              path='/applicants/candidate/:id'
              render={(r) => (
                <Candidate {...r} />
              )}
            ></Route>

            <Route path='/login' component={Login} />

            <Route exact path='/admin'>
              {token ?
                <AdminHome /> : <Redirect to={'/login'} />
              }
            </Route>

            <Route path='/admin/create-report' >
              {token ?
                <CreateReport /> : <Redirect to={'/'} />}
            </Route>

          </TokenProvider>
        </ReportProvider>
      </CandidatesProvider>
    </Switch>


  );
}

export default App;
