import React, { useRef } from "react";

function RefTutorial() {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.focus = "";
  };

  return (
    <div>
      <h1>Tshediso</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
