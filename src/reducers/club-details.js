const clubDetailsReducer = (clubDetails = {}, action) => {
  switch (action.type) {
    case "UpdateClubDetails":
      return action.data;
    default:
      return clubDetails;
  }
};

export default clubDetailsReducer;
