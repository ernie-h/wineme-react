import React from 'react';
import TopicPills from '../components/TopicPills'

class LessonTabs
extends React.Component {
  render() {
    return (<div className="container-fluid">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="#">Active Tab</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Another Tab</a>
        </li>
      </ul>
      <TopicPills/>
    </div>);
  }
}

export default LessonTabs;
