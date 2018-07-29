import React from 'react';

export const YouTubeWidget = ({widget, updateWidget, preview}) => {
  let src;
  return (
    preview
    ? widget.src && <iframe className="form-control" width="560" height="315" src={`https://www.youtube.com/embed/${widget.src}`} frameborder="0" allow="autoplay;
       encrypted-media" allowfullscreen="allowfullscreen"></iframe>
    : <div>
      <h3>YouTube</h3>
      <h4 >
        {widget.name}</h4>
      <p>Please paste Youtube video Id here:
      </p>
      <input ref={node => src = node} id="URL" className='form-control' placeholder="Q2uYTSiXJEQ" onChange={() => {
          widget.src = src.value;
          updateWidget(widget);
        }}/>

      <h4>Preview
      </h4>
      {
        widget.src && <iframe className="form-control" width="560" height="315" src={`https://www.youtube.com/embed/${widget.src}`} frameborder="0" allow="autoplay;
       encrypted-media" allowfullscreen="allowfullscreen"></iframe>
      }
    </div>);
};
