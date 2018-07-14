import React from 'react';
import CourseRow from '../components/CourseRow';
// import CourseService from '../services/CourseService';

class CourseList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>
      <h2>Course List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <CourseRow />
          <CourseRow />
          <CourseRow />
          <CourseRow />
          
        </tbody>
      </table>
    </div>);
  }
}

export default CourseList;
