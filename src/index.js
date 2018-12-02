import React from 'react';
import ReactDOM from 'react-dom';
import {Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { Home } from './containers/Home';
import { Register } from './containers/Register';
import { MyersBriggs } from './containers/MyersBriggs';
import { Stores } from './containers/Stores';


import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


import LoginLayout from './containers/LoginLayout';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
        <Route path='/' component={Home}>
          <Route path='/myersbriggs' component={MyersBriggs}/>
          <Route path='/register' component={Stores} />
        </Route>
        <Route path='/login' component={LoginLayout} />
        <Route path='/register' component={Register} />
        </div>
  </Router>
  );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
