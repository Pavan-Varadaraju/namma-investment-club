import investmentDetailsReducer from "./investment-details";
import contributionDetailsReducer from "./contribution-details";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  investmentDetails: investmentDetailsReducer,
  contributionDetails: contributionDetailsReducer,
});

export default allReducers;
