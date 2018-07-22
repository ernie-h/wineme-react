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
    this.updateModule = this.updateModule.bind(this);
    this.editClickHandler = this.editClickHandler.bind(this);
    this.isEditModule = this.isEditModule.bind(this);
    this.setModuleTitle = this.setModuleTitle.bind(this);
    this.setCourseId = this.setCourseId.bind(this);
    this.moduleService = ModuleServiceClient.instance;
    this.state = {
      courseId: '',
      module: {
        title: ''
      },
      modules: [],
      editClicked: false,
      editModuleId: ''
    };
  }

  componentDidMount() {
    this.setCourseId(this.props.match.params.courseId);
    this.findAllModulesForCourse(this.props.match.params.courseId);
  }

  componentWillReceiveProps(newProps) {
    this.setCourseId(newProps.match.params.courseId);
    this.findAllModulesForCourse(newProps.match.params.courseId);
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
    this.setState({
      module: {
        title: ''
      }
    });
    this.moduleService.createModule(this.state.courseId, this.state.module).then(() => {
      this.findAllModulesForCourse(this.state.courseId);
    });
  }

  deleteModule(moduleId) {
    this.moduleService.deleteModule(moduleId).then(() => {
      this.findAllModulesForCourse(this.state.courseId);
    });
  }

  findAllModulesForCourse(courseId) {
    this.moduleService.findAllModulesForCourse(courseId).then((modules) => {
      this.setModules(modules);
    });
  }
  editClickHandler(moduleId) {
    this.setState({editModuleId: moduleId});
  }

  isEditModule(moduleId) {
    return this.state.editModuleId === moduleId;
  }

  updateModule(moduleId, module) {
    this.moduleService.updateModule(moduleId, module).then(this.setState({editModuleId: ''})).then(() => {
      this.findAllModulesForCourse(this.state.courseId);
    });
  }

  renderListOfModules() {
    let modules = this.state.modules.map((module) => {
      return <ModuleListItem courseId={this.state.courseId} module={module}
        key={module.id} delete={this.deleteModule} editClick={this.editClickHandler}
        isEditModule={this.isEditModule(module.id)} updateModule={this.updateModule}/>;
    });
    return modules;
  }

  render() {
    return (<div className="pb-5 ml-1 rounded">
      <div className="row pt-3 pb-4">
        <div className="col-9">
          <input onChange={this.setModuleTitle} value={this.state.module.title}
            className="form-control bg-light text-dark" placeholder="New Module"/>
        </div>
        <div className="col-3">
          <button className="btn btn-secondary btn-block" onClick={this.createModule}>
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div>
      <ul className="list-group">
        {this.renderListOfModules()}
      </ul>
    </div>);
  }
}

export default ModuleList;
