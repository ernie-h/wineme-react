import React from 'react';
import LessonTabs from './LessonTabs';
import LessonServiceClient from '../services/LessonServiceClient';

class ModuleEditor extends React.Component {
  constructor(props) {
    super(props);
    this.lessonService = LessonServiceClient.instance;
    this.setCourseId = this.setCourseId.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.state = {
      courseId: '',
      moduleId: '',
      lessons: []
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
    this.findAllLessonsForModule(newProps.match.params.courseId, newProps.match.params.moduleId);
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  setModuleId(moduleId) {
    this.setState({moduleId: moduleId});
  }

  setLessons(lessons) {
    this.setState({lessons: lessons});
  }

  findAllLessonsForModule(courseId, moduleId) {
    this.lessonService.findAllLessonsForModule(courseId, moduleId).then((lessons) => {
      this.setLessons(lessons);

    });
  }

  renderListOfLessons() {
    let lessons = this.state.lessons.map((lesson) => {
      return <LessonTabs lesson={lesson} key={lesson.id}/>;
    });
    return lessons;
  }

  render() {
    return (<div className="container-fluid">
      <h2>Lessons</h2>
      <h6>Editting module: "INSERT MODULE TITLE" </h6>
      <ul className="nav nav-tabs">
        {this.renderListOfLessons()}
      </ul>
    </div>);
  }
}

export default ModuleEditor;
