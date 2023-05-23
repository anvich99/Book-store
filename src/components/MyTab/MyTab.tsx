import { Tab, TabList, Tabs, TabPanel } from "./styled";

interface MyTabProps {
  description: string;
  authors: string;
}

export const MyTab = ({ description, authors }: MyTabProps) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Description</Tab>
        <Tab>Authors</Tab>
        <Tab className="disabled">Reviews</Tab>
      </TabList>
      <TabPanel>{description}</TabPanel>
      <TabPanel>{authors}</TabPanel>
    </Tabs>
  );
};
