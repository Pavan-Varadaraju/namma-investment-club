import {
  updateClubDetails,
  updateContributionDetails,
  updateInvestmentDetails,
} from "../actions";
import store from "../store";

export const updateStoreContributionDetails = (contributionDetails) => {
  //   const state = store.getState();
  store.dispatch(updateContributionDetails(contributionDetails));
};

export const updateStoreInvestmentDetails = (investmentDetails) => {
  store.dispatch(updateInvestmentDetails(investmentDetails));
};

export const updateStoreClubDetailsUserList = (usersList) => {
  const state = store.getState();
  state.clubDetails.usersList = usersList;
  store.dispatch(updateClubDetails(state.clubDetails));
};

export const updateStoreClubTotalContribution = (totalContribution) => {
  const state = store.getState();
  state.clubDetails.totalContribution = totalContribution;
  store.dispatch(updateClubDetails(state.clubDetails));
};
