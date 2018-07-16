import React from 'react';
import LessonTabs from './LessonTabs';
import ModuleList from './ModuleList';

class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    this.selectCourse = this.selectCourse.bind(this);
    this.state = {
      courseId: '', 
    };
  }
  componentDidMount() {
    this.selectCourse(this.props.match.params.courseId);
  }

  componentWillReceiveProps(newProps) {
    this.selectCourse(newProps.match.params.courseId);
  }

  selectCourse(courseId) {
    this.setState({courseId: courseId});
  }

  render() {
    return (<div>
      <h2>
        Editing Course: {this.state.courseId}
      </h2>
      <div className="row">
        <div className="col-3">
          <h2>Modules</h2>
          <ModuleList/>
        </div>
        <div className="col-6">
          <h2>Lessons</h2>
          <LessonTabs/>
        </div>
      </div>
    </div>);
  }
}

export default CourseEditor;
