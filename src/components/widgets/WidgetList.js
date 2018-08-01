import React from 'react';

import {LinkWidget} from './LinkWidget';
import {HeadingWidget} from './HeadingWidget';
import {ListWidget} from './ListWidget';
import {YouTubeWidget} from './YouTubeWidget';
import {ParagraphWidget} from './ParagraphWidget';
import {ImageWidget} from './ImageWidget'

//google API WIP
const imageSearch = require('image-search-google');
const client = new imageSearch('005182741105951600839:fpnjb6o384w', 'AIzaSyDdBtISUIc7WK7B2wpmFgXBvKMBluUoNJc');
var options = {page:1};

class WidgetList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.findAllWidgetsForTopic(this.props.match.params.topicId);
    this.props.widgets.sort((a, b) => a.location - b.location);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.topicId !== this.props.match.params.topicId)
      this.props.findAllWidgetsForTopic(newProps.match.params.topicId);
    newProps.widgets.sort((a, b) => a.location - b.location);

  }
  sortLocationOrder(a, b) {
    return a.location - b.location;
  }

  moveHandler(widget, isUp) {
    {
      isUp
        ? this.props.moveUp(widget)
        : this.props.moveDown(widget);
    }
    this.props.updateLocation(this.props.widgets);
  }
  //google api WIP
  search() {
    client.search('obama', options)
        .then(images => {console.log(images);
            /*
            [{
                'url': item.link,
                'thumbnail':item.image.thumbnailLink,
                'snippet':item.title,
                'context': item.image.contextLink
            }]
             */
        })
        .catch(error => console.log(error));
  }

  render() {
    return (<div className="rounded mr-4">
      <h2 className="display-4 ml-2 mt-2">Widgets:</h2>

      <ul className="list-group text-dark">
        <li className="list-group-item bg-light">
          <div className="row mb-3">
            <div className="col">
              <h2 className="disply-4">
                Add Widget:
              </h2>
            </div>
            <div className="col">
              <div className="form-inline float-right">
                <p className="text-dark mt-2">
                  Preview</p>
                {
                  this.props.preview
                    ? <i className="fa fa-toggle-on mb-2 ml-1 text-dark" onClick={() => this.props.previewMode()}/>
                    : <i className="fa fa-toggle-off mb-2 ml-1 text-secondary" onClick={() => this.props.previewMode()}/>
                }

                <button className="btn btn-primary pl-3 pr-3 ml-4 mr-2 mb-2" onClick={() => this.props.saveWidgets(this.props.widgets, this.props.match.params.topicId).then(alert('Successfuly saved.'))}>
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <select ref={node => this.createWidgetClassName = node} className="form-control">
                <option value="" selected="selected" disabled="disabled" hidden="hidden">
                  Choose widget type</option>
                <option value="HEADING">Heading</option>
                <option value="PARAGRAPH">Paragraph</option>
                <option value="LIST">List</option>
                <option value="LINK">Link</option>
                <option value="IMAGE">Image</option>
                <option value="YOUTUBE">Youtube</option>
              </select>
            </div>
            <div className='col-6'>
              <div className="form-inline float-right mr-2">
                <input ref={node => this.name = node} className="form-control  pr-5" placeholder="Widget name"/>
                <button className="btn btn-success float-right ml-3" onClick={() => {
                    if (this.name.value === '') {
                      alert('Please give a name to your widget.');
                    } else if (this.createWidgetClassName.value === '') {
                      alert('Please select a widget type.');
                    } else {
                      this.props.createWidget(this.props.match.params.topicId, this.name.value, this.createWidgetClassName.value, this.props.widgets.length);
                      this.name.value = '';
                      this.createWidgetClassName.value = '';
                    }
                  }}>
                  <i className="fa fa-plus pl-3 pr-3"/>
                </button>
              </div>
            </div>
          </div>
        </li>
        {
          this.props.widgets.map((widget, index) => <li className="list-group-item bg-light text-dark" key={index}>
            {
              !this.props.preview && <div className="row form-inline float-right">
                  <button className="float-right btn-sm btn-danger ml-2" onClick={() => this.props.deleteWidget(widget.id)}>
                    <i className="fa fa-times-circle"/>
                  </button>
                  <button onClick={() => this.moveHandler(widget, false)} className="float-right btn-sm btn-warning ml-2">
                    <i className="fa fa-arrow-down"/>
                  </button>
                  <div className="mr-4">
                    <button onClick={() => this.moveHandler(widget, true)} className="float-right btn-sm btn-warning ml-2">
                      <i className="fa fa-arrow-up"/>
                    </button>
                  </div>
                </div>
            }
            {widget.className === 'YOUTUBE' && <YouTubeWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
            {widget.className === 'LIST' && <ListWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
            {widget.className === 'HEADING' && <HeadingWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
            {widget.className === 'LINK' && <LinkWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
            {widget.className === 'PARAGRAPH' && <ParagraphWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
            {widget.className === 'IMAGE' && <ImageWidget widget={widget} updateWidget={this.props.updateWidget} preview={this.props.preview}/>}
          </li>)
        }
      </ul>
    </div>);
  }
}

export default WidgetList;
