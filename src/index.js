import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import CourseCard from './components/CourseCard';
import CourseManager from './containers/CourseManager';
import CourseList from './containers/CourseList';

class App extends React.Component {
  render() {
    return (
      <div>
      <CourseManager/>
      <CourseList />
    </div>);
  }
}

// <div className="card-deck">
//   <CourseCard/>
//   <CourseCard/>
//   <CourseCard/>
//   <CourseCard></CourseCard>
ReactDOM.render(<App/>, document.getElementById('root'));
