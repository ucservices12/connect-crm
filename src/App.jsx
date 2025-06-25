// App.jsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import {
  adminSettingsRoutes,
  adminBaseRoutes,
  employeeSettingsRoutes,
  currentSalesRoutes,
  futureSalesRoutes,
  salesMainRoutes,
  salesSettingsRoutes,
  salesContactRoutes,
  financeMainRoutes,
} from "@/routes";

import {
  OrganazationTabs,
  EmployeeTabs,
  CurrentSalesTabs,
  FutureSalesTabs,
  SellSettingsTabs,
  ContactSalesTabs,
} from "@/components/custom/tabs/Tabs";
import { userPermissions, subRouteMeta } from "@/pages/permissions/PagesPermission";

export function Page({ title }) {
  return (
    <h1 className="scroll-m-20 text-3xl sm:text-4xl font-bold tracking-tight text-balance">
      {title}
    </h1>
  );
}

function getAllRoutes(permissions) {
  const allRoutes = [];
  Object.keys(permissions).forEach((key) => {
    if (Array.isArray(permissions[key])) {
      permissions[key].forEach((sub) => {
        if (subRouteMeta[sub]) {
          allRoutes.push({
            path: subRouteMeta[sub].url,
            title: sub,
          });
        }
      });
    }
  });
  return allRoutes;
}

export default function App() {
  const allRoutes = getAllRoutes(userPermissions);

  const renderNestedRoutes = (routes) =>
    routes.map((r) => <Route key={r.path} path={r.path} element={r.element} />);

  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Page title="Home" />} />

        <Route path="employee/settings/*" element={<EmployeeTabs />}>
          {renderNestedRoutes(employeeSettingsRoutes)}
        </Route>

        <Route path="admin/settings/*" element={<OrganazationTabs />}>
          {renderNestedRoutes(adminSettingsRoutes)}
        </Route>

        {adminBaseRoutes.map(({ path, element, children }) => (
          <Route key={path} path={`admin/${path}`} element={element}>
            {renderNestedRoutes(children || [])}
          </Route>
        ))}

        {renderNestedRoutes(salesMainRoutes)}

        <Route path="contacts/*" element={<ContactSalesTabs />}>
          {renderNestedRoutes(salesContactRoutes)}
        </Route>

        <Route path="current-sales/*" element={<CurrentSalesTabs />}>
          {renderNestedRoutes(currentSalesRoutes)}
        </Route>

        <Route path="future-sales/*" element={<FutureSalesTabs />}>
          {renderNestedRoutes(futureSalesRoutes)}
        </Route>

        <Route path="sales-settings/*" element={<SellSettingsTabs />}>
          {renderNestedRoutes(salesSettingsRoutes)}
        </Route>

        {/* ✅ Add Finance Route Group */}
        <Route path="finance/*" >
          {renderNestedRoutes(financeMainRoutes)}
        </Route>

        {/* Fallback from Permissions */}
        {allRoutes
          .filter(
            (route) =>
              !route.path.startsWith("/employee/settings/") &&
              !route.path.startsWith("/admin/settings/") &&
              !route.path.startsWith("/admin/") &&
              !route.path.startsWith("/contacts") &&
              !route.path.startsWith("/current-sales") &&
              !route.path.startsWith("/future-sales") &&
              !route.path.startsWith("/sales-settings") &&
              !route.path.startsWith("/finance")
          )
          .map((route) => (
            <Route
              key={route.path}
              path={route.path.startsWith("/") ? route.path.slice(1) : route.path}
              element={<Page title={route.title} />}
            />
          ))}
      </Route>
    </Routes>
  );
}
