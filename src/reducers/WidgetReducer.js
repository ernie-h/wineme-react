import WidgetServiceClient from '../services/WidgetServiceClient';

let widgetService = WidgetServiceClient.instance;

export const WidgetReducer = (
  state = {
    widgets: [],
    preview: false,
    topicId: ''
  },
  action) => {
  let index;
  switch (action.type) {
    case 'DELETE_WIDGET':
      return {
        widgets: state.widgets.filter(
          widget => widget.id !== action.widgetId
        ),
        topicId: action.widget.topicId
      };
    case 'CREATE_WIDGET':
      return {
        widgets: [
          action.widget,
          ...state.widgets
        ],
        topicId: action.topicId
      };
    case 'UPDATE_WIDGET':
      return {
        widgets: state.widgets.map(widget => {
          if (widget.id === action.widget.id) {
            return action.widget;
          } else {
            return widget;
          }
        })
      };
    case 'SAVE_WIDGETS':
      return {
        widgets: action.widgets,
        topicId: action.topicId
      };
    case 'FIND_WIDGETS_FOR_TOPIC':
      return {
        widgets: action.widgets,
        topicId: action.topicId
      };
    case 'FIND_ALL_WIDGETS':
      state = widgetService.findAllWidgets();
      return {
        state
      };
    case 'MOVE_UP':
      index = action.widget.location;
      state.widgets.splice(index - 1, 0, state.widgets.splice(index, 1)[0]);
      return {
        widgets: state.widgets.splice(0)
      };
    case 'MOVE_DOWN':
      index = action.widget.location;
      state.widgets.splice(index + 1, 0, state.widgets.splice(index, 1)[0]);
      return {
        widgets: state.widgets.splice(0)
      };
      case 'UPDATE_LOCATION':
      state.widgets.map((widget) => {
        let index = state.widgets.indexOf(widget);
        if(widget.location != index)
        widget.location = index;
      });
        return {
          widgets: state.widgets
        };
    case 'PREVIEW_MODE':
      return {
        widgets: state.widgets,
        preview: !state.preview
      };

    default:
      return state;
  }
};
