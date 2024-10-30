import { DispatchTabs } from ".";

export type IVariantTab =
  | "line"
  | "subtle"
  | "enclosed"
  | "outline"
  | "plain";
export type ITabs = {
  children: React.ReactElement[];
  variant?: IVariantTab;
  defaultTabId?: string;
};
export interface ITab {
  children: React.ReactNode;
  tabId: string;
}
export interface ITabsState {
  currentTab?: string;
  variant: IVariantTab;
}
export interface IActionDispatchTab {
  type: DispatchTabs;
  tabId?: string;
}
