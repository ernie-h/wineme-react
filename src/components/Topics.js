// import React from 'react';
//
// class Topics extends React.Component {
//   constructor(props) {
//     super(props);
//     this.setCourseId = this.setCourseId.bind(this);
//     this.setModuleId = this.setModuleId.bind(this);
//     this.setLessonId = this.setLessonId.bind(this);
//     this.state = {
//       courseId: '',
//       moduleId: '',
//       lessonId: '',
//       lesson: '',
//       lessons: []
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
//
//     this.setLessonId(newProps.match.params.lessonId);
//     this.setCourseId(newProps.match.params.courseId);
//     this.setModuleId(newProps.match.params.moduleId);}
//
//
//   initState() {
//     this.setState({courseId: '', moduleId: '', lessonId: '', lesson: '', lessons: []});
//
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
//   setLessonId(lessonId) {
//     this.setState({lessonId: lessonId});
//   }
//
//   render() {
//     return (<div className="container-fluid">
//       {this.state.lessonId !== '' &&
//         <ul className="nav nav-pills">
//             <li className="nav-item pt-4">
//               <a className="nav-link active">LessonId: {this.state.lessonId}</a>
//             </li>
//           </ul>
//         }
//       </div>);
//   }
// }
//
// export default Topics;
