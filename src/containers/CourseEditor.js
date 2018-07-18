import React from 'react';
import CourseServiceClient from '../services/CourseServiceClient';
import LessonTabs from './LessonTabs';
import ModuleList from './ModuleList';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class CourseEditor extends React.Component {
  constructor(props) {
    super(props);
    this.courseService = CourseServiceClient.instance;
    this.selectCourse = this.selectCourse.bind(this);
    this.state = {
      courseId: '',
      course: ''
    };
  }
  componentDidMount() {
    this.selectCourse(this.props.match.params.courseId);
  }

  componentWillReceiveProps(newProps) {
    this.selectCourse(newProps.match.params.courseId);
  }

  selectCourse(courseId) {
    this.setState({
      courseId: courseId
    }, this.findCourseById(courseId));
  }

  findCourseById(courseId) {
    this.courseService.findCourseById(courseId).then((course) => {
      this.setState({course: course});
    });
  }

  render() {
    return (<div className="ml-4">
      <h2>
        Editing Course:
        <small className="text-muted pl-3">{this.state.course.title}</small>
      </h2>
      <ModuleList courseId={this.state.courseId}/>

    </div>);
  }
}

export default CourseEditor;
