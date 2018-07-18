import React from 'react';
import {Link} from 'react-router-dom';

class CourseRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<tr>
      <td>
        <span className="float-right">
          <i className="fa fa-pencil" onClick={this.props.editClick}></i>
          <i className="fa fa-times-circle pl-2" onClick={() => {
              this.props.delete(this.props.course.id);
            }}></i>
          </span>
        <Link to={`/course/${this.props.course.id}`}>
          {this.props.course.title}
        </Link>
        <h6> Created on: {this.props.course.created}</h6>
      </td>
    </tr>);
  }
}

export default CourseRow;
