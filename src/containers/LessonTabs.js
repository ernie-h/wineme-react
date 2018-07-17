import React from 'react';
import TopicPills from '../components/TopicPills';

class LessonTabs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<li className="nav-item">
      <a className="nav-link active" href="#">{this.props.lesson.title}</a>
    </li>);
  }
}

export default LessonTabs;
