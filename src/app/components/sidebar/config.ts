import configPath from "@/utils/configPath.json";
import DashboardIcon from "./components/icons/dashboard";
import WidgetsIcon from "./components/icons/widgets";
import ElementsIcon from "./components/icons/elements";
export interface ISidebarItem {
  url: string;
  icon?: () => JSX.Element;
  title: string;
  disabled?: boolean;
  subSidebar?: ISidebarItem[]
}
export const listSidebar: ISidebarItem[] = [
  {
    url: configPath.dashboard._,
    icon: DashboardIcon,
    title: "Dashboard",
  },
  {
    url: configPath.elements._,
    icon: ElementsIcon,
    title: "Elements",
    subSidebar: [
      {
        url: configPath.elements.button,
        title: "Button",
      },
      {
        url: configPath.elements.tabs,
        title: "Tabs",
      }
    ]
  },
  {
    url: configPath.widgets._,
    icon: WidgetsIcon,
    title: "Widgets",
    subSidebar: [
      {
        url: configPath.widgets.dataEntry,
        title: "Data Entry",
      },
      {
        url: configPath.widgets.calendar,
        title: "Calendar",
      }
    ]
  },
];
