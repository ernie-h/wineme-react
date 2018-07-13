import React from 'react';
import TopicPills from '../components/TopicPills';

class LessonTabs
extends React.Component {
  render() {
    return (<div className="container-fluid">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="/api/user">Active Tab</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/api/user">Another Tab</a>
        </li>
      </ul>
      <TopicPills/>
    </div>);
  }
}

export default LessonTabs;
