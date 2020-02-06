import initialState from "./initialState";

const typeMap = {
  FETCH_ARTICLE: (state, article) => ({
    ...state,
    title: article.title,
    full: article.full
  }),
  CLEAR: state => ({ ...state, title: "", full: "" })
};

export default (state = initialState, { type, payload }) => {
  const reducer = typeMap[type];
  return reducer ? reducer(state, payload) : state;
};
