import React, { useEffect, useState } from "react";
import firebaseDb from "../../firebase";
import Table from "react-bootstrap/Table";
import * as Constants from "../../assets/constant";
import Shareholding from "./shareholding";
import { useSelector, useDispatch } from "react-redux";
import { updateContributionDetails } from "../../actions";

const Dashboard = () => {
  const initialValues = {
    clubMemberName: "",
    individualContribution: "",
    investedDate: "",
  };

  const contributionDetailsState = useSelector(
    (state) => state.contributionDetails
  );

  var [contributionDetails, setContributionDetails] = useState(
    Constants.ContributionDetails
  );
  const dispatch = useDispatch();
  
  dispatch(updateContributionDetails("Constants.ContributionDetails"));
  var [userDetails, setUserDetails] = useState([]);
  var [investorName, setInvestorName] = useState("");

  var [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    console.log("e", e);
    if (e.target) {
      var { name, value } = e.target;
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSelect = (e) => {
    console.log(e);
    setInvestorName(e);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    firebaseDb.child("clubMemberContribution").push(values, (err) => {
      if (err) {
        console.log("error", err);
      }
    });
  };

  useEffect(() => {
    let usersList = [];
    contributionDetails.forEach((contribution, ind) => {
      contribution["Contributors"].forEach((contributor) => {
        usersList.push(JSON.stringify(contributor["Contributor"]));
      });
    });
    usersList = usersList.filter((val, id, array) => array.indexOf(val) === id);
    setUserDetails(usersList);
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
        if (contributor.Contributor["UserId"] === userId) {
          totalContribution =
            totalContribution + contributor.ContributionAmount;
        }
      });
    });
    return totalContribution;
  };

  return (
    <>
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
                      <td>
                        {getTotalContribution(JSON.parse(user)["UserId"])}
                      </td>
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
                {/* {Object.keys(contributionDetails).map((id) => { */}
                {/* return ( */}
                <tr>
                  <td>Member Investment</td>
                  <td>Other Income</td>
                </tr>
                <tr>
                  <td>30000</td>
                  <td>96</td>
                </tr>
                {/* );
              })} */}
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
                {/* {Object.keys(contributionDetails).map((id) => { */}
                {/* return ( */}
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
                {/* );
              })} */}
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
              {/* {Object.keys(contributionDetails).map((id) => { */}
              {/* return ( */}
              <tr className="text-center">
                <td>96</td>
                <td>32736.2081</td>
              </tr>
              {/* );
              })} */}
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
              {/* {Object.keys(contributionDetails).map((id) => { */}
              {/* return ( */}
              <tr>
                <td>Pavan</td>
                <td>20000</td>
              </tr>
              <tr>
                <td>Manju</td>
                <td>10000</td>
              </tr>
              {/* );
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
