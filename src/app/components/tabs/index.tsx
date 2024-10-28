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
export type ITabs = {
  children: ReactElement[]
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

function Tabs({ children }: ITabs) {
  const [stateTabs, setStateTabs] =
    useState<ITabsState>();
  useEffect(()=>{
    if(stateTabs?.tabList && !stateTabs.currentTab){
      setStateTabs(s=>({...s , currentTab: stateTabs.tabList[0]}))
    }
  },[stateTabs?.currentTab, stateTabs?.tabList])
  const value = useMemo(() => {
    return {
      ...stateTabs,
      setStateTabs,
    };
  }, [stateTabs]);
  console.log('check value', value);
  return (
    <TabsContext.Provider value={value}>
      <div className="flex flex-col">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export default Tabs;
