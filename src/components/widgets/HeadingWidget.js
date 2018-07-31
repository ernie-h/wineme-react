import React from 'react';

export const HeadingWidget = ({widget, updateWidget, preview}) => {
  let name;
  let className;
  let text;
  let size;
  return (
    preview
    ? <div>
      {widget.size === 1 && <h1>{widget.text}</h1>}
      {widget.size === 2 && <h2>{widget.text}</h2>}
      {widget.size === 3 && <h3>{widget.text}</h3>}
      {widget.size === 4 && <h4>{widget.text}</h4>}
    </div>
    : <div className="editor">
      <h2 className="mt-3">Heading Widget</h2>
      <div className="form-inline">
        <h4>Widget Name:</h4>
        <h5 className="text-secondary ml-2 mt-1">{widget.name}</h5>
      </div>
      <div className='row'>
        <div className='col-6'>
          <label className="mt-3">Heading text</label>
          <input onChange={() => {
              widget.text = text.value;
              updateWidget(widget);
            }} ref={node => text = node} className="form-control" placeholder="Heading text"/>
        </div>
        <div className="col-6">
          <label className="mt-3">Heading Size</label>
          <select onChange={() => {
              widget.size = parseInt(size.value);
              updateWidget(widget);
            }} ref={node => size = node} className="form-control">
            <option value="" selected="selected" disabled="disabled" hidden="hidden">
              Choose Heading size</option>
            <option className="form-control" value="1">Heading 1</option>
            <option className="form-control" value="2">Heading 2</option>
            <option className="form-control" value="3">Heading 3</option>
            <option className="form-control" value="4">Heading 4</option>
          </select>
        </div>
      </div>
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

      <h4 className="mt-2">Preview:</h4>
      {widget.size === 1 && <h1>{widget.text}</h1>}
      {widget.size === 2 && <h2>{widget.text}</h2>}
      {widget.size === 3 && <h3>{widget.text}</h3>}
      {widget.size === 4 && <h4>{widget.text}</h4>}
    </div>);
};
