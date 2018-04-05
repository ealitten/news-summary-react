import React, { Component } from 'react';

class Article extends Component {
  render() {
    const article = this.props.article;
    
    return (
      <div className={`article-${article.id}`}>
        <div className="article-headline">{article.webTitle}</div>
        <div classNae="article-link"><p><a href={article.webUrl}>Link to article</a></p></div>
        <div className="article-date">{article.webPublicationDate}</div>
      </div>
    );
  }
}

export default Article;