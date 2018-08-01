let _singleton = Symbol();
const WIDGET_TOPIC_API_URL ='http://localhost:8080/api/topic/TID/widget';
const WIDGET_ID_API_URL = 'http://localhost:8080/api/widget/WID';
const WIDGET_API_URL = 'http://localhost:8080/api/widget';
const WIDGET_SAVE_URL = 'http://localhost:8080/api/widget/save';
//for find all topics
// const LESSON_API_URL = 'https://eh-cs4550-java-server.herokuapp.com/api/lesson';

export default class WidgetServiceClient {
  constructor(singletonToken) {
    if (_singleton !== singletonToken)
      throw new Error('Singleton!!!');
  }
  static get instance() {
    if (!this[_singleton])
      this[_singleton] = new WidgetServiceClient(_singleton);
    return this[_singleton];
  }
  findAllWidgets() {
    return fetch(WIDGET_API_URL)
      .then(function(response) {
        return response.json();
      });
  }
  
  findWidgetById(widgetId) {
    return fetch(
        WIDGET_ID_API_URL.replace('WID', widgetId))
      .then(function(response) {
        return response.json();
      });
  }

  findAllWidgetsForTopic(topicId) {
    return fetch(WIDGET_TOPIC_API_URL
        .replace('TID', topicId))
      .then(function(response) {
        return response.json();
      });
  }
  saveAllWidgets(widgets) {
    return fetch(WIDGET_SAVE_URL,
      {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(widgets)
    })
    .then((response) => response.json());
  }

  createWidget(topicId, widget) {
    return fetch(WIDGET_TOPIC_API_URL.replace('TID', topicId), {
        body: JSON.stringify(widget),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(function(response) {
      return response.json();
    });
  }

  deleteWidget(widgetId) {
    return fetch(WIDGET_ID_API_URL.replace('WID', widgetId), {
      method: 'DELETE'
    });
  }

  updateWidget(widgetId, widget) {
    return fetch(WIDGET_ID_API_URL.replace('WID', widgetId), {
      method: 'PUT',
      body: JSON.stringify(widget),
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
