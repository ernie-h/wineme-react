import React from 'react';
import {Link} from 'react-router-dom';
import WidgetListContainer from '../containers/WidgetListContainer';

class Topics extends React.Component {
  constructor(props) {
    super(props);
    this.setEditTopic = this.setEditTopic.bind(this);
    this.state = {
      topic: {
        title: ''
      }
    };
  }

  setEditTopic(event) {
    this.setState({
      topic: {
        title: event.target.value
      }
    });
  }

  render() {
    return (<div className="bg-dark rounded-top" onClick={() => {
        this.props.tabClick(this.props.topic.id);
      }}>
      <li className="nav-item">
          <p className={this.props.isActiveTab
              ? 'nav-link active bg-secondary'
              : 'nav-link'}>
              <span className="float-right">
                <i className="fa fa-pencil pl-2 text-light"
                  onClick={() => this.props.editClick(this.props.topic.id)}></i>
                <i className="fa fa-times-circle pl-2 text-light"
                  onClick={() => { this.props.delete(this.props.topic.id);
                  }}></i>
              </span>
              <Link className="text-light" to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topic.id}`}>
            {
              this.props.isEditTopic
                ? <div>
                    <span className="float-right ">
                      <i className="fa fa-check mb-2" onClick={() => this.props.updateTopic(this.props.topic.id, this.state.topic)}></i>
                    </span>
                    <input className="form-control w-70" placeHolder="New topic title"
                      value={this.state.topic.title} onChange={this.setEditTopic}/>
                  </div>
                : this.props.topic.title

            }
            </Link>
          </p>
          <WidgetListContainer />
      </li>
    </div>);
  }
}

export default Topics;
