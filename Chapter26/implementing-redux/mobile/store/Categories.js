import initialState from "./initialState";

const typeMap = {
  SELECT_CATEGORY: (state, payload) => {
    const items = [...state.items];
    const oldIndex = items.findIndex(i => i.selected === true);
    const newIndex = items.findIndex(i => i.title === payload);

    items[oldIndex] = { ...items[oldIndex], selected: false };
    items[newIndex] = { ...items[newIndex], selected: true };

    return { ...state, items };
  }
};

export default (state = initialState, { type, payload }) => {
  const reducer = typeMap[type];
  return reducer ? reducer(state, payload) : state;
};
