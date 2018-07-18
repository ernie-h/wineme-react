// import React from 'react';
//
// class TopicPills extends React.Component {
//   constructor(props) {
//     super(props);
//     this.createLesson = this.createLesson.bind(this);
//     this.deleteLesson = this.deleteLesson.bind(this);
//     this.setCourseId = this.setCourseId.bind(this);
//     this.setModuleId = this.setModuleId.bind(this);
//     this.setLessonTitle = this.setLessonTitle.bind(this);
//     this.onClickTabHandler = this.onClickTabHandler.bind(this);
//     this.lessonService = LessonServiceClient.instance;
//     this.state = {
//       courseId: '',
//       moduleId: '',
//       lesson: {
//         title: ''
//       },
//       lessons: [],
//       tabClicked: false,
//       activeTabLessonId: ''
//     };
//   }
//
//   componentDidMount() {
//     this.setCourseId(this.props.match.params.courseId);
//     this.setModuleId(this.props.match.params.moduleId);
//     this.setLessonId(this.props.match.params.lessonId);
//   }
//
//   componentWillReceiveProps(newProps) {
//     this.setCourseId(newProps.match.params.courseId);
//     this.setModuleId(newProps.match.params.moduleId);
//     this.setLessonId(newProps.match.params.lessonId);
//   }
//
//   setCourseId(courseId) {
//     this.setState({courseId: courseId});
//   }
//
//   setModuleId(moduleId) {
//     this.setState({moduleId: moduleId});
//   }
//
// // DO THIS IF I HAVE TIME
//
//   render() {
//     return (<ul className="nav nav-pills">
//       <li className="nav-item">
//         <a className="nav-link active" href="#">Topic 1</a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Topic 2</a>
//       </li>
//     </ul>);
//   }
// }
//
// export default TopicPills;
