import {connect} from 'react-redux';
import WidgetList from '../components/widgets/WidgetList';

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
  saveWidgets: () => dispatch({
    type: 'SAVE_WIDGETS',
  }),
  findAllWidgetsForTopic: (topicId) => dispatch({
    type: 'FIND_WIDGETS_FOR_TOPIC',
    topicId: topicId,
  })
});

const WidgetListContainer =
  connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer;
