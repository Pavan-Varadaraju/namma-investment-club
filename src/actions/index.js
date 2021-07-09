export const updateInvestmentDetails = (invDetail) => {
  return {
    type: "UpdateInvestmentDetails",
    data: invDetail,
  };
};

export const updateContributionDetails = (contributionDetail) => {
  return {
    type: "UpdateContributionDetails",
    data: contributionDetail,
  };
};

export const updateClubDetails = (clubDetail) => {
  return {
    type: "UpdateClubDetails",
    data: clubDetail,
  };
};
