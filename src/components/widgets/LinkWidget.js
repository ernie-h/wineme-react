import React from 'react'

export const LinkWidget = ({widget, updateWidget, preview}) => {
  let name;
  let src;
  let text;
  return (
    preview
    ? <a href={widget.src}>
      {widget.text}
    </a>
    : <div>
    <h2 className="mt-3">Link Widget</h2>
    <div className="form-inline">
      <h4>Widget Name:</h4>
      <h5 className="text-secondary ml-2 mt-1">{widget.name}</h5>
    </div>
      <p>Please enter the link text here:
      </p>
      <input ref={node => text = node} className='form-control mb-3' placeholder="Link here" onChange={() => {
          widget.text = text.value;
          updateWidget(widget);
        }}/>
      <p>Please enter a valid link here:
      </p>
      <input ref={node => src = node} id="URL" className='form-control' placeholder="www.facebook.com" onChange={() => {
          widget.src = src.value;
          updateWidget(widget);
        }}/>
        <label className="mt-3">
          Widget Name:
          <input ref={node => name = node} className="form-control" placeholder={widget.name} onChange={() => widget.name = name.value}/>
        </label>
      <h4 className="mt-2">
        Preview:
      </h4>
      <a href={widget.src}>
        {widget.text}
      </a>
    </div>);
};
