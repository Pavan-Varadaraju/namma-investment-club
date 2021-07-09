import investmentDetailsReducer from "./investment-details";
import contributionDetailsReducer from "./contribution-details";
import clubDetailsReducer from "./club-details";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  investmentDetails: investmentDetailsReducer,
  contributionDetails: contributionDetailsReducer,
  clubDetails: clubDetailsReducer
});

export default allReducers;
