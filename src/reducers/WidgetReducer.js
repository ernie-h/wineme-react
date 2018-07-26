import WidgetServiceClient from '../services/WidgetServiceClient'

let widgetService = WidgetServiceClient.instance;

let initialState = {
  widgets: [{
      title: 'Image Widget',
      id: 6,
      widget_type: 'IMAGE',
      width: '550',
      height: '315',
      src: '',
      text: '',
    },
    {
      title: 'Paragraph Widget',
      id: 5,
      widget_type: 'PARAGRAPH',
      text: '',
    },
    {
      title: 'Link Widget',
      id: 4,
      widget_type: 'LINK',
      src: '',
      text: '',
    },
    {
      title: 'Youtube Widget',
      id: 3,
      widget_type: 'YOUTUBE',
      src: ''
    },
    {
      title: 'List Widget',
      id: 2,
      widget_type: 'LIST',
      ordered: false,
      listItems: 'item1 \n item2 \n item3 \n'
    },
    {
      title: 'Heading Widget',
      id: 11,
      widget_type: 'HEADING'
    },
  ]
};

export const WidgetReducer = (
  state = initialState,
  action) => {

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
      console.log("Save widgets hit");
      widgetService.saveAllWidgets(state.widgets);
      console.log("Save widgets ran");
      console.log(state);
      return {
        state
      };
    case 'FIND_WIDGETS_FOR_TOPIC':
      state = widgetService.findAllWidgetsForTopic(action.topicId);
      console.log("state " + state)
      return {
        state
      };
    default:
      return state;
  }
};
