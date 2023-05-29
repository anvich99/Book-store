import styled from "styled-components";
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from "react-tabs";
import { BodySecondary, BodySecondaryNormal, Colors, SublineText } from "ui";

const Tabs = styled(UnstyledTabs)`
  /* border: 1px solid #e0e0e0; */
  background: white;
` as any;

const TabList = styled(UnstyledTabList)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
` as any;

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: "selected",
  disabledClassName: "disabled",
})`
  flex-grow: 1;
  text-align: center;
  padding: 12px 0;
  list-style: none;
  border-bottom: 1px solid #e0e0e0;
  ${BodySecondaryNormal};
  color: ${Colors.Secondary};
  cursor: pointer;

  &:first-child {
    border-left: none;
  }

  &.selected {
    ${BodySecondary}
    border-bottom: 2px solid ${Colors.Primary};
  }

  &.disabled {
    color: #e0e0e0;
    cursor: not-allowed;
  }
` as any;

const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: "selected" })`
  display: none;
  padding: 48px 20px;

  &.selected {
    display: block;
    height: 300px;
  }
` as any;

Tab.tabsRole = "Tab";
Tabs.tabsRole = "Tabs";
TabPanel.tabsRole = "TabPanel";
TabList.tabsRole = "TabList";

export { Tab, TabList, Tabs, TabPanel };
