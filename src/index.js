import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import CourseManager from './containers/CourseManager';


class App extends React.Component {
  render() {
    return (
      <div className="bg-light pb-5">
      <CourseManager/>
    </div>);
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
