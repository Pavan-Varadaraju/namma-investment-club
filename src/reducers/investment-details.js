const investmentDetailsReducer = (investmentDetails = {}, action) => {
  switch (action.type) {
    case "UpdateInvestmentDetails":
      return action.data;
    default:
      return investmentDetails;
  }
};

export default investmentDetailsReducer;
