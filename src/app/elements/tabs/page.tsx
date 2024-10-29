import Tabs, {
  Tab,
  TabList,
  TabPannel,
  TabPannels,
} from "@/app/components/tabs";

function RootTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
      </TabList>
      <TabPannels>
        <TabPannel>
          <span>1</span>
        </TabPannel>
        <TabPannel>
          <span>2</span>
        </TabPannel>
      </TabPannels>
    </Tabs>
  );
}

export default RootTabs;
