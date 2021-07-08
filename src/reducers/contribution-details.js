const contributionDetailsReducer = (contributionDetails = null, action) => {
  switch (action.type) {
    case "UpdateContributionDetails":
      return action.data;
    default:
      return contributionDetails;
  }
};

export default contributionDetailsReducer;
