import { useActionState } from "react";
import { InfoBlock } from "./InfoBlock";
import { updateName } from "../../promises";

export const UseFormStatus = () => {
  const [data, submitAction] = useActionState(
    async (previousState, formData) => {
      const name = await formData.get("name");
      const data = await updateName(4000, name);
      if (data.error) {
        return (
          <>
            <div>Error!</div>
            <div>{data.error}</div>
          </>
        );
      }
      return (
        <>
          <div>Success!</div>
          <div>{data}</div>
        </>
      );
    },
    null
  );

  return (
    <form action={submitAction}>
      <input type="text" name="name" style={{ marginRight: "10px" }} />
      <button type="submit">Submit</button>
      <InfoBlock data={data}/>
    </form>
  );
};
