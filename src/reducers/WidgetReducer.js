import WidgetServiceClient from '../services/WidgetServiceClient';

let widgetService = WidgetServiceClient.instance;

export const WidgetReducer = (
  state = {
    widgets: [],
    preview: false
  },
  action) => {
  let index;
  switch (action.type) {
    case 'DELETE_WIDGET':
      return {
        widgets: state.widgets.filter(
          widget => widget.id !== action.widgetId
        )
      };
    case 'CREATE_WIDGET':
      return {
        widgets: [
          action.widget,
          ...state.widgets
        ]
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
        widgets: action.widgets
      };
    case 'FIND_WIDGETS_FOR_TOPIC':
      return {
        widgets: action.widgets
      };
    case 'FIND_ALL_WIDGETS':
      state = widgetService.findAllWidgets();
      return {
        state
      };
    case 'MOVE_UP':
      index = state.widgets.indexOf(action.widget);
      state.widgets.splice(index - 1, 0, state.widgets.splice(index, 1)[0]);
      return {
        widgets: state.widgets.splice(0)
      };
    case 'MOVE_DOWN':
      index = state.widgets.indexOf(action.widget);
      state.widgets.splice(index + 1, 0, state.widgets.splice(index, 1)[0]);
      return {
        widgets: state.widgets.splice(0)
      };
    case 'PREVIEW_MODE':
    console.log(state.preview)
      return {
        widgets: state.widgets,
        preview: !state.preview
      };

    default:
      return state;
  }
};
