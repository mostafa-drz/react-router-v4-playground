import { Component } from 'react';
import PropTypes from 'prop-types';

class DynamicImport extends Component{

  static propTypes = {
    load: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired
  }
  
  state = {
    component: null
  }

  componentWillMount(){
    this.props.load()
      .then((mod) => {
        this.setState({ component: mod.default });
      });
  }
  render(){
    const { component } = this.state;

    return this.props.children(component);
  }
}

export default DynamicImport;