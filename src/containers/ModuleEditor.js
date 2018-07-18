import React from 'react';
import LessonTabs from './LessonTabs';
import LessonServiceClient from '../services/LessonServiceClient';
import TopicPills from '../components/TopicPills';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class ModuleEditor extends React.Component {
  constructor(props) {
    super(props);
    this.createLesson = this.createLesson.bind(this);
    this.deleteLesson = this.deleteLesson.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.setLessonTitle = this.setLessonTitle.bind(this);
    this.onClickTabHandler = this.onClickTabHandler.bind(this);
    this.lessonService = LessonServiceClient.instance;
    this.state = {
      courseId: '',
      moduleId: '',
      lesson: {
        title: ''
      },
      lessons: [],
      tabClicked: false,
      activeTabLessonId: ''
    };
  }

  componentDidMount() {
    this.setCourseId(this.props.match.params.courseId);
    this.setModuleId(this.props.match.params.moduleId);
  }

  componentWillReceiveProps(newProps) {
    this.setCourseId(newProps.match.params.courseId);
    this.setModuleId(newProps.match.params.moduleId);
    this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
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
    this.setState({lesson: {title: ''}});
    this.lessonService.createLesson(this.state.courseId, this.state.moduleId, this.state.lesson)
    .then(() => {this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
    });
  }

  deleteLesson(lessonId) {
    this.lessonService.deleteLesson(lessonId)
    .then(() => {this.findAllLessonsForModule(this.state.courseId, this.state.moduleId);
    });
  }

  onClickTabHandler(lessonId){
    this.setState({activeTabLessonId: lessonId});
  }
  isActiveTab(lessonId) {
    return this.state.activeTabLessonId === lessonId;
  }

  renderListOfLessons() {
    let lessons = this.state.lessons.map((lesson) => {
      return <LessonTabs courseId={this.state.courseId} moduleId={this.state.moduleId}
        lesson={lesson} key={lesson.id} delete={this.deleteLesson}
        tabClick={this.onClickTabHandler} isActiveTab={this.isActiveTab(lesson.id)}
        activeTabHandler={this.activeTabHandler}/>;
    });
    return lessons;
  }

  // linebreak in here needs to be changed
  render() {
    return (<Router>
      <div className="container-fluid">
      <h2>Lessons</h2>
      <div className="row">
        <div className="col-3">
          <input onChange={this.setLessonTitle} value={this.state.lesson.title}
            className="form-control" placeholder="How to life"/>
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
      <Route path="/course/:courseId/module/:moduleId/lesson/:lessonId" component={TopicPills}/>
    </div>
  </Router>);
  }
}

export default ModuleEditor;
