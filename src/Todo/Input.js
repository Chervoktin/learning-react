import React from "react";

function Input(props) {
  return (
    <input
      type="input"
      value={props.value}
      onChange={(event) => {
        props.setValue(event.target.value);
      }}
    ></input>
  );
}

export default Input;
