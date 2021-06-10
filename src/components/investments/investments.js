import React from "react";

const Investments = () => {
  return (
    <>
      <div className="py-4">
        <p>
          <strong>Mutual Funds</strong>
        </p>
      </div>
      <div className="row">
        <div className="col">
          <table className="table table-borderless table-stripped border border-primary">
            <thead className="thead-light">
              <tr>
                <th>Fund Name</th>
                <th>Invested Date</th>
                <th>Amount</th>
                <th>Folio Number</th>
                <th>Units</th>
                <th>Purchased NAV</th>
                <th>Current NAV</th>
                {/* <th>Current NAV</th> */}
                <th>Current Value</th>
                <th>Current Gain</th>
                <th>Invested By</th>
              </tr>
            </thead>
            <tbody>
              {/* {Object.keys(contributionDetails).map((id) => { */}
              {/* return ( */}
              <tr>
                <td>Quant Active Fund</td>
                <td>26-Apr-2021</td>
                <td>20000</td>
                <td>5103843783</td>
                <td>61.15</td>
                <td>327.05</td>
                <td>368.1931</td>
                <td>22515.0087</td>
                <td>2515.90</td>
                <td>Pavan</td>
                {/* <td>9.12</td> */}
              </tr>
              <tr>
              <td>Quant Active Fund</td>
                <td>26-Apr-2021</td>
                <td>20000</td>
                <td>5103843783</td>
                <td>61.15</td>
                <td>327.05</td>
                <td>368.1931</td>
                <td>22515.0087</td>
                <td>2515.90</td>
                <td>Manju</td>
              </tr>
              <tr>
              <td>Quant Small Cap Fund</td>
                <td>26-Apr-2021</td>
                <td>20000</td>
                <td>5103843783</td>
                <td>61.15</td>
                <td>327.05</td>
                <td>368.1931</td>
                <td>22515.0087</td>
                <td>2515.90</td>
                <td>Manju</td>
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

export default Investments;
