import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);
  function handleReset() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }
  return (
    <div>
      <Bill bill={bill} onHandleBill={setBill} />
      <TipComp tip={tip1} onHandleTip={setTip1}>
        {"How did you like the service?"}
      </TipComp>
      <TipComp tip={tip2} onHandleTip={setTip2}>
        {"How did your friend like the service?"}
      </TipComp>
      <TotalOutput bill={bill} tip1={tip1} tip2={tip2} />
      <ResetBtn onHandleReset={handleReset} />
    </div>
  );
}

function Bill({ bill, onHandleBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onHandleBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function TipComp({ tip, onHandleTip, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onHandleTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was ok (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutley amazing (20%)</option>
      </select>
    </div>
  );
}

function TotalOutput({ bill, tip1, tip2 }) {
  const totalTipPercentage = (tip1 + tip2) / 2;
  return (
    <>
      {bill === 0 ? null : (
        <h3>
          You pay `${bill + (bill * totalTipPercentage) / 100}` (`$
          {bill} + ${(totalTipPercentage * bill) / 100} tip`)
        </h3>
      )}
    </>
  );
}

function ResetBtn({ onHandleReset }) {
  return <button onClick={onHandleReset}>Reset</button>;
}
