import { useEffect, useState } from "react";
import { DispatchTabs, useTabs } from "../..";

export interface ITab {
  children: React.ReactNode;
  value: string;
}
function Tab({ children, value }: ITab) {
  const valueTab = useTabs();
  const [id, setId] = useState<string>();

  useEffect(() => {
    if (!id) {
      const newId = value;
      setId(newId);
      valueTab?.dispatch({
        type: DispatchTabs.addTab,
        idTab: newId,
      });
    }
  }, [id, value, valueTab]);
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
      className={`cursor-pointer 
        ${
          id === valueTab?.state.currentTab
            ? "bg-primary"
            : "bg-secondary"
        }
      `}>
      {children}
    </div>
  );
}

export default Tab;
