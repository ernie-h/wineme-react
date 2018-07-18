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
    this.courseService.updateCourse(courseId, course)
    .then(this.setState({editCourseId: ''}))
    .then(()=> {this.findAllCourses();
    });
  }

  renderCourseRows() {
    let courses = this.state.courses.map((course) => {
      return <CourseRow course={course} key={course.id} delete={this.deleteCourse}
        editClick={this.editClickHandler} isEditCourse={this.isEditCourse(course.id)}
        updateCourse={this.updateCourse}/>;
    });
    return courses;
  }

  render() {
    return (<div className="ml-4 mr-5">
      <h1>Course List</h1>
      <table className="table w-80">
        <thead className="">
          <th>
            <div class="form-inline">
              <input className="form-control mr-sm-2" onChange={this.setCourseTitle}
                value={this.state.course.title} placeholder="CS101"/>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.createCourse}>Add</button>
            </div>
          </th>
        </thead>
        <tbody>
          <tr>
            <h5 className="ml-2 pt-3">Course Title</h5>
          </tr>
          {this.renderCourseRows()}
        </tbody>
      </table>
    </div>);
  }
}

export default CourseList;
