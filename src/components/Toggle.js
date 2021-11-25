import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function click() {
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={click}>
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
