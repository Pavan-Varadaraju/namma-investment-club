import React, { useEffect, useState } from "react";
import * as Constants from "../../common/constant";
import { getLatestNavs } from "../../services/api.services";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import { updateStoreInvestmentDetails } from "../../common/common-functions";

const Investments = () => {
  var [totalInvestment, setTotalInvestment] = useState(0);
  var [totalInvestmentNetworth, setTotalInvestmentNetworth] = useState(0);
  var [totalGain, setTotalGain] = useState(0);

  const investmentDetailsState = useSelector(
    (state) => state.investmentDetails
  );
  var [investmentDetails, setInvestmentDetails] = useState({});
  updateStoreInvestmentDetails(Constants.InvestmentDetails);

  useEffect(() => {
    let totalInv = 0;
    let totalInvNetworth = 0;
    let totGain = 0;
    fetch(
      process.env.REACT_APP_API_BASEURL +
        process.env.REACT_APP_API_ENDPOINT_CONTRIBUTIONDETAILS
    )
      .then((resp) => resp.json())
      .then((data) => console.log("resp data", data));
    if (investmentDetailsState && investmentDetailsState.responseData) {
      setInvestmentDetails(investmentDetailsState);
      investmentDetailsState.responseData.forEach((inv, ind) => {
        totalInv = totalInv + inv.InvestedAmount;
        getLatestNavs(inv.SchemeCode).then((data) => {
          inv["CurrentNav"] = data;
          totalInvNetworth = totalInvNetworth + data * inv.Units;
          totGain = totGain + (data * inv.Units - inv.InvestedAmount);
          setInvestmentDetails([
            ...investmentDetailsState.responseData.slice(0, ind),
            inv,
            ...investmentDetailsState.responseData.slice(ind + 1),
          ]);
          setTotalInvestmentNetworth(totalInvNetworth);
          setTotalGain(totGain.toFixed(2));
        });
      });
    }
    setTotalInvestment(totalInv);
  }, []);

  return (
    <>
      <div className="py-4">
        <div className="container-fluid text-center">
          <div className="container">
            <h1 className="display-4">Investments</h1>
          </div>
        </div>
        <p>
          <strong>Mutual Funds</strong>
        </p>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-borderless table-stripped border border-primary">
            <thead className="thead-light text-center">
              <tr>
                <th>Fund Name</th>
                <th>Invested Date</th>
                <th>Amount</th>
                <th>Folio Number</th>
                <th>Units</th>
                <th>Purchased NAV</th>
                <th>Current NAV</th>
                <th>Current Value</th>
                <th>Current Gain</th>
                <th>Invested By</th>
              </tr>
            </thead>
            <tbody>
              {investmentDetails &&
                investmentDetails.length > 0 &&
                investmentDetails.map((investment, ind) => {
                  let currentGain = Number(
                    investment.Units * investment.CurrentNav -
                      investment.InvestedAmount
                  ).toFixed(2);
                  let currentValue = Number(
                    investment.Units * investment.CurrentNav
                  ).toFixed(2);
                  return (
                    <tr className="text-center">
                      <td className="text-left">{investment.FundName}</td>
                      <td>{investment.InvestedOn}</td>
                      <td>{investment.InvestedAmount}</td>
                      <td>{investment.FolioNumber}</td>
                      <td>{investment.Units}</td>
                      <td>{investment.PurchasedNav}</td>
                      <td>{investment.CurrentNav}</td>
                      <td className="text-right">{currentValue}</td>
                      <td
                        className={
                          currentGain < 0
                            ? "text-right text-danger"
                            : "text-right text-success"
                        }
                      >
                        <strong>{currentGain}</strong>
                      </td>
                      <td>{investment.InvestedBy}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card bg="light" text="dark" className="text-center">
            <Card.Header>
              <strong>Total Investments</strong>
            </Card.Header>
            <Card.Body>
              <Card.Title> {totalInvestment.toFixed(2)} </Card.Title>
              {/* <Card.Text>
                the bulk of the card's content.
              </Card.Text> */}
            </Card.Body>
          </Card>
        </div>

        <div className="col">
          <Card
            bg={totalGain > 0 ? "success" : "danger"}
            text="white"
            className="text-center"
          >
            <Card.Header>
              <strong> Total Gain </strong>
            </Card.Header>
            <Card.Body>
              <Card.Title> {totalGain} </Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col">
          <Card bg="primary" text="white" className="text-center">
            <Card.Header>
              <strong>Total Investment Networth </strong>
            </Card.Header>
            <Card.Body>
              <Card.Title> {totalInvestmentNetworth.toFixed(2)} </Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Investments;
