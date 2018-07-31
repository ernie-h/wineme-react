import React from 'react';

export const YouTubeWidget = ({widget, updateWidget, preview}) => {
  let className;
  let name;
  let src;
  return (
    preview
    ? widget.src && <iframe  width="560" height="315" src={`https://www.youtube.com/embed/${widget.src}`} frameBorder="0" allow="autoplay;
       encrypted-media" allowFullScreen="allowFullScreen"></iframe>
    : <div>
    <h2 className="mt-3">Youtube Widget</h2>
    <div className="form-inline">
      <h4>Widget Name:</h4>
      <h5 className="text-secondary ml-2 mt-1">{widget.name}</h5>
    </div>
      <p>Please paste Youtube Video Id here:
      </p>
      <input ref={node => src = node} id="URL" className='form-control' placeholder={widget.src} onChange={() => {
          widget.src = src.value;
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
      <h4 className="mt-2">Preview:</h4>
      {
        widget.src && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${widget.src}`} frameBorder="0" allow="autoplay;
       encrypted-media" allowFullScreen="allowFullScreen"></iframe>
      }
    </div>);
};
