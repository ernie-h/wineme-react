import React from 'react';

export const HeadingWidget = ({widget, updateWidget}) => {
  let text;
  let size;
  return(<div>
    <h3>Heading Widget</h3>
    <label> Heading text</label>
      <input  onChange={()=> {
          widget.text = text.value;
          updateWidget(widget);
        }} ref={node => text = node} className="form-control" placeHolder="heading text"/>
      <label> Heading Size</label>
      <select onChange={() => {
          widget.size = size.value;
          updateWidget(widget);
        }}ref={node => size = node} className="form-control">
        <option className="form-control"value="1">Heading 1</option>
        <option className="form-control"value="2">Heading 2</option>
        <option className="form-control" value="3">Heading 3</option>
        <option className="form-control" value="4">Heading 4</option>
      </select>

      <h4>Preview</h4>
      {widget.size === '1' && <h1>{widget.text}</h1>}
      {widget.size === '2' && <h2>{widget.text}</h2>}
      {widget.size === '3' && <h3>{widget.text}</h3>}
      {widget.size === '4' && <h4>{widget.text}</h4>}
  </div>);
};
