import Tabs, {
  Tab,
  TabList,
  TabPannel,
} from "@/app/components/tabs";
const dataDemo = [
  {
    id: "0",
    tab: "One",
    panel: "1",
  },
  {
    id: "1",
    tab: "Two",
    panel: "2",
  },
];
function RootTabs() {
  return (
    <Tabs>
      <TabList>
        {dataDemo.map((data) => (
          <Tab value={data.id} key={data.id}>{data.tab}</Tab>
        ))}
      </TabList>
      <>
        {dataDemo.map((data) => (
          <TabPannel
            value={data.id}
            key={data.id}>
            <span>{data.panel}</span>
          </TabPannel>
        ))}
      </>
    </Tabs>
  );
}

export default RootTabs;
