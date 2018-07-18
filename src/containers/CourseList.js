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
    //Update course WIP
    //this.editClick = this.editClick.bind(this);
    this.state = {
      courseId: '',
      course: {
        title: '',
        created: '',
        modified: ''
      },
      courses: [],
      //Update course WIP
      // showCourseRowUpdate: false
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

  //Update course WIP
  // editClick() {
  //       console.log(this.state.showCourseRowUpdate);
  //   this.setState({showCourseRowUpdate: true});
  // }

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

  // populate(course) {
  //   this.courseService.updateCourse(courseId, course).then(()=> {
  //     this.findAllCourses();
  //   });
  // }
  //
  // updateCourse(courseId, course) {
  //   this.courseService.updateCourse(courseId, course).then(()=> {
  //     this.findAllCourses();
  //   });
  // }

  //Add to render course rows for update WIP
  // editClick={this.editClick}
  renderCourseRows() {
    let courses = this.state.courses.map((course) => {
      return <CourseRow course={course} key={course.id} delete={this.deleteCourse}/>;
    });
    return courses;
  }

  render() {
    return (<div className="ml-4">
      <h1>Course List</h1>
      <table className="table w-75">
        <thead className="">
          <th>
            <div class="input-group">
              <input className="form-control" onChange={this.setCourseTitle} value={this.state.course.title} placeholder="CS101"/>
              <span class="input-group-btn">
                <button className="btn btn-primary" onClick={this.createCourse}>Add</button>
              </span>
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
