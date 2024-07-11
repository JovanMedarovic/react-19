/* eslint-disable @typescript-eslint/no-unused-vars */
import { use, Suspense } from "react";
import { getData } from "../../promises";
import { ThemeContext } from "../../ThemeContext";

const MOCKED_USER_ENABLED_THEMES = true;
const isUserEnabledThemes = MOCKED_USER_ENABLED_THEMES;

const DataList = ({ commentsPromise }) => {
  const data = use(commentsPromise);
  return data.map((data) => <p key={data}>{data}</p>);
}

export const Use = () => {
  const getThemeBtn = () => {
    if (isUserEnabledThemes) {
      const theme = use(ThemeContext);
      return (
        <button
          style={{ backgroundColor: theme?.color }}
          onClick={() => theme?.toggle()}
        >
          Toggle Theme
        </button>
      );
    }
  };

  return (
    <>
      {/*//! UseContext => use !*/}
      {getThemeBtn()}

      {/*//! Trigger suspense in promise => use !*/}
      {/* <Suspense
        fallback={<div>Fetching data...</div>}
      >
        <DataList commentsPromise={getData()} />
      </Suspense> */}
    </>
  );
};
