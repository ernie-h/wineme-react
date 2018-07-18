import React from 'react';

class Lessons extends React.Component {
  constructor(props) {
    super(props);
    this.setCourseId = this.setCourseId.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.setLessonId = this.setLessonId.bind(this);
    this.state = {
      courseId: '',
      moduleId: '',
      lesson: '',
      lessons: []
    };
  }

  componentDidMount() {
    this.setCourseId(this.props.match.params.courseId);
    this.setModuleId(this.props.match.params.moduleId);
    this.setLessonId(this.props.match.params.lessonId);
  }

  componentWillReceiveProps(newProps) {
    this.setCourseId(newProps.match.params.courseId);
    this.setModuleId(newProps.match.params.moduleId);
    this.setLessonId(newProps.match.params.lessonId);
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  setModuleId(moduleId) {
    this.setState({moduleId: moduleId});
  }

  setLessonId(lessonId) {
    this.setState({lessonId: lessonId});
  }

  // DO THIS IF I HAVE TIME

  render() {
    return (<div className="container-fluid">
      <span>
        <h1>
          Course Id: {this.state.courseId}
        </h1>
        <h1>
          Module Id: {this.state.moduleId}</h1>
        <h1>
          Lesson Id: {this.state.lessonId}
        </h1>
      </span>
    </div>);
  }
}

export default Lessons;
