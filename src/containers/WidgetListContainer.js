import {
  connect
} from 'react-redux';
import WidgetList from '../components/widgets/WidgetList';
import WidgetServiceClient from '../services/WidgetServiceClient';

let widgetService = WidgetServiceClient.instance;


const stateToPropertyMapper = (state, ownProps) => ({
  widgets: state.widgets,
  topicId: ownProps.match.params.topicId,
  preview: state.preview
});

const dispatcherToPropertyMapper = dispatch => ({
  deleteWidget: (widgetId) =>
  widgetService.deleteWidget(widgetId)
  .then(dispatch({
      type: 'DELETE_WIDGET',
      widgetId: widgetId
    }))
,
  createWidget: (topicId, name, className, widgetsLength) =>
    widgetService.createWidget(topicId, {
      topicId: topicId,
      name: name,
      className: className,
      listItems: '',
      ordered: '',
      location: widgetsLength + 1,
    })
    .then((widget) =>
      dispatch({
        type: 'CREATE_WIDGET',
        widget: widget
      })),
  updateWidget: (widget) => dispatch({
    type: 'UPDATE_WIDGET',
    widget: widget
  }),
  saveWidgets: (widgets, topicId) =>
    widgetService.saveAllWidgets(widgets, topicId)
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
  moveUp: (widget) => dispatch({
    type: 'MOVE_UP',
    widget: widget,
  }),
  moveDown: (widget) => dispatch({
    type: 'MOVE_DOWN',
    widget: widget,
  }),
  previewMode: () => dispatch({
    type: 'PREVIEW_MODE',
  })
  ,
});

const WidgetListContainer =
  connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer;
