import React from 'react';
import {Link} from 'react-router-dom';

class CourseRow extends React.Component {
  constructor(props) {
    super(props);
    this.setEditCourse = this.setEditCourse.bind(this);
    this.state = {
      course: {
        title: '',
        created: '',
        modified: ''
      }
    };
  }

  setEditCourse(event) {
    this.setState({
      course: {
        title: event.target.value,
        created: '',
        modified: Date.now()
      }
    });
  }

  render() {
    return (<tr>
      <td>
        <span className="float-right">
          <i className="fa fa-pencil" onClick={() => this.props.editClick(this.props.course.id)}></i>
          <i className="fa fa-times-circle pl-2" onClick={() => {
              this.props.delete(this.props.course.id);
            }}></i>
        </span>
        {
          this.props.isEditCourse
            ? <div>
                <span className="float-right">
                  <i className="fa fa-check pr-2" onClick={() =>
                      this.props.updateCourse(this.props.course.id, this.state.course)}></i>
                </span>
                <input className="form-control w-25" value={this.state.course.title} onChange={this.setEditCourse}/>
              </div>
            : <Link to={`/course/${this.props.course.id}`}>
                {this.props.course.title}
              </Link>
        }
        <p>Created on: {this.props.course.created}</p>
      </td>
    </tr>);
  }
}

export default CourseRow;
