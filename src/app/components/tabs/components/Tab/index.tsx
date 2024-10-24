import { ReactNode, useMemo } from "react";
import { useTabList } from "../..";
import { Helper } from "@/utils/Helpers";

export interface ITab {
  children: ReactNode;
}
function Tab({ children }: ITab) {
  const idTab = useMemo(() => {
    return Helper.makeid(5);
  }, []);
  const { currentTab } = useTabList(idTab);
  return (
    <div
      tabIndex={idTab === currentTab ? 1 : 0}
      role="tab"
      onClick={() => {}}>
      {children}
    </div>
  );
}

export default Tab;
