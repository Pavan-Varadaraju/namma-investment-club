import React from "react";
import CollapsibleTable from "./CollapsibleTable";

const Contributions = () => {
  return (
    <>
      <div className="py-4">
        <div className="container-fluid text-center">
          <div className="container">
            <h1 className="display-4">Contributions</h1>
          </div>
        </div>
      </div>
      <div className="box-shadow">
        <CollapsibleTable></CollapsibleTable>
      </div>
    </>
  );
};

export default Contributions;
