"use client";
import React, { useRef } from "react";
import { useTabs } from "../..";

export interface ITabList {
  children: React.ReactElement[];
}
function TabList({ children }: ITabList) {
  const valueTab = useTabs();
  if (!valueTab) {
    throw new Error(`undefined context useTabs`);
  }
  // const { variant } = valueTab.state;
  const tabListRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        height: tabListRef.current?.offsetHeight,
      }}
      className="relative w-fit flex flex-col">
      <div
        ref={tabListRef}
        className="absolute bg-transparent top-0 left-0 w-fit flex flex-row gap-1">
        {children}
      </div>
      <div
        style={{
          width: tabListRef.current?.clientWidth,
        }}
        className="absolute bottom-0 left-0 h-[1px] bg-light"
      />
    </div>
  );
}

export default TabList;
