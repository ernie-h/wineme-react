import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseServiceClient from '../services/CourseServiceClient';

class CourseList extends React.Component {
  constructor() {
    super();
    this.courseService = CourseServiceClient.instance;
    this.titleChanged = this.titleChanged.bind(this);
    this.createCourse = this.createCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.state = {
      courseId: '',
      course: {
        title: ''
      },
      courses: []
    };
  }

  componentDidMount() {
    this.findAllCourses();
  }

  setCourseTitle(event) {
    this.setState({
      course: {
        title: event.target.value
      }
    });
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  setCourses(courses) {
    this.setState({courses: courses});
  }

  findAllCourses() {
    this.courseService.findAllCourses().then((courses) => {
      this.setState({courses: courses});
    });
  }

  createCourse() {
    this.courseService.createCourse(this.state.course).then(() => this.findAllCourses());
  }

  deleteCourse(courseId) {
    this.courseService.deleteCourse(courseId).then(() => {
      this.findAllCourses(this.state.courseId);
    });
  }

  titleChanged(event) {
    this.setState({
      course: {
        title: event.target.value
      }
    });
  }

  renderCourseRows() {
    let courses = this.state.courses.map((course) => {
      return <CourseRow course={course} key={course.id} delete={this.deleteCourse}/>;
    });
    return courses;
  }

  render() {
    return (<div>
      <h2>Course List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
          <tr>
            <th><input className="form-control" onChange={this.titleChanged} id="titleFld" placeholder="CS101"/></th>
            <th>
              <button className="btn btn-primary" onClick={this.createCourse}>Add</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {this.renderCourseRows()}
        </tbody>
      </table>
    </div>);
  }
}

export default CourseList;
