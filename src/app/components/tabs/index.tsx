"use client";
import React, {
  createContext,
  ReactElement,
  useContext,
  useReducer,
} from "react";
import TabListComponent from "./components/TabList";
import TabComponent from "./components/Tab";
import TabPannelComponent from "./components/TabPannel";

export const TabList = TabListComponent;
export const Tab = TabComponent;
export const TabPannel = TabPannelComponent
export type ITabs = {
  children: ReactElement[];
};
export interface ITabsContext {
  state: ITabsState;
  dispatch: React.Dispatch<{
    type: DispatchTabs;
    idTab?: string;
  }>;
}
export interface ITabsState {
  tabList: string[];
  currentTab?: string;
}
const TabsContext = createContext<
  ITabsContext | undefined
>(undefined);
export enum DispatchTabs {
  reset,
  addTab,
  selectTab,
}
export const useTabs = () =>
  useContext(TabsContext);
const onDispatchTabs = (
  state: ITabsState,
  action: { type: DispatchTabs; idTab?: string }
): ITabsState => {

  switch (action.type) {
    case DispatchTabs.reset:
      return {
        tabList: [],
        currentTab: undefined,
      };
    case DispatchTabs.addTab:
      return {
        tabList: action.idTab ? [...state.tabList, action.idTab] : [],
        currentTab: state.tabList[0],
      };
    case DispatchTabs.selectTab:
      return {
        currentTab:
          action.idTab ?? state.currentTab,
        tabList: state.tabList,
      };
    default:
      throw new Error(
        `unknow type ${action.type}`
      );
  }
};

function Tabs({ children }: ITabs) {
  const [state, dispatch] = useReducer(
    onDispatchTabs,
    {
      tabList: [],
    }
  );
  console.log("check state", state);
  return (
    <TabsContext.Provider
      value={{ state, dispatch }}>
      <div className="flex flex-col">
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export default Tabs;
