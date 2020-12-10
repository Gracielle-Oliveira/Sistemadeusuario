import React from 'react';
import ReactDOM from 'react-dom';
import Startlogin from './pages/login/login';
import Initlogin from './pages/login/login';
import Userform from './pages/form/form';
import Userlist from './pages/list/list';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Protroute from './components/router';


ReactDOM.render(<>
    <Router>
      <Switch>
        <Route path='/login'>
          < Startlogin />
        </Route>
        <Route path="/form">
          < Userform />
        </Route>

        <Protroute path="/" component={Userlist} />
        
      </Switch>
    </Router>
      
    </>, document.getElementById('scu'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

