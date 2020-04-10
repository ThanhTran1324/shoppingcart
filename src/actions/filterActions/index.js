export const itemSearch = (searchKey) => (dispatch) => {
  if (searchKey === undefined)
    dispatch({ type: "ITEMSEARCH", payload: { isSearching: false } });
  else
    dispatch({
      type: "ITEMSEARCH",
      payload: { searchKey: searchKey, isSearching: true },
    });
};
