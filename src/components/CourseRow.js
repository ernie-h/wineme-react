import React from 'react';
import {Link} from 'react-router-dom';
import CourseRowUpdate from './CourseRowUpdate';

class CourseRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<tr>
      <td>
        <Link to={`/course/${this.props.course.id}`}>
          {this.props.course.title}
        </Link>
        <span className="float-right">
          <i className="fa fa-trash" onClick={() => {
              this.props.delete(this.props.course.id);
            }}></i>
          <i className="fa fa-pencil" onClick={this.props.editClick}></i>
        </span>
      </td>
    </tr>);
  }
}

export default CourseRow;
