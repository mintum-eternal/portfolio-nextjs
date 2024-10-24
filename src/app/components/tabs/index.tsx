"use client";
import React, {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import TabListComponent from "./components/TabList";
import TabComponent from "./components/Tab";
export const TabList = TabListComponent;
export const Tab = TabComponent
export interface ITabs {
  children: ReactElement[];
}
export interface ITabsContext {
  tabList?: string[];
  currentTab?: string;
  setStateTabs: React.Dispatch<
    React.SetStateAction<ITabsState | undefined>
  >;
}
export interface ITabsState {
  tabList: string[];
  currentTab?: string;
}
const TabsContext = createContext<
  ITabsContext | undefined
>(undefined);
export const useTabs = () =>
  useContext(TabsContext);
export const useTabList = (tab: string) => {
  const tabs = useTabs();
  let newTabList: string[] = tabs?.tabList ?? [];
  useEffect(()=>{
  if (tabs) {
    newTabList = tabs.tabList ? [...tabs.tabList, tab] : [tab];
    tabs.setStateTabs((s) => ({
      ...s,
      tabList: newTabList,
    }));
  }
  },[])
  
  return { currentTab: tabs?.currentTab ?? newTabList[0] };
};
function Tabs({ children }: ITabs) {
  const [stateTabs, setStateTabs] =
    useState<ITabsState>();

  const value = useMemo(() => {
    return {
      ...stateTabs,
      setStateTabs,
    };
  }, [stateTabs]);
  return (
    <TabsContext.Provider value={value}>
      <div className="flex flex-col">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export default Tabs;
