import React from 'react';
import LessonTabs from './LessonTabs';
import ModuleList from './ModuleList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


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
          <ModuleList courseId={this.state.courseId} />

    </div>);
  }
}

export default CourseEditor;
