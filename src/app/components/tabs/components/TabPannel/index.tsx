import { useTabs } from "../..";

function TabPannel({
  children,
  value,
}: {
  children: React.ReactElement;
  value: string;
}) {
  const valueTab = useTabs();
  return (
    <>
      {valueTab?.state.currentTab === value && (
        <div id={`panel-${value}`}>
          {children}
        </div>
      )}
    </>
  );
}

export default TabPannel;
