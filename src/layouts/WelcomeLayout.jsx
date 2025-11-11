import React from "react";
import { Outlet } from "react-router-dom";
const WelcomeLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default WelcomeLayout;
