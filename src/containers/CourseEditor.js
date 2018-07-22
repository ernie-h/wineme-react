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
    return (<div className="mt-4 ml-4 mr-5 pb-5">
      <span className="row">
          <h1>
            <a className="ml-3 mt-1" href='/courses' role='button'>
              <i className="fa fa-chevron-circle-left ml-1 text-dark" href="/courses"></i>
            </a>
          </h1>
          <h2>
            <small className="text-muted pl-3">Back to courses</small>
          </h2>
      </span>
      <div className="row mr-1">
        <div className="col-lg-3 pt-3">
          <div className=" pt-0 ml-1 pb-3 pt-3 pl-3 wd-90 bg-secondary
            text-dark rounded">
          <h3>
            Editing Course:
          </h3>
          <h4 className="text-light text-justify">
            {this.state.course.title}
          </h4>
        </div>
          <Route path="/course/:courseId" component={ModuleList}/>
        </div>
        <div className="col-lg-9 pl-0 pr-0 mt-3 mb-5 bg-dark rounded">
          <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}/>
        </div>
      </div>
    </div>);
  }
}

export default CourseEditor;
