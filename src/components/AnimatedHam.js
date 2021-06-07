import React, { useState } from "react";
import "./AnimatedHam.css";

function AnimatedHam() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  return (
    <div className="hamburger-menu">
      <div
        onClick={handleClick}
        className={click ? "line line-1 change " : "line line-1"}
      ></div>
      <div
        onClick={handleClick}
        className={click ? " line line-2 change" : "line line-2"}
      ></div>
      <div
        onClick={handleClick}
        className={click ? "line line-3 change" : "line line-3"}
      ></div>
    </div>
  );
}

export default AnimatedHam;
