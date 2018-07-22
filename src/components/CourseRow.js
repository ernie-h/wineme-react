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
    return (<div className="card mt-3 mr-3 mb-3 ml-3 bg-secondary text-light">
      <div className="card-body">
        <h5 className="card-title text-dark">{this.props.course.title}</h5>
        <span className="float-right text-dark">
          <i className="fa fa-pencil" onClick={() => this.props.editClick(this.props.course.id)}></i>
          <i className="fa fa-times-circle pl-2" onClick={() => {
              this.props.delete(this.props.course.id);
            }}></i>
        </span>
        {
          this.props.isEditCourse && <div>
                <span className="float-right">
                  <i className="fa fa-check pr-2 text-dark" onClick={() => this.props.updateCourse(this.props.course.id, this.state.course)}></i>
                </span>
                <input className="form-control w-25" value={this.state.course.title} onChange={this.setEditCourse}/>
              </div>

        }
        <p className="card-text">Created on:</p>
        <p className="card-text">{this.props.course.created}</p>
        <Link className="text-dark" to={`/course/${this.props.course.id}`}>
          <button class="btn btn-dark">Go to course...</button>
        </Link>
      </div>
    </div>);
  }
}
//
// <tr className="form-inline">
//   <td className="ml-3">
//     <span className="float-right text-light">
//       <i className="fa fa-pencil" onClick={() => this.props.editClick(this.props.course.id)}></i>
//       <i className="fa fa-times-circle pl-2" onClick={() => {
//           this.props.delete(this.props.course.id);
//         }}></i>
//     </span>
//     {
//       this.props.isEditCourse
//         ? <div>
//             <span className="float-right">
//               <i className="fa fa-check pr-2 text-light" onClick={() => this.props.updateCourse(this.props.course.id, this.state.course)}></i>
//             </span>
//             <input className="form-control w-25" value={this.state.course.title} onChange={this.setEditCourse}/>
//           </div>
//         : <Link className="text-light" to={`/course/${this.props.course.id}`}>
//             {this.props.course.title}
//           </Link>
//     }
//     <p>Created on: {this.props.course.created}</p>
//   </td>
// </tr>

export default CourseRow;
