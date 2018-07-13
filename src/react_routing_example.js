class PageUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.updatePage = this.updatePage.bind(this);
    this.state = {
      id: ''
    };
  }
  componentDidMount() {
    this.updatePage(this.props.match.params.id);
  }
  componentWillReceiveProps(newProps) {
    this.updatePage(newProps.match.params.id);
  }

  updatePage(id) {
    this.setState({id: id});
  }

  render() {
    return (<h2>PageUpdate {this.state.id}
    </h2>);
  }
}

class App extends React.Component {
  render() {
    return (<Router>
      <div className="router">
        <Link to="/pageUpdate/345">
          PageUpdate 345</Link>
        <Link to="/pageUpdate/456">
          PageUpdate 456</Link>
        <Route path='/pageUpdate/:id' component={PageUpdate}/>
      </div>
    </Router>);
  }
}



const PageParam = ({match}) => {
  return (<h2>PageParam {match.params.id}
  </h2>);
};

const Page1 = () => {
  return (<h2>Page 1</h2>)
};

const Page2 = () => {
  return (<h2>Page 2</h2>)
};
