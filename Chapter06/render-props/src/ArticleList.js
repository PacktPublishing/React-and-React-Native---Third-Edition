import React from "react";
import ArticleItem from "./ArticleItem";

export default function ArticleList({
  articles,
  onClickToggle,
  onClickRemove
}) {
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
