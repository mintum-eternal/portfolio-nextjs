'use client';
import React from "react";

export interface ITabList {
  children: React.ReactElement[];
}
function TabList({ children }: ITabList) {

  return (
    <div itemType="Tablist" className="flex flex-row gap-1">
      {children}
    </div>
  );
}

export default TabList;
