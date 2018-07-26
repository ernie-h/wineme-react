import {connect} from 'react-redux';
import WidgetList from '../components/widgets/WidgetList';

const stateToPropertyMapper = state => ({
  widgets: state.widgets
});

const dispatcherToPropertyMapper = dispatch => ({
  deleteWidget: widgetId => dispatch({
    type: 'DELETE_WIDGET',
    widgetId: widgetId
    }),
  createWidget: widget => dispatch({
    type: 'CREATE_WIDGET',
    widget: widget
  }),
  updateWidget: widget => dispatch({
    type: 'UPDATE_WIDGET',
    widget: widget
  }),
  saveWidgets: () => dispatch({
    type: 'SAVE_WIDGETS',
  }),
});

const WidgetListContainer =
  connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer;
