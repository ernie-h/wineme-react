import React from 'react';

class Widget extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>
       {this.props.widget.text}
    </li>;
  }
}

const WidgetList = ({ widgets }) => (
 <ul>
   {widgets.map(widget =>
      <Widget key={widget.id}
                widget={widget}/>)}
 </ul>)

export default Widget;
