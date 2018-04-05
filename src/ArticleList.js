import React, { Component } from 'react';
import Article from './Article';

// const savedResponse = require('./saved_response.json')
// const savedArticles = savedResponse.response.results

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      articles: [],
      error: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/saved_response.json")
      .then(response => response.json())
      .then(
        (data) => {
          this.setState({
            isLoaded: true,
            articles: data.response.results
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

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
    const error = this.state.error;
    const isLoaded = this.state.isLoaded;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
        <h2>The latest tech news from the Guardian</h2>

        <ul className="article-list">{this.renderArticles()}</ul>
        </div>
      )
    }
  }
}

export default ArticleList;
