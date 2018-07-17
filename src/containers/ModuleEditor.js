import React from 'react';
import LessonTabs from './LessonTabs';
import LessonServiceClient from '../services/LessonServiceClient';

class ModuleEditor extends React.Component {
  constructor(props) {
    super(props);
    this.createLesson = this.createLesson.bind(this);
    this.lessonService = LessonServiceClient.instance;
    this.setCourseId = this.setCourseId.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.setLessonTitle = this.setLessonTitle.bind(this);
    this.state = {
      courseId: '',
      moduleId: '',
      lesson: {
        title: ''
      },
      lessons: []
    };
  }

  componentDidMount() {
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

  setLessonTitle(event) {
    this.setState({
      lesson: {
        title: event.target.value
      }
    });
  }

  findAllLessonsForModule(courseId, moduleId) {
    this.lessonService.findAllLessonsForModule(courseId, moduleId).then((lessons) => {
      this.setLessons(lessons);
    });
  }

  createLesson() {
    this.lessonService.createLesson(this.state.courseId, this.state.moduleId, this.state.lesson)
    .then(() => {this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
    });
  }

  renderListOfLessons() {
    let lessons = this.state.lessons.map((lesson) => {
      return <LessonTabs lesson={lesson} key={lesson.id}/>;
    });
    return lessons;
  }

  // linebreak in here needs to be changed
  render() {
    return (<div className="container-fluid">
      <h2>Lessons</h2>
      <div className="row">
        <div className="col-3">
          <input onChange={this.setLessonTitle} value={this.state.lesson.title} className="form-control" placeholder="How to life"/>
        </div>
        <div className="col-1">
          <button className="btn btn-primary btn-block" onClick={this.createLesson}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
      <br></br>
      <h6>Editting module: "INSERT MODULE TITLE"
      </h6>
      <ul className="nav nav-tabs">
        {this.renderListOfLessons()}
      </ul>
    </div>);
  }
}

export default ModuleEditor;
