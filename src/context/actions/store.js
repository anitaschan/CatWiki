export const storeAction = (dispatch, data) => {
  const newData = { ...data };
  Object.keys(newData).map((breed) => {
    newData[breed] = { ...newData[breed], searchCount: 0 };
  });

  dispatch({ type: "INITIALISE_STATE", payload: newData });
};
