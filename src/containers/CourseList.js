import React from 'react';
import CourseRow from '../components/CourseRow';
import CourseServiceClient from '../services/CourseServiceClient';

class CourseList extends React.Component {
  constructor() {
    super();
    this.courseService = CourseServiceClient.instance;
    this.setCourseTitle = this.setCourseTitle.bind(this);
    this.createCourse = this.createCourse.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.updateCourse = this.updateCourse.bind(this);
    this.editClickHandler = this.editClickHandler.bind(this);
    this.isEditCourse = this.isEditCourse.bind(this);

    this.state = {
      courseId: '',
      course: {
        title: '',
        created: '',
        modified: ''
      },
      courses: [],
      editClicked: false,
      editCourseId: ''
    };
  }

  componentDidMount() {
    this.findAllCourses();
  }

  setCourseTitle(event) {
    this.setState({
      course: {
        title: event.target.value,
        created: Date.now()
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
    this.setState({
      course: {
        title: ''
      }
    });
    this.courseService.createCourse(this.state.course).then(() => this.findAllCourses());
  }

  deleteCourse(courseId) {
    this.courseService.deleteCourse(courseId).then(() => {
      this.findAllCourses();
    });
  }

  editClickHandler(courseId) {
    this.setState({editCourseId: courseId});
  }

  isEditCourse(courseId) {
    return this.state.editCourseId === courseId;
  }

  updateCourse(courseId, course) {
    this.courseService.updateCourse(courseId, course).then(this.setState({editCourseId: ''})).then(() => {
      this.findAllCourses();
    });
  }

  renderCourseRows() {
    let courses = this.state.courses.map((course) => {
      return <CourseRow course={course} key={course.id} delete={this.deleteCourse} editClick={this.editClickHandler} isEditCourse={this.isEditCourse(course.id)} updateCourse={this.updateCourse}/>;
    });
    return courses;
  }

  render() {
    return (<div className="mt-5 ml-4 mr-5 pb-4 bg-dark rounded text-secondary">
      <div className="row pb-3">
        <div className="col-md-2 mt-3 ml-4 pr-3 ">
          <h1 className="text-light ml-4 pt-3 display-4">Courses:</h1>
          </div>
          <div className="col-md-9 mt-5">
            <div className="row ml-3 float-right">
              <div className="col-md-9">
                <input className="form-control mr-sm-2 mt-1" onChange={this.setCourseTitle} value={this.state.course.title} placeholder="CS101"/>
              </div>
              <div className="col-md-3">
                <button className="btn btn-secondary btn-block mt-1" onClick={this.createCourse}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

      <div className="form-inline rounded ml-5 mr-1 wd-50">
        {this.renderCourseRows()}
      </div>

    </div>);
  }
}

export default CourseList;
