import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const Shareholding = () => {
  const investmentDetails = useSelector((state) => state.investmentDetails);
  var [percentageShareHolding, setPercentageShareHolding] = useState(0);

  useEffect(() => {
      
  }, []);
  return (
    <>
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
    </>
  );
};

export default Shareholding;
