import React, { Component } from 'react';
import { getPlayers } from '../api';
import Sidebar from './Sidebar';
import { parse } from 'query-string';

export default class Players extends Component{
  state = {
    players: [],
    loading: true
  }

  componentDidMount(){
    const { location } = this.props;
    location.search ? this.fetchPlayers(parse(location.search).teamId)
                    : this.fetchPlayers();
  }

  fetchPlayers(team){
    getPlayers(team)
      .then((players) => {
        this.setState({
          players,
          loading: false
        })
      })
  }
  render(){
    const { loading, players } = this.state;
    const { location, match } = this.props;
    return(
      <div className="container two-column">
        <Sidebar
          title='Players'
          list={players.map((player) => player.name )}
          loading={loading}
          {...this.props}
        />
        {loading===false && location.pathname==='/players'
          ? <div className="sidebar-instruction">Select a player</div>
          : null
        }
      </div>
    );
  }
}