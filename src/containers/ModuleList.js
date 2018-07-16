import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ModuleListItem from '../components/ModuleListItem';
import ModuleServiceClient from '../services/ModuleServiceClient';
import ModuleEditor from './ModuleEditor';

class ModuleList extends React.Component {
  constructor() {
    super();
    this.createModule = this.createModule.bind(this);
    this.deleteModule = this.deleteModule.bind(this);
    this.setModuleTitle = this.setModuleTitle.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.moduleService = ModuleServiceClient.instance;
    this.state = {
      courseId: '',
      module: {
        title: ''
      },
      modules: []
    };
  }

  componentDidMount() {
    this.setCourseId(this.props.courseId);
  }
  componentWillReceiveProps(newProps) {
    this.setCourseId(newProps.courseId);
    this.findAllModulesForCourse(newProps.courseId);
  }
  setModuleTitle(event) {
    this.setState({
      module: {
        title: event.target.value
      }
    });
  }

  setCourseId(courseId) {
    this.setState({courseId: courseId});
  }

  setModules(modules) {
    this.setState({modules: modules});
  }

  createModule() {
    this.moduleService.createModule(this.state.courseId, this.state.module).then(() => {
      this.findAllModulesForCourse(this.state.courseId);
    });
  }

  deleteModule(moduleId) {
    this.moduleService.deleteModule(moduleId).then(() => {
      this.findAllModulesForCourse(this.state.courseId)
    });
  }

  findAllModulesForCourse(courseId) {
    this.moduleService.findAllModulesForCourse(courseId).then((modules) => {
      this.setModules(modules);
    });
  }

  renderListOfModules() {
    let modules = this.state.modules.map((module) => {
      return <ModuleListItem courseId={this.state.courseId}module={module} key={module.id} delete={this.deleteModule}/>;
    });
    return modules;
  }

  render() {
    return (<Router>
      <div className="row">
        <div className="col-9">
          <h4>Modules courseId: {this.state.courseId}</h4>
          <input onChange={this.setModuleTitle} value={this.state.module.title} className="form-control" placeholder="New Module"/>
          <button className="btn btn-primary btn-block" onClick={this.createModule}>
            <i className="fa fa-plus"></i>
          </button>
          <ul className="list-group">
            {this.renderListOfModules()}
          </ul>
        </div>
        <div className="col-3">
          <Route path="/course/:courseId/module/:moduleId" component={ModuleEditor}/>
        </div>
      </div>
    </Router>);
  }
}

export default ModuleList;
