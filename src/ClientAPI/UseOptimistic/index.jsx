import React, { useState, useTransition, useOptimistic } from "react";
import { updateName } from "../../promises";

export const UseOptimistic = () => {
  const [inputName, setInputName] = useState("");
  const [data, setData] = useState("");
  const [isPending, startTransition] = useTransition();
  const [optimisticName, setOptimisticName] = useOptimistic(data);

  const handleSubmit = async () => {
    startTransition(async () => {
      setOptimisticName(inputName);
      const data = await updateName(4000, inputName, false);
      setData(data);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleSubmit}>Submit</button>
      {data !== optimisticName ? (
        <div>{`${optimisticName}`}</div>
      ) : (
        data && <div style={{ color: "lightgreen" }}>{`${data} ✓`}</div>
      )}
      {isPending && <div>Updating...</div>}
    </div>
  );
};
