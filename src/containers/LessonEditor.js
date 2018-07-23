import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//import LessonServiceClient from '../services/LessonServiceClient';
import TopicServiceClient from '../services/TopicServiceClient'
import Topics from '../components/Topics';

class LessonEditor extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.setCourseId = this.setCourseId.bind(this);
  //   this.setModuleId = this.setModuleId.bind(this);
  //   this.setLessonId = this.setLessonId.bind(this);
  //   this.state = {
  //     courseId: '',
  //     moduleId: '',
  //     lessonId: '',
  //     lesson: '',
  //     lessons: []
  //   };
  // }
  //
  // componentDidMount() {
  //   this.setCourseId(this.props.match.params.courseId);
  //   this.setModuleId(this.props.match.params.moduleId);
  //   this.setLessonId(this.props.match.params.lessonId);
  // }
  //
  // componentWillReceiveProps(newProps) {
  //
  //   this.setLessonId(newProps.match.params.lessonId);
  //   this.setCourseId(newProps.match.params.courseId);
  //   this.setModuleId(newProps.match.params.moduleId);
  // }
  //
  // initState() {
  //   this.setState({courseId: '', moduleId: '', lessonId: '', lesson: '', lessons: []});
  //
  // }
  //
  // setCourseId(courseId) {
  //   this.setState({courseId: courseId});
  // }
  //
  // setModuleId(moduleId) {
  //   this.setState({moduleId: moduleId});
  // }
  //
  // setLessonId(lessonId) {
  //   this.setState({lessonId: lessonId});
  // }
  constructor(props) {
    super(props);
    this.createTopic = this.createTopic.bind(this);
    this.deleteTopic = this.deleteTopic.bind(this);
    this.updateTopic = this.updateTopic.bind(this);

    this.editClickHandler = this.editClickHandler.bind(this);
    this.isEditTopic = this.isEditTopic.bind(this);

    this.setCourseId = this.setCourseId.bind(this);
    this.setModuleId = this.setModuleId.bind(this);
    this.setLessonId = this.setLessonId.bind(this);
    this.setTopicTitle = this.setTopicTitle.bind(this);
    this.onClickTabHandler = this.onClickTabHandler.bind(this);
    //this.lessonService = LessonServiceClient.instance;
    this.topicService = TopicServiceClient.instance;
    this.state = {
      courseId: '',
      moduleId: '',
      lessonId: '',
      topic: {
        title: ''
      },
      topics: [],
      lesson: '',
      tabClicked: false,
      activeTabTopicId: '',
      editClicked: false,
      editTopicId: ''
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.courseId);
    console.log(this.props.match.params.moduleId);
    console.log(this.props.match.params.lessonId);


    this.setCourseId(this.props.match.params.courseId);
    this.setModuleId(this.props.match.params.moduleId);
    this.setLessonId(this.props.match.params.lessonId);
    //this.findLessonById(this.props.match.params.lessonId);
    this.findAllTopicsForLesson(this.props.match.params.courseId,
      this.props.match.params.moduleId, this.props.match.params.lessonId);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps.match.params.courseId);
    console.log(newProps.match.params.moduleId);
    console.log(newProps.match.params.lessonId);

    this.setCourseId(newProps.match.params.courseId);
    this.setModuleId(newProps.match.params.moduleId);
    this.setLessonId(newProps.match.params.lessonId);
    //this.findLessonById(newProps.match.params.lessonId);
    this.findAllTopicsForLesson(newProps.match.params.courseId,
      newProps.match.params.moduleId, newProps.match.params.lessonId);
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

  setTopics(topics) {
    this.setState({topics: topics});
  }

  setTopicTitle(event) {
    this.setState({
      topic: {
        title: event.target.value
      }
    });
  }

  findAllTopicsForLesson(courseId, moduleId, lessonId) {
    this.topicService.findAllTopicsForLesson(courseId, moduleId, lessonId)
    .then((topics) => {
      this.setTopics(topics);
    });
  }

  // findLessonById(lessonId) {
  //   this.lessonService.findLessonById(lessonId).then((lesson) => {
  //     this.setState({lesson: lesson});
  //   });
  // }

  createTopic() {
    //Clear input field
    this.setState({topic: { title: ''}});
    this.topicService.createTopic(this.state.courseId, this.state.moduleId, this.state.lessonId, this.state.topic)
    .then(() => {this.findAllTopicsForLesson(this.state.courseId, this.state.moduleId, this.state.lessonId);
    });
  }

  deleteTopic(topicId) {
    this.topicService.deleteTopic(topicId).then(() => {
      this.findAllTopicsForLesson(this.state.courseId, this.state.moduleId, this.state.lessonId);
    });
  }

  onClickTabHandler(topicId) {
    this.setState({activeTabTopicId: topicId});
  }
  isActiveTab(topicId) {
    return this.state.activeTabTopicId === topicId;
  }
  //Update
  editClickHandler(topicId) {
    this.setState({editTopicId: topicId});
  }

  isEditTopic(topicId) {
    return this.state.editTopicId === topicId;
  }

  updateTopic(topicId, topic) {
    this.topicService.updateTopic(topicId, topic).then(this.setState({editTopicId: ''})).then(() => {
      this.findAllTopicsForLesson(this.state.courseId, this.state.moduleId, this.state.lessonId);
    });
  }

  renderListOfTopics() {
    let topics = this.state.topics.map((topic) => {
      return <Topics courseId={this.state.courseId} moduleId={this.state.moduleId}
        lessonId={this.state.lessonId} topic={topic} key={topic.id}
        delete={this.deleteTopic} tabClick={this.onClickTabHandler}
        isActiveTab={this.isActiveTab(topic.id)} activeTabHandler={this.activeTabHandler}
        editClick={this.editClickHandler} isEditTopic={this.isEditTopic(topic.id)}
        updateTopic={this.updateTopic}/>;
    });
    return topics;
  }

  //PREVIOUS RENDER FOR TOPIC PILLS
  //   <div className="container-fluid">
  //   {
  //     this.state.lessonId !== '' && <ul className="nav nav-pills">
  //         <li className="nav-item pt-4">
  //           <a className="nav-link active">LessonId: {this.state.lessonId}</a>
  //         </li>
  //       </ul>
  //   }
  // </div>);

  render() {
    return (<div className="pb-5 pl-4 pr-0 mr-0 bg-dark rounded text-light">
    <div className="row pt-4 mr-5">
        <div className="col-3">
          <input onChange={this.setTopicTitle} value={this.state.topic.title} className="form-control bg-light" placeholder="New topic"/>
        </div>
        <div className="col-1">
          <button className="btn btn-secondary btn-block" onClick={this.createTopic}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
      <ul className="nav nav-tabs pt-3">
        {this.renderListOfTopics()}
      </ul>
    </div>);

  }
  // {
  //   this.state.lessonId !== '' &&
  //   <div>
  //   <div className="row pt-4 mr-5">
  //       <div className="col-3">
  //         <input onChange={this.setTopicTitle} value={this.state.topic.title} className="form-control bg-light" placeholder="New topic"/>
  //       </div>
  //       <div className="col-1">
  //         <button className="btn btn-secondary btn-block" onClick={this.createTopic}>
  //           <i className="fa fa-plus"></i>
  //         </button>
  //       </div>
  //     </div>
  //     <ul className="nav nav-tabs pt-3">
  //       {this.renderListOfTopics()}
  //     </ul>
  //   </div>
  // }
}

export default LessonEditor;
