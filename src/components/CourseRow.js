import React from 'react';
class CourseRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<tr>
      <td>{this.props.course.title}</td>
    </tr>);
  }
}
export default CourseRow;
