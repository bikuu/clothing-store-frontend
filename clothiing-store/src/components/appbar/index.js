import AppbarDesktop from "./AppbarDesktop";
import AppbarMobile from "./AppbarMobile";

import React from "react";

const Appbar = ({ matches }) => {
  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
};

export default Appbar;
