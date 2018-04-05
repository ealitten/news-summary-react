import React, { Component } from 'react';
import Article from './Article';

// const savedResponse = require('./saved_response.json')
// const savedArticles = savedResponse.response.results

class ArticleList extends Component {
  renderArticles() {
    return this.state.articles.map((article) => {
      return (
        <li key={article.id}>
          <Article article={article} />
        </li>
      );
    })
  }
  render() {
      return (
        <div>
        <h2>The latest tech news from the Guardian</h2>
    
        <ul className="article-list">{this.renderArticles()}</ul>
      </div>
      )
  }
}

export default ArticleList;
