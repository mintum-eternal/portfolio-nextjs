'use client';
export interface ITabList {
  children: React.ReactElement[];
}
function TabList({ children }: ITabList) {
  console.log(children.filter);

  return (
    <div className="flex flex-row gap-1">
      {children}
    </div>
  );
}

export default TabList;
