let initialState = {
  widgets: [{
      title: 'Youtube Widget',
      id: 3,
      widgetType: 'YOUTUBE',
      src: ''
    },
    {
      title: 'List Widget 1',
      id: 2,
      widgetType: 'LIST',
      ordered: false,
      listItems: 'item1 \n item2 \n item3 \n'
    },
    {
      title: 'Heading Widget 1',
      id: 1,
      widgetType: 'HEADING'
    },
    {
      title: 'Widget 1',
      id: 123,
      widgetType: 'WT1'
    },
    {
      title: 'Widget 2',
      id: 234,
      widgetType: 'WT2'
    },
    {
      title: 'Widget 3',
      id: 345,
      widgetType: 'WT3'
    },
    {
      title: 'Widget 4',
      id: 456,
      widgetType: 'WT1'
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
