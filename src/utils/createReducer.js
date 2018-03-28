const createReducer = (initialState, actionHandler) => {
  return (state = initialState, action) => {
    const handler = actionHandler[action.type];

    if (handler) {
      state = handler(state, action);
    }

    return state;
  };
};

export default createReducer;
