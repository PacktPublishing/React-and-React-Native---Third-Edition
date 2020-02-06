import initialState from "./initialState";

const typeMap = {
  FETCH_ARTICLE: (state, article) => ({
    ...state,
    component: "article",
    title: article.title
  }),
  FETCH_ARTICLES: state => ({ ...state, component: "articles" }),
  SELECT_CATEGORY: (state, title) => ({ ...state, title })
};

export default (state = initialState, { type, payload }) => {
  const reducer = typeMap[type];
  return reducer ? reducer(state, payload) : state;
};
