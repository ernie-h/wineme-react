import React from 'react';

export default class CourseCard
extends React.Component {
  render() {
    return (<div className="container-fluid" className="card" styles={{
        width: '18rem'
      }}>
      <div className="card-body">
        <h5 className="card-title">
          Course
        </h5>
        <p className="card-text">
          Learn about front-end development and upcoming technologies!
        </p>
        <a href="#" className="btn btn-primary">
          Click here for more!
        </a>
      </div>
    </div>);
  }
}
