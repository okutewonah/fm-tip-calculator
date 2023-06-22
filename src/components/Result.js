import React from "react";
import dollar_sign from "../assets/images/icon-dollar.svg";

const Result = (props) => {
  const handleReset = () => {
    props.onReset();
  };
  return (
    <div className="result-content">
      {/* Tip Amoung */}
      <div className="tip__amount">
        <div className="tip__text">
          <h2>Tip Amount</h2>
          <h3>/ person</h3>
        </div>
        <div className="tip__figure">
          <img src={dollar_sign} alt="dollar sign" />
          <p>{props.billResult?.tip_per_person ?? "0.00"}</p>
        </div>
      </div>
      {/* Total */}
      <div className="total">
        <div className="total__text">
          <h2>Tip Amount</h2>
          <h3>/ person</h3>
        </div>
        <div className="total__figure">
          <img src={dollar_sign} alt="dollar sign" />
          <p>{props.billResult?.total_per_person ?? "0.00"}</p>
        </div>
      </div>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Result;
