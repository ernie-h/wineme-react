import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';


import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


import LoginLayout from './containers/LoginLayout';


class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="container-fluid pb-5 pt-3">
        <LoginLayout/>
      </div>
  </Router>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
