import React from 'react'

export const LinkWidget = ({widget, updateWidget}) => {
  let src;
  let text;
  return(
    <div>
      <h3>Link </h3>
        <h4 > {widget.name}</h4>
        <p>Please enter the link text here: </p>
        <input ref={node => text = node}
          className='form-control'
          placeholder="Link here"
          onChange={() => {
            widget.text = text.value;
            updateWidget(widget);
          }}/>
        <p>Please enter a valid link here: </p>
        <input ref={node => src = node}
          id="URL"
          className='form-control'
          placeholder="www.facebook.com"
          onChange={() => {
            widget.src = src.value;
            updateWidget(widget);
          }}/>


      <h4> Preview: </h4>
      <a href={widget.src}>
        {widget.text}
      </a>
    </div>
  );
};
