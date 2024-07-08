import React, { useRef, forwardRef } from "react";

const ChildComponent = forwardRef((props, ref) => (
  <input ref={ref} type="text" style={{ marginRight: "10px" }} />
));

// const ChildComponent = ({ref: inputRef}) => (
//   <input 
//   type="text"
//   style={{ marginRight: "10px" }} 
//   ref={(ref) => {
//     if (ref) {
//       console.log('Input mounted');
//       inputRef.current = ref;
//     } else {
//       console.log('Input unmounted');
//       inputRef.current = null;
//     }

//     return () => {
//       // also good for cleanup event handlers
//       console.log('Cleanup function called');
//       inputRef.current = null;
//     };
//   }}
//   />
// );

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
