import React from 'react';

export const YouTubeWidget = ({widget, updateWidget}) => {
  let src;

  return( <div>
    <h3>YouTubeWidget</h3>
    <input ref={node => src = node}
      id="URL"
      className='form-control'
      onChange={() => {
        widget.src = src.value;
        updateWidget(widget);
      }}/>

    <h4>Preview </h4>
    {widget.src}
    <iframe width="560" height="315"
      src={`https://www.youtube.com/embed/${widget.src}`}
       frameborder="0" allow="autoplay;
       encrypted-media" allowfullscreen></iframe>
   </div>);
};
