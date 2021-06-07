import React, { useState, useEffect, useRef } from "react";

function Typewriter() {
  const text = "Hi!, I'm Disu Oluwatoyin";

  const index = useRef(0);
  const [currentText, setCurrentText] = useState("");
  useEffect(() => {
    index.current = 0;
    setCurrentText("");
  }, [text]);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setCurrentText((value) => value + text.charAt(index.current));
      index.current++;
    }, 200);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [currentText, text]);
  return (
    <div>
      {currentText}
      <h2></h2>
    </div>
  );
}

export default Typewriter;
