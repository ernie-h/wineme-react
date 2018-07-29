import React from 'react';
import Toggle from 'react-bootstrap-toggle';
import {LinkWidget} from './LinkWidget';
import {HeadingWidget} from './HeadingWidget';
import {ListWidget} from './ListWidget';
import {YouTubeWidget} from './YouTubeWidget';
import {ParagraphWidget} from './ParagraphWidget';
import {ImageWidget} from './ImageWidget'

class WidgetList extends React.Component {
  constructor(props) {
    super(props);
    let name;
    let className;
    this.props.findAllWidgetsForTopic(this.props.topicId);
  }

  render() {
    return (<div className="rounded mr-4">
      <h2 className="display-4 ml-2 mt-2">Widgets:</h2>

      <ul className="list-group text-dark">
        <li className="list-group-item">
          <div className="row mb-3">
            <div className="col">
              <h2 className="disply-4">
                Add Widget:
              </h2>
            </div>
            <div className="col">
              <div className="form-inline float-right">
                <p className="mt-1">
                  Preview</p>
                {
                  this.props.preview
                    ? <i className="fa fa-toggle-on mb-2 ml-1" onClick={() => this.props.previewMode()}/>
                    : <i className="fa fa-toggle-off mb-2 ml-1" onClick={() => this.props.previewMode()}/>
                }

                <button className="btn btn-primary ml-4 mr-2 mb-2" onClick={() => this.props.saveWidgets(this.props.widgets, this.props.topicId)}>
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="form-inline">
            <input ref={node => this.name = node} className="form-control" placeholder="Widget name"/>
            <button className="btn btn-success float-right ml-3" onClick={() => {
                if (this.name.value === '') {
                  alert('Please give a name to your widget.');
                } else if (this.className.value === '') {
                  alert('Please select a widget type.');
                } else {
                  this.props.createWidget(this.props.topicId, this.name.value, this.className.value, this.props.widgets.length);
                  this.name.value = '';
                  this.className.value = '';
                }
              }}>
              <i className="fa fa-plus"/>
            </button>
          </div>
          <select ref={node => this.className = node} className="form-control mt-3">
            <option value="" selected="selected" disabled="disabled" hidden="hidden">
              Choose widget type</option>
            <option value="LINK">Link
            </option>
            <option value="PARAGRAPH">Paragraph
            </option>
            <option value="IMAGE">Image
            </option>
            <option value="HEADING">Heading
            </option>
            <option value="LIST">List
            </option>
            <option value="YOUTUBE">Youtube</option>
          </select>
        </li>
        {
          this.props.widgets.map((widget, index) => <li className="list-group-item text-dark" key={index}>
          {!this.props.preview &&
            <div>
            <button className="float-right btn-sm btn-danger ml-2" onClick={() => this.props.deleteWidget(widget.id)}>
              <i className="fa fa-times-circle"/>
            </button>
            <button onClick={() => this.props.moveDown(widget)} className="float-right btn-sm btn-warning ml-2">
              <i className="fa fa-arrow-down"/>
            </button>
            <button onClick={() => this.props.moveUp(widget)} className="float-right btn-sm btn-warning ml-2">
              <i className="fa fa-arrow-up"/>
            </button>
          </div>
          }

            {widget.className === 'YOUTUBE' && <YouTubeWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
            {widget.className === 'LIST' && <ListWidget widget={widget} updateWidget={this.props.updateWidget}preview={this.props.preview}/>}
            {widget.className === 'HEADING' && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget}preview={this.props.preview}/>}
            {widget.className === 'LINK' && <LinkWidget widget={widget} updateWidget={this.props.updateWidget}preview={this.props.preview}/>}
            {widget.className === 'PARAGRAPH' && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget}preview={this.props.preview}/>}
            {widget.className === 'IMAGE' && <ImageWidget widget={widget} updateWidget={this.props.updateWidget}preview={this.props.preview}/>}
          </li>)
        }
      </ul>
    </div>);
  }
}

export default WidgetList;
