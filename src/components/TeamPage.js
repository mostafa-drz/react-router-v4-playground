import React, { Component } from 'react';
import Team from './Team';
import { Link, Redirect, Route } from 'react-router-dom';
import { getTeamNames, getTeamsArticles } from '../api';
import TeamLogo from './TeamLogos';
import slug from 'slug';
import Articles from './Articles';

class TeamPage extends Component{

  state = {
    teamName: [],
    articles: [],
    loading: true
  }

  componentDidMount(){
    const { teamId } = this.props.match.params;
    Promise.all([
      getTeamNames(),
      getTeamsArticles(teamId)
    ])
      .then(([teamNames, articles]) => {
        this.setState({ teamNames, articles, loading: false })
      })
  }


  render(){
    const { match } = this.props;
    const { teamId } = match.params;
    const { loading, teamNames, articles } = this.state;
    if( loading===false && !teamNames.includes(teamId)){
      return <Redirect to='/' />
    }

    return(
      <div>
        <Team id={teamId}>
          {
            (team) => team === null ? <div>Loading ...</div>
            :
            <div className="panel">
              <TeamLogo id={teamId} />
              <h1 className="medium-header">{team.name}</h1>
              <h4 style={{margin: 5}}>
                <Link 
                to={`/players?teamId=${teamId}`}
                style={{ cursor: 'pointer' }}>
                  View Roster
                </Link>
              </h4>
              <h4>Championships</h4>
              <ul className='championships'>
                {team.championships.map((ship) => <li key={ship}>{ship}</li>)}
              </ul>
              <ul className='info-list row' style={{ width: '100%' }}>
                <li>Established<div>{team.established}</div></li>
                <li>Manager<div>{team.manager}</div></li>
                <li>Coach<div>{team.coach}</div></li>
                <li>Record<div>{team.wins}-{team.losses}</div></li>
              </ul>
              <h2 className="header">Articles</h2>
              <ul className="articles">
                {
                  articles.map((article) => (
                    <li key={article.id}>
                      <Link to={`${match.url}/articles/${slug(article.title)}`}>
                        <h4 className="article-title">{article.title}</h4>
                        <h4 className="article-date">{article.date.toLocaleString()}</h4>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          }
        </Team>
      </div>
    );
  }
}

export default TeamPage;