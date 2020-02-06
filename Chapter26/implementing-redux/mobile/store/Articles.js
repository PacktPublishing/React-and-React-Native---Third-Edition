import initialState from "./initialState";

const typeMap = {
  SELECT_CATEGORY: (state, payload) => ({
    ...state,
    filter: payload,
    items: []
  }),
  FETCH_ARTICLES: (state, payload) => ({ ...state, items: payload })
};

export default (state = initialState, { type, payload }) => {
  const reducer = typeMap[type];
  return reducer ? reducer(state, payload) : state;
};
