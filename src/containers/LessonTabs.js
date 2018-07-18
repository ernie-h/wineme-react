import React from 'react';
import {Link} from 'react-router-dom';

class LessonTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  //Can wrap link around whole component instead of title
  render() {
    return (<Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lesson.id}`}>

      <div onClick={() => {
          this.props.tabClick(this.props.lesson.id);
        }}>
        <li className="nav-item">
          <span className="close" onClick={() => {
              this.props.delete(this.props.lesson.id);
            }}>×</span>
          <p className={this.props.isActiveTab
              ? 'nav-link active'
              : 'nav-link'}>
            {this.props.lesson.title}
          </p>
        </li>
      </div>
    </Link>);
  }
}

export default LessonTabs;
