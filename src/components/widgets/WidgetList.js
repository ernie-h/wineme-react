import React from 'react';
import {LinkWidget} from './LinkWidget';
import {HeadingWidget} from './HeadingWidget';
import {ListWidget} from './ListWidget';
import {YouTubeWidget} from './YouTubeWidget';
import {ParagraphWidget} from './ParagraphWidget';
import {ImageWidget} from './ImageWidget'

class WidgetList extends React.Component {
  constructor(props) {
    super(props);
    let widgetTitle;
    let className;
    // console.log('topicid ' + topicId);
    // //findAllWidgetsForTopic(topicId);
    // let widgetsForTopic = (topicId) => {
    //   findAllWidgetsForTopic(topicId);
    // }
    this.props.findAllWidgetsForTopic(this.props.topicId);

  }
  componentDidMount() {
    this.props.findAllWidgetsForTopic(this.props.topicId);

  }
  render() {
    return (<div className="bg-secondary rounded">
      <button className="btn btn-primary float-right"
        onClick={() => this.props.saveWidgets(this.props.widgets)
          .then(this.props.findAllWidgetsForTopic(this.props.topicId))}>
        Save</button>
      <h1>Widget List: ({this.props.widgets.length})</h1>

      <ul className="list-group text-dark">
        <li className="list-group-item">
          <h3>
            Add Widget:
          </h3>
          <div className="form-inline">
            <input ref={node => this.widgetTitle = node} className="form-control"/>
            <button className="btn btn-success float-right" onClick={() => {
                let widget = {
                  title: this.widgetTitle.value,
                  id: (new Date()).getTime(),
                  className: this.className.value,
                  // CAN MOVE THESE TO A SEPARATE CREATE FUNCTION THAT CREATES Widget BASED ON TYPE
                  ordered: false,
                  listItems: '',
                  src: ''
                };
                this.widgetTitle.value = '';
                this.props.createWidget(widget);
              }}>
              Add Widget
            </button>
          </div>
          <select ref={node => this.className = node} className="form-control">
            <option value="LINK">Link Widget</option>
            <option value="PARAGRAPH">Paragraph Widget</option>
            <option value="IMAGE">Image Widget</option>
            <option value="HEADING">HEADING</option>
            <option value="LIST">LIST</option>
            <option value="YOUTUBE">YOUTUBE</option>
          </select>
        </li>

        {
          this.props.widgets.map((widget, index) => <li className="list-group-item text-dark" key={index}>
            {widget.title}
            ({widget.id}) - {widget.className}
            <button className="float-right btn btn-danger" onClick={() => this.props.deleteWidget(widget.id)}>
              Delete
            </button>
            <button className="float-right btn btn-warning"> Down</button>
            <button onClick={() => this.props.up(widget.id)} className="float-right btn btn-warning"> Up</button>
            <div>
              {widget.className === 'YOUTUBE' && <YouTubeWidget widget={widget} updateWidget={this.props.updateWidget}/>}
              {widget.className === 'LIST' && <ListWidget widget={widget} updateWidget={this.props.updateWidget}/>}
              {widget.className === 'HEADING' && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget}/>}
              {widget.className === 'LINK' && <LinkWidget widget={widget} updateWidget={this.props.updateWidget}/>}
              {widget.className === 'PARAGRAPH' && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget}/>}
              {widget.className === 'IMAGE' && <ImageWidget widget={widget} updateWidget={this.props.updateWidget}/>}
            </div>
          </li>)
        }
      </ul>
    </div>);
  }
}

export default WidgetList;
