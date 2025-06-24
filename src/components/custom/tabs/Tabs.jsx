import { Outlet } from "react-router-dom";
import { TypographyH1 } from "../Typography";
import {
  organazationTabLinks,
  employeeTablinks,
  salesCotactTabLinks,
  currentSalesTabLinks,
  futureSalesTabLinks,
  saleSettingTabLinks,
} from "./TabNavigationLinks";
import SettingsNav from "@/components/SettingsNav";

export const OrganazationTabs = () => {
  return (
    <>
      <TypographyH1>Settings</TypographyH1>
      <SettingsNav links={organazationTabLinks} />
      <Outlet />
    </>
  );
};

export const EmployeeTabs = () => {
  return (
    <>
      <TypographyH1>Profile Settings</TypographyH1>
      <SettingsNav links={employeeTablinks} />
      <Outlet />
    </>
  );
};

// sales tabs
export const CurrentSalesTabs = () => {
  return (
    <>
      <TypographyH1>Current Sales</TypographyH1>
      <SettingsNav links={currentSalesTabLinks} />
      <Outlet />
    </>
  );
};

export const FutureSalesTabs = () => {
  return (
    <>
      <TypographyH1>Future Sales</TypographyH1>
      <SettingsNav links={futureSalesTabLinks} />
      <Outlet />
    </>
  );
};

export const ContactSalesTabs = () => {
  return (
    <>
      <TypographyH1>Sales Contact</TypographyH1>
      <SettingsNav links={salesCotactTabLinks} />
      <Outlet />
    </>
  );
};

export const SellSettingsTabs = () => {
  return (
    <>
      <TypographyH1>Sales Settings</TypographyH1>
      <SettingsNav links={saleSettingTabLinks} />
      <Outlet />
    </>
  );
};
