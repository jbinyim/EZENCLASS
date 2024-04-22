const intialState = { contactList: [], keyword: "" };

const reducer = (state = intialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      state.contactList.push({
        name: payload.name,
        phoneNumber: payload.phoneNumber,
      });
      break;
    case "SEARCH_BY_USENAME":
      state.keyword = payload.keyword;
      break;
  }
  return { ...state };
};

export default reducer;
