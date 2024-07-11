/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useTransition } from "react";
import { updateName } from "../../promises";

export const AsyncTransition = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    startTransition(async () => {
      const data = await updateName(4000, name);
      setData(data);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleSubmit}>Submit</button>
      {isPending ? <div>Updating...</div> : <div>{data}</div>}
    </div>
  );
};
