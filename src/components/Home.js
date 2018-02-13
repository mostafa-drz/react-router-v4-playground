import React, { Component } from 'react';
import { getTeamNames } from '../api';
import TeamLogos from './TeamLogos';
import { Link } from 'react-router-dom';
export default class Home extends Component{
  state = {
    names: []
  }

  componentDidMount(){
    getTeamNames()
      .then(( names ) => {
        this.setState({ names })
      })
  }
  render(){
    const { names } = this.state
    return(
      <div className="container">
        <h1 className="large-header">
          Hash History Basketball Team
        </h1>
        <h3 className="header text-center">
          select A Team
        </h3>
        <div className="home-grid">
          { names.map((id) => (
            <Link key={id} to={`/${id}`} >
              <TeamLogos id={id} width='125px' />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}