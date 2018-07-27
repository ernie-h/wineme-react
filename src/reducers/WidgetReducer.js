import WidgetServiceClient from '../services/WidgetServiceClient';

let widgetService = WidgetServiceClient.instance;

export const WidgetReducer = (
  state = {
    widgets:[]
  },
  action) => {
  // let fromIndex;
  // let toIndex;
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
      //   case 'FIND_ALL_WIDGETS':
      //     state = widgetService.findAllWidgets();
      //     return {
      //       state
      //     };
      //   case 'UP':
      //     console.log(action.widgetId)
      //     fromIndex = state.widgets.findIndex((widget) => widget.id);
      //     toIndex = fromIndex--;
      //     state.widgets.splice(toIndex, 0, state.widgets.splice);
      //     let widgets = Object.assign(state.widgets)
      //
      //     return {
      //       widgets: widgets
      //     };
      //   case 'DOWN':
      //     console.log(action.widgetId)
      //     return {
      //       state
      //     };
    default:
      return state;
  }
};
