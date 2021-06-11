import React, { useEffect, useState } from "react";
import firebaseDb from "../../firebase";
import ProfileBanner from "../profile-banner";
import { users } from "../../assets/constant";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Table from "react-bootstrap/Table";
import * as Constants from "../../assets/constant";

const Dashboard = () => {
  const initialValues = {
    clubMemberName: "",
    individualContribution: "",
    investedDate: "",
  };

  var [contributionDetails, setContributionDetails] = useState(
    Constants.ContributionDetails
  );
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
      <div className="container-fluid text-center">
        <div className="container">
          <h1 className="display-4">Dashboard</h1>
        </div>
      </div>
      <ProfileBanner />
      <form autoComplete="off" onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="form-group input-group col-md-4 ml-2 mr-2 ml-md-0 mr-md-0">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <DropdownButton
              id="dropdown-basic-button"
              title={
                investorName === (undefined || "") ? "select" : investorName
              }
              onSelect={handleSelect}
            >
              {users.map((user, ind) => {
                return <Dropdown.Item eventKey={user}>{user}</Dropdown.Item>;
              })}
            </DropdownButton>
          </div>
          <div className="col-md-4 ml-2 mr-2 ml-md-0 mr-md-0">
            <div className="form-group input-group ">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-rupee-sign"></i>
                </div>
              </div>
              <input
                type="number"
                min="1"
                className="form-control"
                placeholder="Amount"
                name="individualContribution"
                value={values.individualContribution}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-md-4 ml-2 mr-2 ml-md-0 mr-md-0">
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i className="fas fa-calendar-alt"></i>
                </div>
              </div>
              <input
                type="date"
                className="form-control"
                placeholder="Date"
                name="investedDate"
                value={values.investedDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Save"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
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
          <table className="table table-borderless table-stripped border border-secondary">
            <thead className="thead-light text-center">
              <tr>
                <th colspan="2">% Shareholding</th>
              </tr>
            </thead>
            <tbody>
              {/* {Object.keys(contributionDetails).map((id) => { */}
              {/* return ( */}
              <tr>
                <td>Ganu</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Manju</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Pavan</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Puni</td>
                <td>20</td>
              </tr>
              <tr>
                <td>Santhu</td>
                <td>20</td>
              </tr>
              {/* );
              })} */}
            </tbody>
          </table>
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
