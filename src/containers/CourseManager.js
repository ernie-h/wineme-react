import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CourseEditor from './CourseEditor';
import CourseList from './CourseList';

class CourseManager extends React.Component {
  render() {
    return (<Router>
      <div className="container-fluid">
        <h1 className="display-3">Course Manager</h1>
        <Route path="/courses" component={CourseList}></Route>
        <Route path="/course/:courseId" component={CourseEditor}></Route>
      </div>
    </Router>);
  }
}

export default CourseManager;
