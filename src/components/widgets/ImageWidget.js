import React from 'react';
//Make width and height dynamic
export const ImageWidget = ({widget, updateWidget, preview}) => {
  let name;
  let className;
  let src;
  let text;
  return (
    preview
    ? <div>
      {widget.src && <img width="560" height="315" src={widget.src}/>}
      <br/> {widget.text}
    </div>
    : <div>
      <h2 className="mt-3">Image Widget</h2>
      <div className="form-inline">
        <h4>Widget Name:</h4>
        <h5 className="text-secondary ml-2 mt-1">{widget.name}</h5>
      </div>
      <p className="mt-4">Please paste Image link here:</p>
      <input ref={node => src = node} id="URL" className='form-control mb-2' placeholder="www.../img" onChange={() => {
          widget.src = src.value;
          updateWidget(widget);
        }}/>
      <p>Please enter image caption here:
      </p>
      <input ref={node => text = node} className='form-control mb-2' placeholder="Link here" onChange={() => {
          widget.text = text.value;
          updateWidget(widget);
        }}/>
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
      <h4 className="mb-2">Preview: </h4>
      <span className="align-baseline">
        {widget.src && <img width="560" height="315" src={widget.src}/>}
        <br/> {widget.text}
      </span>
    </div>);
};
