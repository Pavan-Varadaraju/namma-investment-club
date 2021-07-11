import React, { useEffect, useState } from "react";
import firebaseDb from "../../firebase";
import Table from "react-bootstrap/Table";
import Shareholding from "./shareholding";
import { useSelector } from "react-redux";
import {
  updateClubTotalContribution,
  updateStoreClubDetailsUserList,
  updateStoreContributionDetails,
} from "../../common/common-functions";

let usersList = [];
let usersListWithContribution = [];
let totalClubContribution = 0;

const getUserTotalContribution = (usersListWithContribution, usersList) => {
  let userListObject = [];
  totalClubContribution = 0;
  if (
    usersList &&
    usersList.length > 0 &&
    usersListWithContribution &&
    usersListWithContribution.length > 0
  ) {
    usersList.map((user) => {
      let userTotalContribution = 0;
      usersListWithContribution.map((usersWithContribution) => {
        if (
          JSON.parse(usersWithContribution).Contributor.FullName ===
          JSON.parse(user).FullName
        ) {
          userTotalContribution += JSON.parse(
            usersWithContribution
          ).ContributionAmount;
        }
      });
      let userObject = JSON.parse(user);
      userObject.UserTotalContribution = userTotalContribution;
      totalClubContribution += userTotalContribution;
      userListObject.push(userObject);
    });
    updateClubTotalContribution(totalClubContribution);
    updateStoreClubDetailsUserList(userListObject);
  }
};

function getUserList(contributionDetails) {
  contributionDetails &&
    contributionDetails.forEach((contribution, ind) => {
      contribution["Contributors"].forEach((contributor) => {
        usersList.push(JSON.stringify(contributor["Contributor"]));
        usersListWithContribution.push(JSON.stringify(contributor));
      });
    });

  usersList = usersList.filter((val, id, array) => array.indexOf(val) === id);
  usersListWithContribution = usersListWithContribution.filter(
    (val, id, array) => array.indexOf(val) === id
  );
  getUserTotalContribution(usersListWithContribution, usersList);
}

const Dashboard = () => {
  const contributionDetailsState = useSelector(
    (state) => state.contributionDetails
  );

  var [contributionDetails, setContributionDetails] = useState();

  var [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    if (contributionDetailsState) {
      setContributionDetails(contributionDetailsState);
      getUserList(contributionDetailsState);
      setUserDetails(usersList);
    } else {
      fetch(
        process.env.REACT_APP_API_BASEURL +
          process.env.REACT_APP_API_ENDPOINT_CONTRIBUTIONDETAILS
      )
        .then((resp) => resp.json())
        .then((data) => {
          setContributionDetails(data);
          getUserList(data);
          setUserDetails(usersList);
          updateStoreContributionDetails(data);
        });
    }

    // firebaseDb.child("clubMemberContribution").on("value", (snapshot) => {
    //   if (snapshot.val()) {
    //     setContributionDetails({
    //       ...snapshot.val(),
    //     });
    //   }
    // });
  }, []);

  const getTotalContribution = (userId) => {
    let totalContribution = 0;
    contributionDetails.forEach((contribution) => {
      contribution["Contributors"].forEach((contributor, ind) => {
        if (contributor.Contributor["id"] === userId) {
          totalContribution =
            totalContribution + contributor.ContributionAmount;
        }
      });
    });
    return totalContribution;
  };

  return (
    <>
      {contributionDetails &&
        usersList.length === 0 &&
        getUserList(contributionDetails)}
      <div className="py-4">
        <div className="container-fluid text-center">
          <div className="container">
            <h1 className="display-4">Dashboard</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Table striped bordered hover variant="dark" className="text-center">
            <thead>
              <tr>
                <th>Club Member Name</th>
                <th>Investment</th>
                <th>Current Value</th>
                <th>Gain</th>
                <th>% Gain</th>
              </tr>
            </thead>
            <tbody>
              {userDetails &&
                userDetails.length > 0 &&
                userDetails.map((user, ind) => {
                  return (
                    <tr>
                      <td>{JSON.parse(user)["FullName"]}</td>
                      <td>{getTotalContribution(JSON.parse(user)["id"])}</td>
                      <td>6547.24</td>
                      <td className="text-success">
                        <strong>547.24</strong>
                      </td>
                      <td>9.12</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Shareholding></Shareholding>
        </div>
        <div className="col">
          <div className="row">
            {/* className="table table-borderless table-stripped border border-success" */}
            <table className="table table-borderless table-stripped border border-success">
              <thead className="thead-light text-center">
                <tr>
                  <th colspan="2">Club Inflow</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Member Investment</td>
                  <td>Other Income</td>
                </tr>
                <tr>
                  <td>{totalClubContribution}</td>
                  <td>96</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <table className="table table-borderless table-stripped border border-warning">
              <thead className="thead-light text-center">
                <tr>
                  <th colspan="2">Club Investment</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Invested Amount</td>
                  <td>30000</td>
                </tr>
                <tr>
                  <td>Current Gain</td>
                  <td>2641.50</td>
                </tr>
                <tr>
                  <td>Current Value</td>
                  <td>32641.50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-borderless table-stripped border border-info">
            <thead className="thead-light text-center">
              <tr>
                <th>Balance Cash</th>
                <th>Total Networth</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>96</td>
                <td>32736.2081</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <table className="table table-borderless table-stripped border border-secondary">
            <thead className="thead-light text-center">
              <tr>
                <th colspan="2">Total Invested By</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>Pavan</td>
                <td>20000</td>
              </tr>
              <tr>
                <td>Manju</td>
                <td>10000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
