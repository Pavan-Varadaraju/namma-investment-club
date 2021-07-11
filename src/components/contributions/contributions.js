import React from "react";
import ContributionTable from "./contribution-table";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";

const Contributions = () => {
  const clubDetailsState = useSelector((state) => state.clubDetails);
  return (
    <>
      <div className="py-4">
        <div className="container-fluid text-center">
          <div className="container">
            <h1 className="display-4">Contributions</h1>
          </div>
        </div>
      </div>
      <Card bg={"success"} text="white" className="text-center">
        <Card.Header>
          <strong> Total Contribution </strong>
        </Card.Header>
        <Card.Body>
          <Card.Title> {clubDetailsState.totalContribution} </Card.Title>
        </Card.Body>
      </Card>
      <div className="box-shadow mt-4">
        <ContributionTable></ContributionTable>
      </div>
    </>
  );
};

export default Contributions;
