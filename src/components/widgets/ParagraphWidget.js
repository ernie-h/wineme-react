import React from 'react'

export const ParagraphWidget = ({widget, updateWidget, preview}) => {
  let text;
  return (
    preview
    ? <p className="form-control">
      {widget.text}
    </p>
    : <div>
      <h3>Paragraph</h3>
      <h4 >
        {widget.name}</h4>
      <p>Please enter he topic description:
      </p>
      <textarea ref={node => text = node} className='form-control' placeholder="This topic focuses on..." onChange={() => {
          widget.text = text.value;
          updateWidget(widget);
        }}/>

      <h4>
        Preview:
      </h4>
      <p className="form-control">
        {widget.text}
      </p>
    </div>);
};
