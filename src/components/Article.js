import React, { Component } from 'react';
import { getArticle } from '../api';
import PropTypes from 'prop-types';

class Article extends Component{

  state = {
    article: null
  }
  static propTypes = {
    articleId: PropTypes.string.isRequired,
    teamId: PropTypes.string.isRequired
  }

  componentDidMount(){
    const { articleId, teamId } = this.props;
    this.fetchArticle(articleId, teamId);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.articleId !== this.props.articleId){
      this.fetchArticle(nextProps.articleId, nextProps.teamId);
    }
  }

  fetchArticle(articleId, teamId){
    this.setState({ article: null })
    getArticle(teamId, articleId)
      .then((article) => {
        this.setState({ article})
      });
  }

  render(){
    const { article } = this.state;
    return this.props.children(article);
  }
}

export default Article;