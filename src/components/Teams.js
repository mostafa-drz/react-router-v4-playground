import React, { Component } from 'react';
import { getTeamNames } from '../api';
import Sidebar from './Sidebar';

export default class Teams extends Component{
  state = {
    teamNames: [],
    loading: true
  }

  componentDidMount(){
    getTeamNames()
      .then((teamNames) => {
        this.setState({ loading:false, teamNames})
      });
  }
  render(){
    const { teamNames, loading } = this.state;
    const { location, match } = this.props;
    return(
      <div className="container two-columns">
        <Sidebar
          title='Teams'
          list={teamNames}
          {...this.props}
          loading={loading}
        />

        {loading === false && location.pathname === '/teams' 
          ? <div className="sidebar-instruction">Select a team</div>
          : null
        }
      </div>
    );
  }
}