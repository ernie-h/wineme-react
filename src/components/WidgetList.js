import React from 'react'
import {WidgetType1} from './WidgetType1'
import {WidgetType2} from './WidgetType2'
import {WidgetType3} from './WidgetType3'
import {HeadingWidget} from './HeadingWidget'
import {ListWidget} from './ListWidget'
import {YouTubeWidget} from './YouTubeWidget'


const WidgetList = ({widgets, saveWidgets, deleteWidget, createWidget, updateWidget}) =>
{
  let widgetTitle;
  let widgetType;
  return(
    <div>
      <button className="btn btn-primary float-right"
        onClick={saveWidgets}> Save</button>
      <h1>Widget List ({widgets.length})</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <input ref={node => widgetTitle = node} className="form-control"/>
          <button onClick={() => {
            let widget = {
              title: widgetTitle.value,
              id: (new Date()).getTime(),
              widgetType: widgetType.value
            };
            widgetTitle.value = '';
            createWidget(widget);
          }} className="btn btn-success">Add Widget
          </button>
          <select ref={node => widgetType = node} className="form-control">
            <option value="WT1">Widget Type 1</option>
            <option value="WT2">Widget Type 2</option>
            <option value="WT3">Widget Type 3</option>
            <option value="HEADING">HEADING</option>
            <option value="LIST"> LIST</option>
            <option value="YOUTUBE"> YOUTUBE</option>
          </select>
        </li>
        {widgets.map((widget, index) =>
          <li className="list-group-item text-dark"
              key={index}>
            {widget.title} ({widget.id}) - {widget.widgetType}
            <button className="float-right btn btn-danger"
                    onClick={() => deleteWidget(widget.id)}>
              Delete
            </button>
            <div>
              {widget.widgetType === 'YOUTUBE' && <YouTubeWidget widget={widget} updateWidget={updateWidget}/>}
              {widget.widgetType === 'LIST' && <ListWidget widget={widget} updateWidget={updateWidget}/>}
              {widget.widgetType === 'HEADING' && <HeadingWidget widget={widget} updateWidget={updateWidget}/>}
              {widget.widgetType === 'WT1' && <WidgetType1 widget={widget} updateWidget={updateWidget}/>}
              {widget.widgetType === 'WT2' && <WidgetType2 widget={widget} updateWidget={updateWidget}/>}
              {widget.widgetType === 'WT3' && <WidgetType3 widget={widget} updateWidget={updateWidget}/>}
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default WidgetList;
