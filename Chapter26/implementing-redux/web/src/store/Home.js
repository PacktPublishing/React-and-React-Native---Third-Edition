import initialState from "./initialState";

const typeMap = {
  FETCHING_ARTICLES: state => ({ ...state, articles: [] }),
  FETCH_ARTICLES: (state, payload) => ({
    ...state,
    articles: payload.map(a => ({ ...a, display: "none" }))
  }),
  TOGGLE_ARTICLE: (state, id) => {
    const articles = [...state.articles];
    const index = articles.findIndex(a => a.id === id);

    articles[index] = {
      ...articles[index],
      display: articles[index].display === "none" ? "block" : "none"
    };

    return { ...state, articles };
  }
};

export default function Home(state = initialState, { type, payload }) {
  const reducer = typeMap[type];
  return reducer ? reducer(state, payload) : state;
}
