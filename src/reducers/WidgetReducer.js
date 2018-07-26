let initialState = {
  widgets: [
    {
      title: 'Image Widget',
      id: 6,
      widgetType: 'IMAGE',
      width: '550',
      height: '315',
      src: '',
      text: '',
    },
    {
      title: 'Paragraph Widget',
      id: 5,
      widgetType: 'PARAGRAPH',
      text: '',
    },
    {
      title: 'Link Widget',
      id: 4,
      widgetType: 'LINK',
      src: '',
      text: '',
    },
    {
      title: 'Youtube Widget',
      id: 3,
      widgetType: 'YOUTUBE',
      src: ''
    },
    {
      title: 'List Widget',
      id: 2,
      widgetType: 'LIST',
      ordered: false,
      listItems: 'item1 \n item2 \n item3 \n'
    },
    {
      title: 'Heading Widget',
      id: 1,
      widgetType: 'HEADING'
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
      fetch('http://localhost:8080/api/widget/save', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(state.widgets)
      });
      return {
        state
      };
    default:
      return state;
  }
};
