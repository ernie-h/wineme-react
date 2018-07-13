import React from 'react';
import ModuleListItem from '../components/ModuleListItem';

class ModuleList extends React.Component {
  render() {
    return (<ul className="list-group">
      <ModuleListItem/>
      <ModuleListItem/>
    </ul>);
  }
}

export default ModuleList;
