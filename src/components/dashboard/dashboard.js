import React, { useEffect, useState } from "react";
import firebaseDb from "../../firebase";
import Table from "react-bootstrap/Table";
import Shareholding from "./shareholding";
import { useSelector, useDispatch } from "react-redux";
import { updateContributionDetails } from "../../actions";

let usersList = [];

function getUserList(contributionDetails) {
  contributionDetails &&
    contributionDetails.forEach((contribution, ind) => {
      contribution["Contributors"].forEach((contributor) => {
        usersList.push(JSON.stringify(contributor["Contributor"]));
      });
    });
  usersList = usersList.filter((val, id, array) => array.indexOf(val) === id);
}

const Dashboard = () => {
  const contributionDetailsState = useSelector(
    (state) => state.contributionDetails
  );

  var [contributionDetails, setContributionDetails] = useState();
  const dispatch = useDispatch();

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
          dispatch(updateContributionDetails(data));
          getUserList(data);
          setUserDetails(usersList);
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
                  <td>30000</td>
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
