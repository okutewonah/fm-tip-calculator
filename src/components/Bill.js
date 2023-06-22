import React, { useState } from "react";

const Bill = (props) => {
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);

  const handleCalculation = () => {
    const percent = (bill * tip) / 100;
    const newBill = Number(bill) + Number(percent);
    const tipAmount = percent / people;
    const total = newBill / people;

    console.log("Tip", tipAmount);
    console.log("New bill", newBill);
    console.log("Total", total);

    props.onResultCalculated({
      tip_per_person: tipAmount,
      total_per_person: total,
    });
  };

  return (
    <div className="bill-content">
      <h1>Bill</h1>
      <div className="bill-input">
        <input
          onChange={(e) => {
            setBill(e.target.value);
            handleCalculation();
          }}
          type="number"
          id="bill"
          className="bill"
          placeholder="0"
        />
      </div>

      {/* Tip Selection */}
      <h2>Select Tip %</h2>
      <div className="tips">
        <button onClick={() => setTip(5)}>5%</button>
        <button onClick={() => setTip(10)}>10%</button>
        <button onClick={() => setTip(15)}>15%</button>
        <button onClick={() => setTip(25)}>25%</button>
        <button onClick={() => setTip(50)}>50%</button>
        <input
          onChange={(e) => {
            setTip(e.target.value);
            handleCalculation();
          }}
          type="number"
          className="custom"
          placeholder="Custom"
        />
      </div>
      {/* End Tip Selection */}

      {/* People */}
      <div className="people">
        <div className="people__heading">
          <h2>Number of People</h2>
          <h2 className="error">Can't be zero</h2>
        </div>
        <input
          onChange={(e) => setPeople(e.target.value)}
          type="number"
          className="people__field"
          placeholder="0"
        />
      </div>
      {/* End People */}
    </div>
  );
};

export default Bill;
