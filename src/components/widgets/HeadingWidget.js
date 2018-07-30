import React from 'react';

export const HeadingWidget = ({widget, updateWidget, preview}) => {
  let text;
  let size;
  return (
    preview
    ? <div>
      {widget.size === 1 && <h1>{widget.text}</h1>}
      {widget.size === 2 && <h2>{widget.text}</h2>}
      {widget.size === 3 && <h3>{widget.text}</h3>}
      {widget.size === 4 && <h4>{widget.text}</h4>}
    </div>
    : <div className="editor">
      <h3>Heading</h3>
      <h4>
        {widget.name}</h4>
      <label>
        Heading text</label>
      <input onChange={() => {
          widget.text = text.value;
          updateWidget(widget);
        }} ref={node => text = node} className="form-control" placeholder="heading text"/>
      <label>
        Heading Size</label>
      <select onChange={() => {
          widget.size = parseInt(size.value);
          updateWidget(widget);
        }} ref={node => size = node} className="form-control">
        <option value="" selected="selected" disabled="disabled" hidden="hidden">
          Choose Heading size</option>
        <option className="form-control" value="1">Heading 1</option>
        <option className="form-control" value="2">Heading 2</option>
        <option className="form-control" value="3">Heading 3</option>
        <option className="form-control" value="4">Heading 4</option>
      </select>

      <h4>Preview</h4>
      {widget.size === 1 && <h1>{widget.text}</h1>}
      {widget.size === 2 && <h2>{widget.text}</h2>}
      {widget.size === 3 && <h3>{widget.text}</h3>}
      {widget.size === 4 && <h4>{widget.text}</h4>}
    </div>);
};
