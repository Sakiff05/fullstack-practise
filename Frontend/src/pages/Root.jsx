import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
