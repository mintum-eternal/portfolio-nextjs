import {
  useEffect,
  useState,
} from "react";
import { DispatchTabs, useTabs } from "../..";
import { Helper } from "@/utils/Helpers";

export interface ITab {
  children: React.ReactNode;
}
function Tab({ children }: ITab) {
  const valueTab = useTabs();
  const [id, setId] = useState<string>();

  useEffect(() => {
    if (!id) {
      const newId = Helper.makeid(5);
      setId(newId);
      valueTab?.dispatch({type: DispatchTabs.addTab, idTab: newId})
    }
  }, [id, valueTab]);
  const onChangeTab = () => {
    valueTab?.dispatch({
      idTab: id,
      type: DispatchTabs.selectTab,
    });
  };
  return (
    <div
      id={id}
      onClick={onChangeTab}
      className={
        id === valueTab?.state.currentTab
          ? "bg-primary"
          : "bg-secondary"
      }>
      {children}
    </div>
  );
}

export default Tab;
