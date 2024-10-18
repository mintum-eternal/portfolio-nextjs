"use client";
import React, { ReactElement } from "react";
import TabListComponent from "./components/TabList";
export const TabList = TabListComponent;
export interface ITabs {
  children: ReactElement[];
}
function Tabs({ children }: ITabs) {
  console.log(children);
  return (
    <div className="flex flex-col">
      {children}
    </div>
  );
}

export default Tabs;
