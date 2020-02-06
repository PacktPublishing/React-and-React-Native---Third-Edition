import initialState from "./initialState";

const title = initialState.App.title;
const articleLinks = [
  {
    name: "Home",
    url: "/"
  }
];
const homeLinks = initialState.App.links;
const typeMap = {
  FETCHING_ARTICLE: state => ({ ...state, title: "...", articleLinks }),
  FETCH_ARTICLE: (state, payload) => ({ ...state, title: payload.title }),
  FETCHING_ARTICLES: state => ({ ...state, title, links: homeLinks }),
  FETCH_ARTICLES: state => ({ ...state, title })
};

export default function App(state = initialState, { type, payload }) {
  const reducer = typeMap[type];
  return reducer ? reducer(state, payload) : state;
}
