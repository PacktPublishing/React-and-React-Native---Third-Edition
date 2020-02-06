import initialState from "./initialState";

const typeMap = {
  FETCHING_ARTICLE: state => ({ ...state, full: "..." }),
  FETCH_ARTICLE: (state, payload) => ({ ...state, ...payload }),
  FETCHING_ARTICLES: state => ({ full: "" })
};

export default function Article(state = initialState, { type, payload }) {
  const reducer = typeMap[type];
  return reducer ? reducer(state, payload) : state;
}
