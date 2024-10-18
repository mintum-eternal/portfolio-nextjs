export interface ITabList {
  children: React.ReactElement[];
}
function TabList({ children }: ITabList) {
  return (
    <div className="flex flex-row gap-1">
      {children}
    </div>
  );
}

export default TabList;
