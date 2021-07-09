import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import watch from "redux-watch";
import store from "../../store";

let clubDetailsState;

const Shareholding = () => {
  clubDetailsState = useSelector((state) => state.clubDetails);

  var [clubDetails, setClubDetails] = useState(clubDetailsState);

  const getPercentageShareHolding = (userId) => {
    let percentageShareHolding = 0;
    if (clubDetailsState.usersList && clubDetailsState.totalContribution) {
      clubDetailsState.usersList.map((user) => {
        if (user.id === userId) {
          percentageShareHolding =
            (user.UserTotalContribution / clubDetailsState.totalContribution) *
            100;
        }
      });
    }
    return percentageShareHolding;
  };

  // let w = watch(store.getState, "clubDetails");
  // store.subscribe(
  //   w((newVal, oldVal, objectPath) => {
  //     // console.log("%s changed from %s to %s", objectPath, oldVal, newVal);
  //   })
  // );

  return (
    <>
      <table className="table table-borderless table-stripped border border-secondary">
        <thead className="thead-light text-center">
          <tr>
            <th colspan="2">% Shareholding</th>
          </tr>
        </thead>
        <tbody>
          {clubDetails &&
            clubDetails.usersList &&
            clubDetails.usersList.map((user, ind) => {
              return (
                <tr>
                  <td>{user.FullName}</td>
                  <td>{getPercentageShareHolding(user.id)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default Shareholding;
