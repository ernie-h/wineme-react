import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import CourseEditor from './CourseEditor';
import CourseList from './CourseList';

class CourseManager extends React.Component {
  render() {
    return (<Router>
      <div className="container-fluid ml-3 mt-2 pb-5 ">
        <h3 className="display-3 ml-3">Whiteboard</h3>
        <Route path="/courses" component={CourseList}></Route>
        <Route path="/course/:courseId" component={CourseEditor}></Route>
      </div>
    </Router>);
  }
}

export default CourseManager;
