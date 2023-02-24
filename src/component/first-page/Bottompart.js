import React from "react";
import Chart from "./Chart";


const Bottompart = () => {

  return (
    <div className="bottom-part">
      <div className="b-first">
        <p>Sales Figure</p>
        <h1>$10,430</h1>
      </div>
      <div className="b-second">
        <Chart className="chart"/>
      </div>
    </div>
  );
};

export default Bottompart;
