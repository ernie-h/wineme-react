import React from 'react';
import LessonTabs from './LessonTabs';

class ModuleEditor extends React.Component {
  constructor(props) {
    super(props);
    this.setCourseId = this.setCourseId.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.state = {
      courseId: '',
      moduleId: ''
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.courseId);
    this.setCourseId(this.props.match.params.courseId);
    this.setModuleId(this.props.match.params.moduleId);
  }

  componentWillReceiveProps(newProps) {
    this.setCourseId(newProps.match.params.courseId);
    this.setModuleId(newProps.match.params.moduleId);
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  setModuleId(moduleId) {
    this.setState({moduleId: moduleId});
  }

  render() {
    console.log("CourseId: " +this.state.courseId);
    console.log("ModuleId: " +this.state.moduleId);
    return (
      <div className="display-5">
        <h2>Lessons</h2>
      <h6>
        Module Editor
      </h6>
      <LessonTabs />
      {this.state.courseId},
      {this.state.moduleId}
    </div>);
  }
}

export default ModuleEditor;
