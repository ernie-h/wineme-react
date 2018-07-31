import React from 'react';

export const ListWidget = ({widget, updateWidget, preview}) => {
  let name;
  let className;
  let text;

  return (
    preview
    ? widget.ordered === 'UNORDERED'
      ? <ul>
        {
          widget.listItems.split('\n').map((item, index) => (<li key={index}>
            {item}
          </li>))
        }
      </ul>
      : <ol>
        {
          widget.listItems.split('\n').map((item, index) => (<li key={index}>
            {item}
          </li>))
        }
      </ol>
    : <div>
    <h2 className="mt-3">List Widget</h2>
    <div className="form-inline">
      <h4>Widget Name:</h4>
      <h5 className="text-secondary ml-2 mt-1">{widget.name}</h5>
    </div>
      <textarea ref={node => text = node} onChange={() => {
          widget.listItems = text.value;
          updateWidget(widget);
        }} className='form-control' value={widget.listItems}></textarea>

      <label className=" mt-2">
        <input className="mr-2"checked={widget.ordered === 'ORDERED'} type="checkbox" onClick={() => {
            widget.ordered = widget.ordered === 'ORDERED'
              ? 'UNORDERED'
              : 'ORDERED';
            updateWidget(widget);
          }}/>
        Ordered
      </label>
      <div className="row">
        <div className="col-6">
          <label className="mt-3">
            Widget Name:
          </label>
            <input ref={node => name = node} className="form-control" placeholder={widget.name} onChange={() => widget.name = name.value}/>
        </div>
        <div className="col-6">
          <label className="mt-3">
            Change Widget Type:
          </label>
            <select ref={node => this.className = node} className="form-control" onChange={() => {
                widget.className = this.className.value;
                updateWidget(widget);
              }}>
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
      </div>

      <h4>Preview:</h4>
      {
        widget.ordered === 'UNORDERED'
          ? <ul>
              {
                widget.listItems.split('\n').map((item, index) => (<li key={index}>
                  {item}
                </li>))
              }
            </ul>
          : <ol>
              {
                widget.listItems.split('\n').map((item, index) => (<li key={index}>
                  {item}
                </li>))
              }
            </ol>
      }
    </div>);
};
