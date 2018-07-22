let _singleton = Symbol();
const TOPIC_LESSON_MODULE_COURSE_API_URL = 'http://localhost:8080/api/course/CID/module/MID/lesson/LID';
const TOPIC_ID_API_URL = 'http://localhost:8080/api/topic/TID';
//for find all topics
// const LESSON_API_URL = 'https://eh-cs4550-java-server.herokuapp.com/api/lesson';

export default class TopicService {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Singleton!!!');
  }
  static get instance() {
    if (!this[_singleton])
      this[_singleton] = new TopicService(_singleton);
    return this[_singleton];
  }

  findAllTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch(
        TOPIC_LESSON_MODULE_COURSE_API_URL
        .replace('CID', courseId).replace('MID', moduleId).replace('LID', lessonId))
      .then(function(response) {
        return response.json();
      });
  }

  createTopic(courseId, moduleId, lessonId, topic) {
    return fetch(TOPIC_LESSON_MODULE_COURSE_API_URL
      .replace('CID', courseId).replace('MID', moduleId).reaplace('LID', lessonId), {
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
    return fetch(TOPIC_ID_API_URL.replace('TID', topicId), {
      method: 'delete'
    });
  }

  updateTopic(topicId, topic) {
    return fetch(TOPIC_ID_API_URL.replace('TID', topicId), {
      method: 'PUT',
      body: JSON.stringify(topic),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
