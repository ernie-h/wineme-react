import React from 'react';
import CourseServiceClient from '../services/CourseServiceClient';
import LessonTabs from './LessonTabs';
import ModuleList from './ModuleList';
import ModuleEditor from './ModuleEditor';
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
    return (<div className="ml-4 pb-5">
      <h2>
        <a href='/courses' role='button'>
          <i className="fa fa-chevron-circle-left ml-1" href="/courses"></i>
        </a>
        <small className="text-muted pl-3">Back to courses</small>
      </h2>
      <div className="row">
        <div className="col-3 pt-3">
          <h3 className="pt-0 ml-1 pb-4 pt-3 pl-3 wd-90 bg-secondary
            text-dark rounded">
            Editing Course:
            <small className="text-light pl-3">{this.state.course.title}</small>
          </h3>
          <Route path="/course/:courseId" component={ModuleList}/>
        </div>
        <div className="col-9">
          <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}/>
        </div>
      </div>
    </div>);
  }
}

export default CourseEditor;
