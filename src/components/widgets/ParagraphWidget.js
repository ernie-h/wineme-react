import React from 'react'

export const ParagraphWidget = ({widget, updateWidget, preview}) => {
  let name;
  let text;
  return (
    preview
    ? <p className="form-control">
      {widget.text}
    </p>
    : <div>
    <h2 className="mt-3">Paragraph Widget</h2>
    <div className="form-inline">
      <h4>Widget Name:</h4>
      <h5 className="text-secondary ml-2 mt-1">{widget.name}</h5>
    </div>
      <p>Please enter the topic description:
      </p>
      <textarea ref={node => text = node} className='form-control' placeholder="This topic focuses on..." onChange={() => {
          widget.text = text.value;
          updateWidget(widget);
        }}/>
        <label className="mt-3">
          Widget Name:
          <input ref={node => name = node} className="form-control" placeholder={widget.name} onChange={() => widget.name = name.value}/>
        </label>
      <h4 className="mt-2">Preview:</h4>
      <p className="form-control pb-3 pt-3">
        {widget.text}
      </p>
    </div>);
};
