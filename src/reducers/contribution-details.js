const contributionDetailsReducer = (contributionDetails = {}, action) => {
  switch (action.type) {
    case "UpdateContributionDetails":
      return action.data;
    default:
      return contributionDetails;
  }
};

export default contributionDetailsReducer;
