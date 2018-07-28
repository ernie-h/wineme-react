import React from 'react';

export const ListWidget = ({widget, updateWidget}) => {
  let text;

  return (<div>
    <h3>List</h3>
      <h4 > {widget.name}</h4>
    <textarea ref={node => text = node} onChange={() => {
        widget.listItems = text.value;
        updateWidget(widget);
      }} className='form-control' value={widget.listItems}></textarea>

    <label>
      <input checked={widget.ordered === 'ORDERED'}
        type="checkbox" onClick={() => {
          widget.ordered = widget.ordered === 'ORDERED'? 'UNORDERED': 'ORDERED';
          updateWidget(widget);
        }}/>
      Ordered
    </label>

    <h4>Preview</h4>
    {widget.ordered === 'UNORDERED'
        ? <ul>
            {
              widget.listItems.split('\n').map((item, index) => (<li key={index}>
                {item}
              </li>))
            }
          </ul>
        : <ol>
            {
              widget.listItems.split('\n').map((item, index) => (<li key={index}>
                {item}
              </li>))
            }
          </ol>
    }
  </div>);
};
