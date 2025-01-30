import { useTabs } from "../..";

function TabPannel({
  children,
  tabId,
}: {
  children: React.ReactElement;
  tabId: string;
}) {
  const valueTab = useTabs();
  if (!valueTab) {
    throw new Error(`undefined context useTabs`);
  }
  const { currentTab } = valueTab.state;
  return (
    <>
      {currentTab === tabId && (
        <div id={`panel-${tabId}`}>
          {children}
        </div>
      )}
    </>
  );
}

export default TabPannel;
