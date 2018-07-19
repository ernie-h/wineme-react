let _singleton = Symbol();
const MODULE_COURSE_API_URL = 'http://localhost:8080/api/course/CID/module';
const MODULE_ID_API_URL = 'http://localhost:8080/api/module/MID';
//for find all modules
const MODULE_API_URL = 'http://localhost:8080/api/module';

export default class ModuleService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Singleton!!!');
  }
  static get instance() {
    if (!this[_singleton])
      this[_singleton] = new ModuleService(_singleton);
    return this[_singleton];
  }

  findAllModulesForCourse(courseId) {
    return fetch(
        MODULE_COURSE_API_URL
        .replace('CID', courseId))
      .then(function(response) {
        return response.json();
      });
  }

  findModuleById(moduleId) {
    return fetch(
        MODULE_ID_API_URL.replace('MID', moduleId))
      .then(function(response) {
        return response.json();
      });
  }

  createModule(courseId, module) {
    return fetch(MODULE_COURSE_API_URL.replace('CID', courseId), {
      body: JSON.stringify(module),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(function(response) {
      return response.json();
    });
  }

  deleteModule(moduleId) {
    return fetch(MODULE_ID_API_URL.replace('MID', moduleId), {
      method: 'delete'
    });
  }

  updateModule(moduleId, module) {
    return fetch(MODULE_ID_API_URL.replace('MID', moduleId), {
      method: 'PUT',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
