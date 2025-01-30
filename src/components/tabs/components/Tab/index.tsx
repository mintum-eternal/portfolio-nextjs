import { useCallback, useEffect } from "react";
import { DispatchTabs, useTabs } from "../..";
import { ITab } from "../../types";

function Tab({ children, tabId }: ITab) {
  const valueTab = useTabs();
  if (!valueTab) {
    throw new Error(`undefined context useTabs`);
  }
  const { currentTab } = valueTab.state;
  const onChangeTab = useCallback(() => {
    valueTab.dispatch({
      tabId,
      type: DispatchTabs.selectTab,
    });
  }, [tabId, valueTab]);
  useEffect(() => {
    if (!currentTab) {
      valueTab.dispatch({
        tabId,
        type: DispatchTabs.defaultFirstTab,
      });
    }
  }, [currentTab, onChangeTab, tabId, valueTab]);

  return (
    <div
      id={tabId}
      onClick={onChangeTab}
      className="cursor-pointer">
      {children}
    </div>
  );
}

export default Tab;
