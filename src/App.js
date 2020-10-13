import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
// import logo from './logo.svg';


import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import PrimeReact from 'primereact/utils';
import Users from './pages/users';

PrimeReact.ripple = true;

function App() {
 

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path="/" component={Users} />
          {/* <ProtectedRoute exact path="/dashboard/" component={Dashboard} /> */}
          {/* <Route exact path="/*" component={Wildcard} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
