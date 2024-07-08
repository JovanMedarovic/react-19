import React, { useRef, forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => (
  <input ref={ref} type="text" style={{ marginRight: "10px" }} />
));

export const Ref = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <ChildComponent ref={inputRef} />
      <button onClick={focusInput}>Focus input field</button>
    </div>
  );
};
