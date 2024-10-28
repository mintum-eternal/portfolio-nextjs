import {
  ReactNode,
  useMemo,
} from "react";
import { useTabs } from "../..";
import { Helper } from "@/utils/Helpers";

export interface ITab {
  children: ReactNode;
}
function Tab({ children }: ITab) {
  const valueTab = useTabs()
  const idTab = useMemo(() => {
    return Helper.makeid(5);
  }, []);
  if (!valueTab?.tabList?.includes(idTab)) {
    valueTab?.setStateTabs(s => ({ ...s, tabList: [...(valueTab?.tabList ?? []), idTab]}))
  }
  const onChangeTab = () => {
    if(valueTab?.setStateTabs){
      valueTab.setStateTabs(s => ({ ...s, currentTab: idTab}))
    }
  } 
  return (
    <div
      id={idTab}
      onClick={onChangeTab}
      className={
        idTab === valueTab?.currentTab
          ? "bg-primary"
          : "bg-secondary"
      }
      role="tab">
      {children}
    </div>
  );
}

export default Tab;
