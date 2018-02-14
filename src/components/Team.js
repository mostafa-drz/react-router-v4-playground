import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import { getTeam } from '../api';

export default class Team extends Component{
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
  }

  state = {
    team: null
  }

  componentDidMount(){
    const { id } = this.props;
    this.fetchTeam(id);
  }

  fetchTeam(id){
    this.setState({ team: null })
    getTeam(id)
      .then((team) => {
        this.setState({ team })
      })
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.id !== this.props.id){
      this.fetchTeam(nextProps.id);
    }
  }
  render(){
    const { team } = this.state;
    return this.props.children(team)
  }

}