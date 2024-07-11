import { useActionState } from "react";
import { updateName } from "../../promises";

export const UseActionState = () => {
  const [state, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const name = await formData.get("userName");
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
      <input type="text" name="userName" style={{ marginRight: "10px" }} />
      <button type="submit">Submit</button>
      {isPending ? <div>Loading...</div> : <div>{state}</div>}
    </form>
  );
};
