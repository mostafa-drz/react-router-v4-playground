import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { getTeamsArticles } from '../api';
import { Route } from 'react-router-dom';
import Article from './Article';

class Articles extends Component{

  state = {
    articleNames: [],
    loading: true
  }

  componentDidMount(){
    const { teamId } = this.props.match.params;

    getTeamsArticles(teamId)
      .then((articles) => {
        this.setState({
          loading: false,
          articleNames: articles.map((article) => article.title )
        })
      })
  }

  render(){
    const { articleNames, loading } = this.state;
    const { match } = this.props;
    const { teamId } = match.params;
    return(
      <div className="container two-column">
        <Sidebar
          title='Articles'
          list={articleNames}
          loading={loading}
          {...this.props}
        />
      <Route 
        path={`${match.url}/:articleId`}
        render={({ match }) => (
          <Article articleId={match.params.articleId} teamId={teamId}>
            {
              (article) => {
             return article === null ? <div>Loading ...</div>
              :
                <div className="panel">
                  <article className="article">
                    <h1 className="header">{article.title}</h1>
                    <p>{article.body}</p>
                  </article>
                </div>
              
            }}
          </Article>
        )}
      />
      </div>
    );
  }
}

export default Articles;