import React from 'react';

export const ImageWidget = ({widget, updateWidget}) => {
  let src;
  let text;
  return (<div>
    <h3>Image Widget</h3>
    <p>Please paste Image link here:
    </p>
    <input ref={node => src = node} id="URL" className='form-control' placeholder="www.../img" onChange={() => {
        widget.src = src.value;
        updateWidget(widget);
      }}/>
    <p>Please enter the link text here:
    </p>
    <input ref={node => text = node} className='form-control' placeholder="Link here" onChange={() => {
        widget.text = text.value;
        updateWidget(widget);
      }}/>

    <h4>Preview
    </h4>
    <div className="form-control">
      {
        widget.src && <img width="560" height="315"
        src={widget.src}/>
    }
    <br/>
      {widget.text}
    </div>
  </div>);
};
