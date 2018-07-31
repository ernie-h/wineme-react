import React from 'react';

export const YouTubeWidget = ({widget, updateWidget, preview}) => {
  let name;
  let src;
  return (
    preview
    ? widget.src && <iframe  width="560" height="315" src={`https://www.youtube.com/embed/${widget.src}`} frameborder="0" allow="autoplay;
       encrypted-media" allowfullscreen="allowfullscreen"></iframe>
    : <div>
    <h2 className="mt-3">Youtube Widget</h2>
    <div className="form-inline">
      <h4>Widget Name:</h4>
      <h5 className="text-secondary ml-2 mt-1">{widget.name}</h5>
    </div>
      <p>Please paste Youtube video Id here:
      </p>
      <input ref={node => src = node} id="URL" className='form-control' placeholder="Q2uYTSiXJEQ" onChange={() => {
          widget.src = src.value;
          updateWidget(widget);
        }}/>
        <label className="mt-3">
          Widget Name:
          <input ref={node => name = node} className="form-control" placeholder={widget.name} onChange={() => widget.name = name.value}/>
        </label>
      <h4 className="mt-2">Preview:</h4>
      {
        widget.src && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${widget.src}`} frameborder="0" allow="autoplay;
       encrypted-media" allowfullscreen="allowfullscreen"></iframe>
      }
    </div>);
};
