import { useFormStatus } from "react-dom";

export const InfoBlock = ({ data }) => {
  const status = useFormStatus(); // status = { pending, data, method, action }
  return (
    <div>
      {status.pending ? <div>Loading...</div> : <div>{data}</div>}
    </div>
  );
};
