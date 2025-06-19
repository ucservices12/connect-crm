import { Routes, Route } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import {
  adminSettingsRoutes,
  adminBaseRoutes,
  employeeSettingsRoutes,
  currentSalesRoutes,
  futureSalesRoutes,
  salesMainRoutes,
} from "@/routes";
import {
  OrganazationTabs,
  EmployeeTabs,
  CurrentSalesTabs,
  FutureSalesTabs,
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

  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Page title="Home" />} />

        <Route path="employee/settings/*" element={<EmployeeTabs />}>
          {employeeSettingsRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Route>

        <Route path="admin/settings/*" element={<OrganazationTabs />}>
          {adminSettingsRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Route>

        {adminBaseRoutes.map(({ path, element, children }) => (
          <Route key={path} path={`admin/${path}`} element={element}>
            {children?.map((r) => (
              <Route key={r.path} path={r.path} element={r.element} />
            ))}
          </Route>
        ))}

        {salesMainRoutes.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}

        <Route path="current-sales/*" element={<CurrentSalesTabs />}>
          {currentSalesRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Route>

        <Route path="future-sales/*" element={<FutureSalesTabs />}>
          {futureSalesRoutes.map((r) => (
            <Route key={r.path} path={r.path} element={r.element} />
          ))}
        </Route>

        {/* Fallback Routes from Permissions */}
        {allRoutes
          .filter(
            (route) =>
              !route.path.startsWith("/employee/settings/") &&
              !route.path.startsWith("/admin/settings/") &&
              !route.path.startsWith("/admin/myteam/") &&
              !route.path.startsWith("/admin/")
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
