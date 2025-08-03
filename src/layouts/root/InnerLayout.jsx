import React from "react";
import { Outlet } from "react-router";

export default function InnerLayout() {
  return (
    <div className="inner-body">
      <Outlet />
    </div>
  );
}
