import React from "react";
import { Tab, Tabs, TabList, TabPanel, ReactTabsFunctionComponent, TabProps } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Taba } from "./styled";
export const CustomTab: ReactTabsFunctionComponent<TabProps> = ({ children, ...otherProps }) => (
  <Taba {...otherProps}>
    <h1>{children}</h1>
  </Taba>
);

CustomTab.tabsRole = "Tab";
export const Taby = () => {
  return (
    <Tabs>
      <TabList>
        <CustomTab>Description</CustomTab>
        <CustomTab>Authors</CustomTab>
        <CustomTab>Reviews</CustomTab>
      </TabList>
      <TabPanel>Panel 1</TabPanel>
      <TabPanel>Panel 2</TabPanel>
    </Tabs>
  );
};
