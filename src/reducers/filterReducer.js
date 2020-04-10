export default (state = { isSearching: false }, action) => {
  switch (action.type) {
    case "ITEMSEARCH":
      return {
        isSearching: action.payload.isSearching,
        searchKey: action.payload.searchKey,
      };
    default:
      return state;
  }
};
