import { Tab, TabList, Tabs, TabPanel } from "./styled";

export const MyTab = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Authors</Tab>
        <Tab className="disabled">Reviews</Tab>
      </TabList>
      <TabPanel>Panel 1</TabPanel>
      <TabPanel>Panel 2</TabPanel>
    </Tabs>
  );
};
