function TabPannel({
  children,
}: {
  children: React.ReactElement;
}) {
  return <div key='tabPanel'>{children}</div>;
}

export default TabPannel;
