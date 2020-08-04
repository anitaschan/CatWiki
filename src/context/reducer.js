const Reducer = (state, { type, payload }) => {
  switch (type) {
    case "INCREMENT_BREED_SEARCH":
      const searchCount = state[payload.name].searchCount++;

      return {
        ...state,
        [payload.name]: { ...state[payload.name], searchCount: searchCount },
      };

    case "INITIALISE_STATE":
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default Reducer;
