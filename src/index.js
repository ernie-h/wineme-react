import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import CourseCard from './components/CourseCard';
import CourseManager from './containers/CourseManager';


// import CourseManager from './containers/CourseManager';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import HelloWorld from './hello'
// import Hello from './components/Hello'
// import Stateless from './components/Stateless'
// import ModuleListItem from './components/ModuleListItem';
// import ModuleList2 from './containers/ModuleList2'
// import App from './examples/App';

ReactDOM.render(<div>
  <CourseManager/>
  <div className="card-deck">
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    <CourseCard></CourseCard>
  </div>
</div>, document.getElementById('root'));
