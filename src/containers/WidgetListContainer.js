import {connect} from 'react-redux';
import WidgetList from '../components/widgets/WidgetList';
import WidgetServiceClient from '../services/WidgetServiceClient';

let widgetService = WidgetServiceClient.instance;


const stateToPropertyMapper = (state, ownProps) => ({
  widgets: state.widgets,
  topicId: ownProps.match.params.topicId,
});

const dispatcherToPropertyMapper = dispatch => ({
  deleteWidget: widgetId => dispatch({
    type: 'DELETE_WIDGET',
    widgetId: widgetId
    }),
  createWidget: (widget) => dispatch({
    type: 'CREATE_WIDGET',
    widget: widget
  }),
  updateWidget: (widget) => dispatch({
    type: 'UPDATE_WIDGET',
    widget: widget
  }),
  saveWidgets: (widgets) =>
  widgetService.saveAllWidgets(widgets)
  .then((widgets) => dispatch({
    type: 'SAVE_WIDGETS',
    widgets: widgets
  })),
  findAllWidgetsForTopic: (topicId) =>
  widgetService.findAllWidgetsForTopic(topicId)
  .then((widgets) => dispatch({
    type: 'FIND_WIDGETS_FOR_TOPIC',
    widgets: widgets
  })),

  // loadAllWidgets: () => dispatch({
  //   fetch('http://localhost:8080/api/widget')
  //   .then(response => response.json())
  //   .then(widgets => dispatch({
  //     type: 'FIND_ALL_WIDGETS',
  //     widgets: widgets
  //   }) )
  // }),

  // up: (widgetId) => dispatch({
  //   type: 'UP',
  //   widgetId: widgetId,
  // }),
  // down: (widgetId) => dispatch({
  //   type: 'DOWN',
  //   widgetId: widgetId,
  // }),
});

const WidgetListContainer =
  connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer;
