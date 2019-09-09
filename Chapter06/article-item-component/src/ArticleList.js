import React, { Component } from "react";
import ArticleItem from "./ArticleItem";

export default class ArticleList extends Component {
  render() {
    const { articles, onClickToggle, onClickRemove } = this.props;

    return (
      <ul>
        {articles.map(i => (
          <ArticleItem
            key={i.id}
            article={i}
            onClickToggle={onClickToggle}
            onClickRemove={onClickRemove}
          />
        ))}
      </ul>
    );
  }
}
