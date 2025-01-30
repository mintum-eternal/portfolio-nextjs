"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import TabListComponent from "./components/TabList";
import TabComponent from "./components/Tab";
import TabPannelComponent from "./components/TabPannel";
import { IActionDispatchTab, ITabs, ITabsState } from "./types";

export const TabList = TabListComponent;
export const Tab = TabComponent;
export const TabPannel = TabPannelComponent;


export interface ITabsContext {
  state: ITabsState;
  dispatch: React.Dispatch<IActionDispatchTab>;
}

const TabsContext = createContext<
  ITabsContext | undefined
>(undefined);
export enum DispatchTabs {
  defaultFirstTab,
  selectTab,
}
export const useTabs = () =>
  useContext(TabsContext);
const onDispatchTabs = (
  state: ITabsState,
  action: IActionDispatchTab
): ITabsState => {
  let newState;
  switch (action.type) {
    case DispatchTabs.defaultFirstTab:
      newState = {
        currentTab:
          state.currentTab ?? action.tabId,
      };
      break;
    case DispatchTabs.selectTab:
      newState = {
        currentTab:
          action.tabId ?? state.currentTab,
      };
      break;
    default:
      throw new Error(
        `unknow type ${action.type}`
      );
  }
  return { ...state, ...newState };
};

function Tabs({
  children,
  variant = "line",
  defaultTabId
}: ITabs) {
  const [state, dispatch] = useReducer(
    onDispatchTabs,
    {
      variant,
    }
  );
  useEffect(()=>{
    if(defaultTabId){
      dispatch({
        type: DispatchTabs.selectTab,
        tabId: defaultTabId
      })
    }
  },[defaultTabId])
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
