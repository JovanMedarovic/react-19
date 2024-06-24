import { useActionState } from "react";
import { updateName } from "../../promises";

export const UseOptimistic = () => {
  const [data, submitAction, isPending] = useActionState(
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
      <h3>Send Message</h3>
      <input type="text" name="name" style={{ marginRight: "10px" }} />
      <button type="submit">Submit</button>
      <MessageBlock />
    </form>
  );
};
