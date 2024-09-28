import configPath from "@/utils/configPath.json";
import DashboardIcon from "./components/icons/dashboard";
import WidgetsIcon from "./components/icons/widgets";
import ElementsIcon from "./components/icons/elements";
export interface ISidebarItem {
  url: string;
  icon: () => JSX.Element;
  title: string;
  disabled?: boolean;
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
  },
  {
    url: configPath.widgets._,
    icon: WidgetsIcon,
    title: "Widgets",
  },
];
