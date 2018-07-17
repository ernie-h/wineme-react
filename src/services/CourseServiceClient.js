let _singleton = Symbol();
const COURSE_API_URL = 'http://localhost:8080/api/course';
const COURSE_ID_API_URL = 'http://localhost:8080/api/course/CID';

class CourseServiceClient {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Cannot instantiate directly.');
  }
  static get instance() {
    if (!this[_singleton])
      this[_singleton] = new CourseServiceClient(_singleton);
    return this[_singleton];
  }

  findAllCourses() {
    return fetch(COURSE_API_URL)
      .then(function(response) {
        return response.json();
      });
  }

  createCourse(course) {
    return fetch(COURSE_API_URL, {
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(function(response) {
      return response.json();
    });
  }

  deleteCourse(courseId) {
    return fetch(COURSE_ID_API_URL.replace('CID', courseId), {
      method: 'delete'
    });
  }

  findCourseById(courseId) {
    return fetch(
        COURSE_ID_API_URL.replace('CID', courseId))
      .then(function(response) {
        return response.json();
      });
  }

  updateCourse(courseId, course) {
    return fetch(COURSE_ID_API_URL.replace('CID', courseId), {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}

export default CourseServiceClient;
