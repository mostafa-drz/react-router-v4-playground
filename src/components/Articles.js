import React, { Component } from 'react';
import Sidebar from './Sidebar';
import { getTeamsArticles } from '../api';

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
    return(
      <div className="container two-column">
        <Sidebar
          title='Articles'
          list={articleNames}
          loading={loading}
          {...this.props}
        />
      </div>
    );
  }
}

export default Articles;