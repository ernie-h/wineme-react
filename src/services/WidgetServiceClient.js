let _singleton = Symbol();
const WIDGET_TOPIC_LESSON_MODULE_COURSE_API_URL =
'http://localhost:8080/api/course/CID/module/MID/lesson/LID/topic/TID/widget';
const WIDGET_ID_API_URL = 'http://localhost:8080/api/widget/WID';
//for find all topics
// const LESSON_API_URL = 'https://eh-cs4550-java-server.herokuapp.com/api/lesson';

export default class WidgetService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Singleton!!!');
  }
  static get instance() {
    if (!this[_singleton])
      this[_singleton] = new WidgetService(_singleton);
    return this[_singleton];
  }

  findAllTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch(WIDGET_TOPIC_LESSON_MODULE_COURSE_API_URL
        .replace('CID', courseId)
        .replace('MID', moduleId)
        .replace('LID', lessonId))
      .then(function(response) {
        return response.json();
      });
  }

  createTopic(courseId, moduleId, lessonId, topic) {
    return fetch(WIDGET_TOPIC_LESSON_MODULE_COURSE_API_URL
      .replace('CID', courseId).replace('MID', moduleId).replace('LID', lessonId), {
        body: JSON.stringify(topic),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(function(response) {
      return response.json();
    });
  }

  deleteTopic(topicId) {
    return fetch(WIDGET_ID_API_URL.replace('TID', topicId), {
      method: 'delete'
    });
  }

  updateTopic(topicId, topic) {
    return fetch(WIDGET_ID_API_URL.replace('TID', topicId), {
      method: 'PUT',
      body: JSON.stringify(topic),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
