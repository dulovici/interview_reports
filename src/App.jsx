import './App.scss';
import { Link, Switch, Route } from 'react-router-dom';

import { Home } from './Home'
import { AplHome } from './Applicants/Applicant_Home/Apl_Home/AplHome';
import { Candidate } from './Applicants/Candidate/Candidate/Candidate';
import { PopUp } from './Common/PopUp/PopUp'

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/applicants/apl-home/' component={AplHome}></Route>
        <Route path='/applicants/candidate/' component={Candidate}></Route>
      </Switch>
    </>

  );
}

export default App;
