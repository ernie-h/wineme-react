import React from 'react';
import TopicPills from '../components/TopicPills';

class LessonTabs extends React.Component {
  constructor(props) {
    super(props);
  }
  //   this.state = {
  //     lesson: ''
  //   };
  // }
  //
  // componentDidMount() {
  //   this.setState({lesson: this.props.courseId});
  // }

  render() {
    return (<div>
      <li className="nav-item">
        <span className="close" onClick={() => {
            console.log(this.props.delete);
            console.log(this.props.lesson.id);
            this.props.delete(this.props.lesson.id);
          }}>×</span>
        <a className="nav-link active" href="#">{this.props.lesson.title}</a>
      </li>
    </div>);
  }
}

export default LessonTabs;
