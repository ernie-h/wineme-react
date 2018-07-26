import React from 'react';

export const ListWidget = ({widget, updateWidget}) => {
  let text;
  let order;
  return (<div>
    <h3>
      List Widget</h3>
    <textarea ref={node => text = node} onChange={() => {
        widget.listItems = text.value;
        updateWidget(widget);
      }} className='form-control' value={widget.listItems}></textarea>

    <label>
      <input ref={node => order = node} checked={widget.ordered} type="checkbox" onClick={() => {
          widget.ordered = order.checked;
          updateWidget(widget);
        }}/>
      Ordered
    </label>

    <h4>Preview</h4>
    {
      !widget.ordered
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
