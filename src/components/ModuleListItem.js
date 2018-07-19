import React from 'react';
import {Link} from 'react-router-dom';

class ModuleListItem extends React.Component {
  constructor(props) {
    super(props);
    this.setEditModule = this.setEditModule.bind(this);
    this.state = {
      module: {
        title: '',
      }
    };
  }

  setEditModule(event) {
    this.setState({
      module: {
        title: event.target.value,
      }
    });
  }

  render() {
    return (<li className="list-group-item container-fluid">
      <span className="float-right">
        <i className="fa fa-pencil" onClick={() => this.props.editClick(this.props.module.id)}></i>
        <i className="fa fa-times-circle pl-2" onClick={() => {
            this.props.delete(this.props.module.id);
          }}></i>
      </span>
      {
        this.props.isEditModule
          ? <div>
              <span className="float-right">
                <i className="fa fa-check pr-2" onClick={() => this.props.updateModule(this.props.module.id, this.state.module)}></i>
              </span>
              <input className="form-control w-50" value={this.state.module.title}
                onChange={this.setEditModule}/>
            </div>
          : <Link to={`/course/${this.props.courseId}/module/${this.props.module.id}`}>
              {this.props.module.title}
            </Link>
      }
    </li>);
  }
}

export default ModuleListItem;
