export const updateInvestmentDetails = (invDetail) => {
  return {
    type: "UpdateInvestmentDetails",
    data: invDetail,
  };
};

export const updateContributionDetails = (contributionDetail) => {
  return {
    type: "updateContributions",
    data: contributionDetail,
  };
};
