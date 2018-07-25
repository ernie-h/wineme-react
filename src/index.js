import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';


import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import CourseManager from './containers/CourseManager';
import {WidgetReducer} from './reducers/WidgetReducer';

let store = createStore(WidgetReducer)

class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <Router>
      <div className="container-fluid bg-light pb-5 pt-3">
      <CourseManager />
    </div>
  </Router>
</Provider>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
