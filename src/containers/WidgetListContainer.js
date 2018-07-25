import {connect} from 'react-redux';
import WidgetList from '../components/WidgetList';

const stateToPropertyMapper = state => ({
  widgets: state.widgets
});

const dispatcherToPropertyMapper = dispatch => ({
  deleteWidget: wid => dispatch({
    type: 'DELETE_WIDGET',
    widgetId: wid
  }),
  createWidget: w => dispatch({
    type: 'CREATE_WIDGET',
    widget: w
  }),
  updateWidget: w => dispatch({
    type: 'UPDATE_WIDGET',
    widget: w
  }),
  saveWidgets: () => dispatch({
    type: 'SAVE_WIDGETS',
  }),
});

const WidgetListContainer =
  connect(stateToPropertyMapper,dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer;
