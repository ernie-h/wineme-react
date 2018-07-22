import React from 'react';
import {Route} from 'react-router-dom'
import CourseEditor from './CourseEditor';
import CourseList from './CourseList';

class CourseManager extends React.Component {
  render() {
    return (
      <div className="container-fluid mr-5 ml-3 mt-2 pb-5">
        <h3 className="display-3 pt-4 pb-4 pl-3 mr-5 ml-4 bg-dark text-light rounded">Whiteboard</h3>
        <Route path="/courses" component={CourseList}></Route>
        <Route path="/course/:courseId" component={CourseEditor}></Route>
      </div>);
  }
}

export default CourseManager;
