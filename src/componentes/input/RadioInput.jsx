import React from "react";

const RadioInput = (p) => {
  return (
    <div>
      <input className={p.styleInput} type="radio" key={p.key} />{" "}
      <label className={p.styleLabel}>{p.text}</label>
    </div>
  );
};

export default RadioInput;
