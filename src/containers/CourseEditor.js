import React from 'react';
import LessonTabs from './LessonTabs';
import ModuleList from './ModuleList';


class CourseEditor
extends React.Component {
  render() {
    return (<div className="row">
      <div className="col-2">
        <h2>Modules</h2>
        <ModuleList />
      </div>
      <div className="col-6">
        <h2>Lessons</h2>
        <LessonTabs />
      </div>
    </div>);
  }
}

export default CourseEditor;
